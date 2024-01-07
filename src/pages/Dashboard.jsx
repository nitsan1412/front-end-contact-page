import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Button from "@mui/material/Button";
import PagesList from "./PagesList";
import NewPageDialog from "./newPage/NewPageDialog";
import strings from "../helper/hebrew-translation";

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(
    window.innerWidth > 850 ? true : false
  );
  const [shownData, setShownData] = useState("allPages");
  const [showNewPageForm, setShowNewPageForm] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openNewPageDialog = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        marginTop: "5px",
      }}
    >
      {/* Content */}
      <main style={{ flexGrow: 1, flexDirection: "column" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSidebarToggle}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowNewPageForm(true)}
        >
          {strings.forms.createNewPage}
        </Button>
        {/* <NewPageDialog /> */}
        {shownData === "allPages" ? <PagesList /> : ""}
        {/* {shownData === "newPage" ? <NewPageDialog /> : ""} */}
      </main>

      {/* Sidebar */}
      {isSidebarOpen ? (
        <Sidebar
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(!isSidebarOpen)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
