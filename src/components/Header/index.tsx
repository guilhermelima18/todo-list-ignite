import { Box, Flex, Image } from "@chakra-ui/react";

import logoImg from "../../assets/logo.svg";
import { ButtonDefault } from "../Button";
import { Input } from "../Input";

export const Header = () => {
  return (
    <Flex
      bg="gray.700"
      w="100%"
      h="200px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mb="10"
    >
      <Box
        w="100%"
        maxW="768px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        mx="auto"
        position="relative"
      >
        <Flex w="100%" alignItems="center" justifyContent="center" mb="2">
          <Image
            src={logoImg}
            alt="Logo todo com um foguete apontado para cima"
          />
        </Flex>
        <Flex w="100%" position="absolute" bottom="-96px" gap="10px">
          <Input
            type="text"
            name="task"
            placeholder="Adicione uma nova tarefa"
          />
          <ButtonDefault buttonText="Criar" />
        </Flex>
      </Box>
    </Flex>
  );
};
