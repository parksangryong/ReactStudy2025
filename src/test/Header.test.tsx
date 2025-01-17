import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

import TheHeader from "@/components/TheHeader";

import File from "@/routes/pages/File";
import Home from "@/routes/pages/Home";
import DatePicker from "@/routes/pages/DatePicker";
import Csv from "@/routes/pages/Csv";
import List from "@/routes/pages/List";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <TheHeader />
      </MemoryRouter>
    );
  });

  test("five navigation links", () => {
    const navLinks = screen.getAllByRole("link");
    expect(navLinks).toHaveLength(5);
  });

  test("home link has correct href", () => {
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("datepicker link has correct href", () => {
    const datepickerLink = screen.getByRole("link", { name: "DatePicker" });
    expect(datepickerLink).toHaveAttribute("href", "/datepicker");
  });
});

describe("TheHeader", () => {
  beforeEach(() => {
    render(<TheHeader />);
  });

  test("모든 네비게이션 링크가 존재하는지 확인", () => {
    const links = [
      { text: "Home", href: "/" },
      { text: "DatePicker", href: "/datepicker" },
      { text: "FileUpload", href: "/file" },
      { text: "ExportCsv", href: "/csv" },
      { text: "FlatList", href: "/list" },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });

  test("네비게이션 링크가 올바른 클래스를 가지고 있는지 확인", () => {
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass("nav-link");
    });
  });
});

describe("헤더에서 링크 이동이 잘 되는가?", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TheHeader />
        <Home />
        <DatePicker />
        <File />
        <Csv />
        <List />
      </MemoryRouter>
    );
  });
  test("DatePicker 링크 클릭 시 올바른 페이지로 이동", async () => {
    fireEvent.click(screen.getByRole("link", { name: "DatePicker" }));
    const datePicker = screen.getByRole("heading", { name: "Picker Test" });
    expect(datePicker).toBeInTheDocument();
  });
  test("FileUpload 링크 클릭 시 올바른 페이지로 이동", async () => {
    fireEvent.click(screen.getByRole("link", { name: "FileUpload" }));
    const fileUpload = screen.getByRole("heading", {
      name: "파일 업로드 예시",
    });
    expect(fileUpload).toBeInTheDocument();
  });
  test("CSV 링크 클릭 시 올바른 페이지로 이동", async () => {
    fireEvent.click(screen.getByRole("link", { name: "ExportCsv" }));
    const csv = screen.getByRole("heading", { name: "CSV 내보내기 예제" });
    expect(csv).toBeInTheDocument();
  });
  test("FlatList 링크 클릭 시 올바른 페이지로 이동", async () => {
    fireEvent.click(screen.getByRole("link", { name: "FlatList" }));
    const list = screen.getByRole("heading", { name: "FlatList 예제" });
    expect(list).toBeInTheDocument();
  });
});
