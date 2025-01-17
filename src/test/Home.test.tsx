import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import Home from "@/routes/pages/Home";

describe("Calculator EX", () => {
  test("1 is 1", () => {
    expect(1).toBe(1);
  });

  test("2 * 5 = 10", () => {
    expect(2 * 5).toBe(10);
  });
});

describe("Home 페이지 테스트", () => {
  test("Home is in the document Home", () => {
    render(<Home />);
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
  });

  test("Home is not in the document Home2", () => {
    render(<Home />);
    const home = screen.queryByText("Home2");
    expect(home).not.toBeInTheDocument();
  });
});
