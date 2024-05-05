'use client';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Feature } from '..';

describe('Feature', () => {
  it('match snapshot', () => {
    const rendered = render(
      <Feature
        type={'headset'}
        subHeader={'this is the subheader'}
        blurb={'this is the blurb'}
      />
    );
    expect(rendered).toMatchSnapshot();
  });

  it('if given subheader, subheader should render', () => {
    const subheader = 'this is the subheader';
    const rendered = render(
      <Feature
        type={'headset'}
        subHeader={subheader}
        blurb={'this is the blurb'}
      />
    );
    expect(rendered.getByText(subheader)).toBeDefined();
  });

  it('if given blurb, blurb should render', () => {
    const blurb = 'this is the blurb';
    const rendered = render(
      <Feature
        type="headset"
        subHeader={'this is the subheader'}
        blurb={blurb}
      />
    );
    expect(rendered.getByText(blurb)).toBeDefined();
  });

  it('if given icon type, icon should render', () => {
    const rendered = render(
      <Feature
        type="headset"
        subHeader={'this is the subheader'}
        blurb={'this is the blurb'}
      />
    );
    expect(rendered.getByTitle('headset icon')).toBeDefined();
  });

  it('if NOT given icon type, icon should NOT render', () => {
    const rendered = render(
      <Feature
        subHeader={'this is the subheader'}
        blurb={'this is the blurb'}
      />
    );
    expect(rendered.queryByTitle('headset icon')).toBeNull();
  });
});
