import ExportCSV from "../../components/ExportCSV";
import { useState } from "react";
const Csv = () => {
  const [fileName, setFileName] = useState("");
  const sampleData = [
    {
      no: 1,
      SO명: "강남",
      담당자: "김철수",
      연락처: "010-1234-5678",
      이메일: "test@test.com",
      발송시간: "2025-01-01 10:00:00",
      카카오톡수신상태: "수신",
      이메일수신상태: "수신",
    },
    {
      no: 2,
      SO명: "강남",
      담당자: "김철수",
      연락처: "010-1234-5678",
      이메일: "test@test.com",
      발송시간: "2025-01-01 10:00:00",
      카카오톡수신상태: "수신",
      이메일수신상태: "수신",
    },
    {
      no: 3,
      SO명: "강남",
      담당자: "김철수",
      연락처: "010-1234-5678",
      이메일: "test@test.com",
      발송시간: "2025-01-01 10:00:00",
      카카오톡수신상태: "수신",
      이메일수신상태: "수신",
    },
  ];

  return (
    <div>
      <h1>CSV 내보내기 예제</h1>
      <label htmlFor="fileName">파일 이름</label>
      <input
        id="fileName"
        type="text"
        value={fileName}
        style={{ padding: "0 10px", marginLeft: "10px" }}
        onChange={(e) => setFileName(e.target.value)}
      />
      <hr />
      <ExportCSV data={sampleData} fileName={fileName} />
    </div>
  );
};

export default Csv;
