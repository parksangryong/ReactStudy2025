import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

import DatePicker from "@/routes/pages/DatePicker";

describe("DatePicker", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DatePicker />
      </MemoryRouter>
    );
  });

  test("DatePicker is in the document", () => {
    const datepicker = screen.getByText("Picker Test");
    expect(datepicker).toBeInTheDocument();
  });

  test("Picker count 3", () => {
    const datePicker1 = screen.getByText("1. React-datePicker");
    const datePicker2 = screen.getByText("2. React-date-picker");
    const datePicker3 = screen.getByText("3. Ant-DatePicker");
    expect(datePicker1).toBeInTheDocument();
    expect(datePicker2).toBeInTheDocument();
    expect(datePicker3).toBeInTheDocument();
  });

  test("date Picker 1 is change", () => {
    const startDateInput = screen.getAllByRole("textbox")[0];
    const endDateInput = screen.getAllByRole("textbox")[1];

    fireEvent.change(startDateInput, { target: { value: "2025.01.01" } });
    fireEvent.change(endDateInput, { target: { value: "2025.01.02" } });

    expect(startDateInput).toHaveValue("2025.01.01");
    expect(endDateInput).toHaveValue("2025.01.02");
  });

  //   test("date Picker 2 is change", () => {
  //     const startDateInput = screen.getByTestId("DatePicker2Open");
  //     const endDateInput = screen.getByTestId("DatePicker2Close");

  //     fireEvent.click(startDateInput);
  //     fireEvent.click(endDateInput);

  //     expect(startDateInput).toHaveValue("2025.01.01");
  //     expect(endDateInput).toHaveValue("2025.01.02");
  //   });

  test("date Picker 3 is change", () => {
    const startDateInput =
      screen.getAllByPlaceholderText("날짜를 선택해주세요")[0];
    const endDateInput =
      screen.getAllByPlaceholderText("날짜를 선택해주세요")[1];

    fireEvent.change(startDateInput, { target: { value: "2025.01.01" } });
    fireEvent.change(endDateInput, { target: { value: "2025.01.02" } });

    expect(startDateInput).toHaveValue("2025.01.01");
    expect(endDateInput).toHaveValue("2025.01.02");
  });
});
