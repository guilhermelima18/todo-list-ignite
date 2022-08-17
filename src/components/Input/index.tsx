import { forwardRef, ForwardRefRenderFunction } from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface InputDefaultProps extends InputProps {
  name: string;
  type: string;
  placeholder?: string;
}

const InputDefault: ForwardRefRenderFunction<
  HTMLInputElement,
  InputDefaultProps
> = ({ name, type, placeholder, ...rest }, ref) => {
  return (
    <ChakraInput
      bg="gray.900"
      color="white"
      h="50px"
      type={type}
      name={name}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputDefault);
