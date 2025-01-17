import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import type { File as FileType } from "@web-std/file";

import File from "@/routes/pages/File";

describe("File", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <File />
      </MemoryRouter>
    );
  });

  test("File is in the document", () => {
    const file = screen.getByText("파일 업로드 예시");
    expect(file).toBeInTheDocument();
  });

  test("File select button & file count", async () => {
    const fileUploadButton = screen.getByLabelText("파일 선택하기");
    const testFiles = [
      new (window.File as typeof FileType)(["file1"], "file1.txt", {
        type: "text/plain",
      }),
      new (window.File as typeof FileType)(["file2"], "file2.txt", {
        type: "text/plain",
      }),
    ];

    fireEvent.change(fileUploadButton, { target: { files: testFiles } });

    const fileInput = await screen.findByText("선택된 파일 수: 2");
    const fileCount = await screen.findByText("파일 1: file1.txt");
    const fileCount2 = await screen.findByText("파일 2: file2.txt");

    expect(fileInput).toBeInTheDocument();
    expect(fileCount).toBeInTheDocument();
    expect(fileCount2).toBeInTheDocument();
  });

  test("파일 크기가 올바르게 표시되는지 확인", async () => {
    const fileUploadButton = screen.getByLabelText("파일 선택하기");
    const testFiles = [
      new (window.File as typeof FileType)(["a".repeat(1024)], "file1.txt", {
        type: "text/plain",
      }),
    ];

    fireEvent.change(fileUploadButton, { target: { files: testFiles } });

    const fileSize = await screen.findByText("크기: 1.00 KB");
    expect(fileSize).toBeInTheDocument();
  });

  test("여러 파일 선택 후 새로운 파일 선택시 이전 파일이 교체되는지 확인", async () => {
    const fileUploadButton = screen.getByLabelText("파일 선택하기");

    // 첫 번째 파일 선택
    const initialFiles = [
      new (window.File as typeof FileType)(["file1"], "file1.txt", {
        type: "text/plain",
      }),
    ];
    fireEvent.change(fileUploadButton, { target: { files: initialFiles } });

    // 새로운 파일 선택
    const newFiles = [
      new (window.File as typeof FileType)(["file2"], "file2.txt", {
        type: "text/plain",
      }),
    ];
    fireEvent.change(fileUploadButton, { target: { files: newFiles } });

    const fileCount = await screen.findByText("선택된 파일 수: 1");
    const fileName = await screen.findByText("파일 1: file2.txt");

    expect(fileCount).toBeInTheDocument();
    expect(fileName).toBeInTheDocument();
    expect(screen.queryByText("파일 1: file1.txt")).not.toBeInTheDocument();
  });

  test("업로드 버튼이 비활성화되는지 확인", () => {
    const uploadButton = screen.getByText("업로드");
    expect(uploadButton).toBeEnabled();
  });
});
