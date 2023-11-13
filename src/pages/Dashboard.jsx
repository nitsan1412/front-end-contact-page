import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Button from "@mui/material/Button";

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* Content */}
      <main style={{ flexGrow: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSidebarToggle}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </Button>
      </main>

      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
}

export default Dashboard;
