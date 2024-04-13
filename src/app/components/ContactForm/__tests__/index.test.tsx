import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactForm } from "..";

describe("ContactForm", () => {
  it("renders a heading", () => {
    render(<ContactForm />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
