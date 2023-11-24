import React from "react";
import Header from "./components/Header";
import PrivateRoute from "@/utils/auth/PrivateRoute";
import Footer from "../(root)/components/Footer";

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Template;
