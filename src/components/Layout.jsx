import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import "../styles/layout.css";
export default function Layout({ children }) {
  const user = useSelector((state) => state.user?.userInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) {
      navigate("../");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div fluid className="app-container">
      <Header user={user} />
      <div className="app-content">{children}</div>
      <Footer />
    </div>
  );
}
