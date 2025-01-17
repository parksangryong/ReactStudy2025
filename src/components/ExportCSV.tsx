interface ExportCSVProps {
  fileName: string;
  data: DataItem[];
}

type DataItem = {
  [key: string]: string | number;
};

const ExportCSV = ({ fileName, data }: ExportCSVProps) => {
  if (fileName.length === 0) {
    return <div>파일 이름을 입력해주세요.</div>;
  }

  const convertToCSV = (array: DataItem[]) => {
    // 헤더 (객체의 키값들)
    const header = Object.keys(array[0]).join(",");
    // 데이터 행
    const rows = array.map((item) => Object.values(item).join(","));

    return [header, ...rows].join("\n");
  };

  const downloadCSV = () => {
    // 데이터를 CSV 형식으로 변환
    const csv = convertToCSV(data);

    // BOM 추가 및 인코딩 처리
    const BOM = "\uFEFF";
    const csvWithBOM = BOM + csv;
    const blob = new Blob([csvWithBOM], { type: "text/csv;charset=utf-8;" });

    // 다운로드 링크 생성
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}.csv`);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      style={{ marginLeft: "10px", border: "1px solid #e0e0e0" }}
      onClick={downloadCSV}
    >
      CSV 다운로드
    </button>
  );
};

export default ExportCSV;
