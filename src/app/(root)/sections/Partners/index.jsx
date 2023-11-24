import Container from "@/components/layout/Container";
import Title from "@/components/ui/Title";
import React from "react";
import PartnersWrapper from "./PartnersWrapper";

const Partners = () => {
  return (
    <section className="mb-20">
      <Container>
        <div className="text-center">
          <Title className="text-2xl font-bold">
            <span className="underline  decoration-primary">
              Nossos Parceiros
            </span>
          </Title>
        </div>
        <PartnersWrapper />
      </Container>
    </section>
  );
};

export default Partners;
