'use client';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { Carousel, CarouselProps } from '..';
import { StrapiBrand } from '@/app/types';
import { ChakraProvider } from '@chakra-ui/react';
import { BrandFixture, CarouselFixture, ImageFixture } from '@/app/fixtures';
import { BrandProvider } from '@/app/contexts/BrandContext';
import theme from '@/app/styles/theme';
import { testStories } from '@/app/helpers/testStorybook';
import * as Stories from '../index.stories';
import exp from 'constants';

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
    const arrowLeft = rendered.getByLabelText('Show next image');
    const firstImage = rendered.getByAltText('Craft cocktail with lemon twist');
    const firstCounter = rendered.getByText(`1/3`);

    expect(firstImage).toBeInTheDocument();
    expect(firstCounter).toBeInTheDocument();

    arrowLeft?.click();
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

  // TODO: Dots allow to jump to different images
  // TODO: arrows render and dots do not if more than 5 images are passed
});
