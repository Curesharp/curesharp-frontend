"use client";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";
import { PiArrowRightBold } from "react-icons/pi";
import Card from "./Card";
import Partners from "@/app/(root)/sections/Partners";

const Hero = () => {
  return (
    <section>
      <Container className="md:flex md:justify-between items-center">
        <div className="flex flex-col gap-4 max-w-[700px] md:w-1/2 pt-[60px]">
          <Title className="text-3xl font-semibold">
            O Impacto Transformador da{" "}
            <span className="underline decoration-primary">
              Inteligência Artificial
            </span>{" "}
            na Área da Saúde
            <span className="text-primary">.</span>
          </Title>
          <Text className="text-xl">
            A revolução tecnológica proporcionada pela inteligência artificial
            (IA) está redefinindo fundamentalmente a maneira como os
            profissionais de saúde abordam diagnósticos, tratamentos e cuidados
            com os pacientes.
          </Text>

          <div className="mt-10 max-w-[350px]">
            <Button
              onClick={() => router.push("/register")}
              icon={PiArrowRightBold}
            >
              Criar conta
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[10%_10%_10%_10%_/10%] w-full md:w-1/2 h-[300px] md:h-[500px] mt-10 md:mt-0">
          <Image
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            fill={true}
          />
          <div className="absolute -z-10 left-2 top-2 rounded-[69%_31%_70%_30%_/_30%_54%_46%_70%] w-full h-full bg-primary" />
        </div>
      </Container>

      <Card />
      <Partners />
    </section>
  );
};

export default Hero;
