"use client";

import React, { useEffect } from "react";
import NameSection from "../register/sections/NameSection";
import useRegistration from "@/stores/register";
import EmailSection from "./sections/EmailSection";

const Register = () => {
  const { registerStep, setRegisterStep } = useRegistration();

  useEffect(() => {
    setRegisterStep(1);
  }, []);

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
