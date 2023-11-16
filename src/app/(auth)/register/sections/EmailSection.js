import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import useRegistration from "@/stores/register";
import React from "react";

const EmailSection = () => {
  const { registerData, setRegisterData, setRegisterStep, registerStep } =
    useRegistration();

  return (
    <div className="p-7 border rounded">
      <div className="flex flex-col gap-6">
        <div>
          <Title className="text-2xl">
            Olá, <span className="text-primary">{registerData?.nome}</span>!
          </Title>
          <Text className="text-base">Agora forneça um e-mail.</Text>
        </div>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input
              className="min-w-[342px]"
              type="email"
              name="email"
              label="E-mail"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button onClick={() => setRegisterStep(registerStep + 1)}>
              Continuar
            </Button>
            <Button
              onClick={() => setRegisterStep(registerStep - 1)}
              variant="outline"
            >
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
