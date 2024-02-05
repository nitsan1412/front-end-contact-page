import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Button, Grid, Stack, Box } from "@mui/material";
import PagesList from "./PagesList";
import NewPageForm from "./newPage/NewPageForm";
import strings from "../helper/hebrew-translation";
import "./Dashboard.css";
function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(
    window.innerWidth > 850 ? true : false
  );
  const [shownData, setShownData] = useState("allPages"); //"allPages", "currentPage", "newPageForm"
  const [showNewPageForm, setShowNewPageForm] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        marginTop: "5px",
      }}
    >
      {/* Content */}
      <main style={{ flexGrow: 1, flexDirection: "column", margin: "1rem" }}>
        <Box sx={{ flexGrow: 1, height: "100%" }}>
          <Grid container spacing={4} className="btns-row">
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
              onClick={() => setShownData("newPageForm")}
            >
              {strings.forms.createNewPage}
            </Button>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => setShownData("newPageForm")}
            >
              {strings.forms.createNewPage}
            </Button> */}
          </Grid>
          <Grid container spacing={4} className="main-page-row">
            {/* <NewPageDialog /> */}
            {shownData === "allPages" ? <PagesList /> : ""}
            {shownData === "newPageForm" ? <NewPageForm /> : ""}
          </Grid>
        </Box>
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
