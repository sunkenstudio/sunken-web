"use client";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ContactForm, ContactFormProps } from "..";
import {
  BrandFixture,
  ContactFixture,
  HeroFixture,
  SectionFixture,
} from "@/app/fixtures";
import * as Formik from "formik";

describe("ContactForm", () => {
  beforeAll(() => {
    const mockFieldChange = jest.fn();
    const mockSubmit = jest.fn();

    const useFormikContextMock = jest.spyOn(Formik, "useFormik");
    useFormikContextMock.mockReturnValue({
      initialValues: {},
      getFieldMeta: mockFieldChange,
      onSubmit: mockSubmit,
    } as unknown as any);
  });
  const renderComponent = (overrides: Partial<ContactFormProps> = {}) => {
    const defaults = (props: Partial<ContactFormProps>): ContactFormProps => ({
      hero: HeroFixture(),
      sections: [SectionFixture()],
      brand: BrandFixture(),
      contact: ContactFixture(),
      ...props,
    });
    return render(<ContactForm {...defaults(overrides)} />);
  };
  it("match snapshot", () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });
});
