'use client';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { Carousel, CarouselProps } from '..';
import { StrapiBrand } from '@/app/types';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrandFixture,
  CarouselFixture,
  ImageFixture,
  StyledImageFixture,
} from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import theme from '@/app/styles/theme';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';

describe('Carousel', () => {
  const renderComponent = (
    overrides: Partial<CarouselProps> = {},
    contextOverrides: Partial<StrapiBrand> = {}
  ) => {
    const defaults = (props: Partial<CarouselProps>): CarouselProps => ({
      carousel: CarouselFixture(),
      ...props,
    });
    return render(
      <ChakraProvider theme={theme}>
        <BrandProvider brandOverrides={BrandFixture(contextOverrides)}>
          <Carousel {...defaults(overrides)} />
        </BrandProvider>
      </ChakraProvider>
    );
  };

  describe('All stories should render successfully', () => {
    testStories(Stories);
  });

  it('matches snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });

  it('shows arrow buttons if flag is true', () => {
    const rendered = renderComponent();
    const arrowLeft = rendered.queryByLabelText('Show previous image');
    const arrowRight = rendered.queryByLabelText('Show next image');
    expect(arrowLeft).toBeInTheDocument();
    expect(arrowRight).toBeInTheDocument();
  });

  it('does not show arrow buttons if displayArrows is false', () => {
    const rendered = renderComponent({
      carousel: CarouselFixture({
        displayArrows: false,
      }),
    });
    const arrowLeft = rendered.queryByLabelText('Show previous image');
    const arrowRight = rendered.queryByLabelText('Show next image');
    expect(arrowLeft).not.toBeInTheDocument();
    expect(arrowRight).not.toBeInTheDocument();
  });

  it('changes the image if transitionTime is defined', async () => {
    const rendered = renderComponent();
    const firstImage = rendered.getByAltText('Craft cocktail with lemon twist');
    const firstCounter = rendered.getByText('1/3');

    expect(firstImage).toBeInTheDocument();
    expect(firstCounter).toBeInTheDocument();

    await waitFor(
      () => {
        const secondImage = rendered.getByAltText('Outrigger canoe');
        const secondCounter = rendered.getByText('2/3');

        expect(secondImage).toBeInTheDocument();
        expect(secondCounter).toBeInTheDocument();

        const firstImage = rendered.queryByAltText(
          'Craft cocktail with lemon twist'
        );
        expect(firstImage).not.toBeInTheDocument();
      },
      { timeout: 1500 }
    );
  });

  it('does NOT change the image if transitionTime is not defined', async () => {
    const rendered = renderComponent({
      carousel: CarouselFixture({
        transitionTime: undefined,
      }),
    });
    const firstImage = rendered.getByAltText('Craft cocktail with lemon twist');
    const firstCounter = rendered.getByText(`1/3`);

    expect(firstImage).toBeInTheDocument();
    expect(firstCounter).toBeInTheDocument();

    await waitFor(
      () => {
        const secondImage = rendered.queryByAltText('Outrigger canoe');
        expect(secondImage).not.toBeInTheDocument();

        const firstImage = rendered.getByAltText(
          'Craft cocktail with lemon twist'
        );
        const firstCounter = rendered.getByText(`1/3`);

        expect(firstCounter).toBeInTheDocument();
        expect(firstImage).toBeInTheDocument();
      },
      { timeout: 1500 }
    );
  });

  it('increments displayed image if right arrow is clicked', async () => {
    const rendered = renderComponent();
    const arrowRight = rendered.getByLabelText('Show next image');
    const firstImage = rendered.getByAltText('Craft cocktail with lemon twist');
    const firstCounter = rendered.getByText(`1/3`);

    expect(firstImage).toBeInTheDocument();
    expect(firstCounter).toBeInTheDocument();

    arrowRight?.click();
    // wait for transition animation
    await waitFor(
      () => {
        const secondImage = rendered.getByAltText('Outrigger canoe');
        const secondCounter = rendered.getByText('2/3');

        expect(secondImage).toBeInTheDocument();
        expect(secondCounter).toBeInTheDocument();

        const firstImage = rendered.queryByAltText(
          'Craft cocktail with lemon twist'
        );
        expect(firstImage).not.toBeInTheDocument();
      },
      { timeout: 600 }
    );
  });

  it('decrements displayed image if left arrow is clicked', async () => {
    const rendered = renderComponent();
    const arrowLeft = rendered.getByLabelText('Show previous image');
    const firstImage = rendered.getByAltText('Craft cocktail with lemon twist');
    const firstCounter = rendered.getByText(`1/3`);

    expect(firstImage).toBeInTheDocument();
    expect(firstCounter).toBeInTheDocument();

    arrowLeft?.click();
    // wait for transition animation
    await waitFor(
      () => {
        const secondImage = rendered.getByAltText('Dragon boat');
        const secondCounter = rendered.getByText('3/3');

        expect(secondImage).toBeInTheDocument();
        expect(secondCounter).toBeInTheDocument();

        const firstImage = rendered.queryByAltText(
          'Craft cocktail with lemon twist'
        );
        expect(firstImage).not.toBeInTheDocument();
      },
      { timeout: 600 }
    );
  });

  it('hides counter if flag is false', () => {
    const rendered = renderComponent({
      carousel: CarouselFixture({ displayCounter: false }),
    });
    const counter = rendered.queryByText('1/3');
    expect(counter).not.toBeInTheDocument();
  });

  it('renders arrows and does NOT render dots if more than 5 images', () => {
    const rendered = renderComponent({
      carousel: CarouselFixture({
        images: [
          ...CarouselFixture().images,
          StyledImageFixture({
            media: ImageFixture({
              url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/8203015ace4f442ef439488dcd11d914.jpeg',
              typename: 'UploadFile',
            }),
            alt: 'drink two',
          }),
          StyledImageFixture({
            media: ImageFixture({
              url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/8203015ace4f442ef439488dcd11d914.jpeg',
              typename: 'UploadFile',
            }),
            alt: 'drink three',
          }),
          StyledImageFixture({
            media: ImageFixture({
              url: 'https://sunkenstudio-strapi-cms.nyc3.digitaloceanspaces.com/8203015ace4f442ef439488dcd11d914.jpeg',
              typename: 'UploadFile',
            }),
            alt: 'drink four',
          }),
        ],
      }),
    });
    const firstDotBtn = rendered.queryByLabelText(
      'View Craft cocktail with lemon twist'
    );
    const arrowLeft = rendered.getByLabelText('Show previous image');
    const arrowRight = rendered.getByLabelText('Show next image');

    expect(firstDotBtn).not.toBeInTheDocument();
    expect(arrowLeft).toBeInTheDocument();
    expect(arrowRight).toBeInTheDocument();
  });

  it('changes image when a dot button is clicked', async () => {
    const rendered = renderComponent();
    const firstImage = rendered.getByAltText('Craft cocktail with lemon twist');
    const firstCounter = rendered.getByText(`1/3`);
    const thirdDotBtn = rendered.getByLabelText('view Dragon boat');

    expect(firstImage).toBeInTheDocument();
    expect(firstCounter).toBeInTheDocument();

    thirdDotBtn.click();
    // wait for transition animation
    await waitFor(
      () => {
        const secondImage = rendered.getByAltText('Dragon boat');
        const secondCounter = rendered.getByText('3/3');

        expect(secondImage).toBeInTheDocument();
        expect(secondCounter).toBeInTheDocument();

        const firstImage = rendered.queryByAltText(
          'Craft cocktail with lemon twist'
        );
        expect(firstImage).not.toBeInTheDocument();
      },
      { timeout: 600 }
    );
  });
});
