"use client";

import Container from "@/components/layout/Container";
import Brand from "@/components/shared/Brand";
import Button from "@/components/ui/Button";
import React from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import { RootHeaderNavigation } from "@/constants/RootHeaderNavigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full h-[90px]">
      <Container className="flex items-center justify-between py-4">
        <div className="w-[220px]">
          <Brand />
        </div>

        <div>
          <HeaderNavigation menu={RootHeaderNavigation} />
        </div>

        <div>
          <Button onClick={() => router.push("/register")}>Começar</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
