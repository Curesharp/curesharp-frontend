import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import useRegistration from "@/stores/register";
import { PiArrowRightBold } from "react-icons/pi";

const NameSection = () => {
  const { registerData, setRegisterData, setRegisterStep, registerStep } =
    useRegistration();

  const handleInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-7 border rounded">
      <div className="flex flex-col gap-6">
        <div>
          <Title className="text-2xl">
            Vamos começar o seu cadastro<span className="text-primary">!</span>
          </Title>
          <Text className="text-base">Qual o seu nome?</Text>
        </div>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input
              onChange={(e) => handleInputChange(e)}
              value={registerData?.nome}
              type="text"
              name="nome"
              label="Nome"
            />
            <Input
              onChange={(e) => handleInputChange(e)}
              value={registerData?.sobrenome}
              type="text"
              name="sobrenome"
              label="Sobrenome"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              disabled={!registerData.nome || !registerData.sobrenome}
              onClick={(e) => {
                e.preventDefault();

                setRegisterStep(registerStep + 1);

                console.log(registerData);
              }}
            >
              Continuar
            </Button>
            <Button variant="outline">Já tenho uma conta</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameSection;
