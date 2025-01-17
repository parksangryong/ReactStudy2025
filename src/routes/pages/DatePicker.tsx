import { useState } from "react";

// DatePicker
import DatePickers from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import CustomInput from "@/components/CustomInput";

// DatePicker2
import DatePicker2 from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// antd
import { DatePicker as AntDatePicker, ConfigProvider } from "antd";
import locale from "antd/es/date-picker/locale/ko_KR";

// dayjs
import dayjs from "dayjs";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [openValue, setOpenValue] = useState<Value>(new Date());
  const [closeValue, setCloseValue] = useState<Value>(new Date());

  const [antOpenValue, setAntOpenValue] = useState<dayjs.Dayjs>(dayjs());
  const [antCloseValue, setAntCloseValue] = useState<dayjs.Dayjs>(dayjs());

  return (
    <div style={{}}>
      <div style={{ borderBottom: "1px solid black", padding: "20px 0" }}>
        <h3>1. React-datePicker</h3>
        <div
          style={{
            width: 500,
            display: "flex",
            gap: "10px",
            flexDirection: "row",
          }}
        >
          <label htmlFor="date-picker">시작일</label>
          <DatePickers
            selected={startDate}
            onChange={(date) => setStartDate(date ?? new Date())}
            locale={ko}
            dateFormat="yyyy.MM.dd"
            customInput={<CustomInput value={startDate.toLocaleDateString()} />}
          />
          <label htmlFor="date-picker">종료일</label>
          <DatePickers
            locale={ko}
            selected={endDate}
            onChange={(date) => setEndDate(date ?? new Date())}
            dateFormat="yyyy.MM.dd"
            customInput={<CustomInput value={endDate.toLocaleDateString()} />}
          />
        </div>
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "20px 0" }}>
        <h3>2. React-date-picker</h3>
        <div style={{ width: 500, display: "flex", gap: "10px" }}>
          <label htmlFor="date-picker">시작일</label>
          <DatePicker2
            value={openValue}
            onChange={(date: Value) => setOpenValue(date)}
            format="yyyy.MM.dd"
            locale="ko"
            className="date-picker"
          />
          <label htmlFor="date-picker">종료일</label>
          <DatePicker2
            value={closeValue}
            onChange={(date: Value) => setCloseValue(date)}
            format="yyyy.MM.dd"
            locale="ko"
            className="date-picker"
          />
        </div>
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "20px 0" }}>
        <h3>3. Ant-DatePicker</h3>
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  colorPrimary: "#ee0505",
                  cellHoverBg: "#ffeeee",
                  borderRadius: 8,
                },
                Calendar: {
                  colorPrimary: "#ee0505",
                  colorPrimaryHover: "#ee0505",
                  colorPrimaryActive: "#ee0505",
                  colorText: "#ee0505",
                  colorTextBase: "#ee0505",
                  colorTextLabel: "#ee0505",
                  colorTextDescription: "#ee0505",
                },
              },
            }}
          >
            <label htmlFor="date-picker" style={{ width: 150 }}>
              시작일
            </label>
            <AntDatePicker
              onChange={(date) => setAntOpenValue(date)}
              value={antOpenValue}
              format="YYYY.MM.DD"
              placeholder="날짜를 선택해주세요"
              locale={locale}
              style={{ width: "100%" }}
              suffixIcon={<div style={{ fontWeight: 900 }}>+</div>}
              clearIcon={<div style={{ fontWeight: 900 }}>x</div>}
              showToday={false}
            />
            <label htmlFor="date-picker" style={{ width: 150 }}>
              종료일
            </label>
            <AntDatePicker
              onChange={(date) => setAntCloseValue(date)}
              value={antCloseValue}
              format="YYYY.MM.DD"
              placeholder="날짜를 선택해주세요"
              locale={locale}
              suffixIcon={<div style={{ fontWeight: 900 }}>+</div>}
              clearIcon={<div style={{ fontWeight: 900 }}>x</div>}
              showToday={false}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
