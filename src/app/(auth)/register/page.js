"use client";

import React from "react";
import NameSection from "../register/sections/NameSection";
import useRegistration from "@/stores/register";
import EmailSection from "./sections/EmailSection";

const Register = () => {
  const { registerStep } = useRegistration();

  // Escolher componente de acordo com número da step
  const renderStepComponent = () => {
    switch (registerStep) {
      case 1:
        return <NameSection />;
      case 2:
        return <EmailSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center pt-[100px]">
      {renderStepComponent()}
    </div>
  );
};

export default Register;
