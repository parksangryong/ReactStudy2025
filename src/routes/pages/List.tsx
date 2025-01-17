import { FixedSizeList as RwList } from "react-window";
import ReactList from "react-list";

import { useState } from "react";
const List = () => {
  const dummyData = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
    { id: 4, name: "John" },
    { id: 5, name: "Jane" },
    { id: 6, name: "Doe" },
    { id: 7, name: "John" },
    { id: 8, name: "Jane" },
    { id: 9, name: "Doe" },
  ];
  const [selected, setSelected] = useState<number | null>(null);

  const ListItem = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    return (
      <div
        style={style}
        onClick={() => setSelected(dummyData[index].id)}
        className={`list-item ${
          selected === dummyData[index].id ? "selected" : ""
        }`}
      >
        {dummyData[index].name}
      </div>
    );
  };

  const ListItem2 = () => {
    return <div className="list-item">test</div>;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
      }}
    >
      <h1>FlatList 예제</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <RwList
          height={300}
          itemCount={dummyData.length}
          itemSize={50}
          width={300}
          itemData={dummyData}
          style={{ gap: "10px" }}
        >
          {ListItem}
        </RwList>
        <ReactList
          length={dummyData.length}
          itemRenderer={ListItem2}
          type="uniform"
        />
      </div>
    </div>
  );
};

export default List;
