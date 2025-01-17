import React, { useState } from "react";
import { uploadFiles } from "../../utils/fileUpload";
const File = () => {
  // 다중 파일 상태 관리
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length > 0) {
      await uploadFiles(selectedFiles, "http://localhost:8080/api/upload");
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>파일 업로드 예시</h1>
      <label
        htmlFor="file-upload"
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        파일 선택하기
      </label>
      <button onClick={handleUpload}>업로드</button>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        multiple
        style={{ display: "none" }}
      />

      {/* 선택된 파일들의 정보 표시 */}
      {selectedFiles.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              borderBottom: "1px solid #333",
            }}
          >
            선택된 파일 수: {selectedFiles.length}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #eee",
                  minWidth: "224px",
                }}
              >
                <p>
                  파일 {index + 1}: {file.name}
                </p>
                <p>크기: {(file.size / 1024).toFixed(2)} KB</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default File;
