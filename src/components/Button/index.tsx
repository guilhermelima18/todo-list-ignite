import { Button, ButtonProps } from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";

interface ButtonDefaultProps extends ButtonProps {
  buttonText: string;
}

export const ButtonDefault = ({ buttonText, ...rest }: ButtonDefaultProps) => {
  return (
    <Button
      colorScheme="blue"
      w="150px"
      h="50px"
      color="white"
      gap="5px"
      {...rest}
    >
      {buttonText}
      <PlusCircle size={20} weight="regular" color="white" />
    </Button>
  );
};
