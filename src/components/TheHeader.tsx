export default function TheHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e0e0e0",
        width: "100%",
        minWidth: "700px",
        maxWidth: "1000px",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "10px",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 0",
          flexWrap: "wrap",
        }}
      >
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/datepicker">
          DatePicker
        </a>
        <a className="nav-link" href="/file">
          FileUpload
        </a>
        <a className="nav-link" href="/csv">
          ExportCsv
        </a>
        <a className="nav-link" href="/list">
          FlatList
        </a>
      </nav>
    </header>
  );
}
