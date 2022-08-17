import { Box, Button, Checkbox } from "@chakra-ui/react";
import { Trash } from "phosphor-react";

export const CardTask = () => {
  return (
    <Box
      bg="gray.700"
      w="100%"
      display="flex"
      justifyContent="space-between"
      p="5"
      borderRadius="md"
    >
      <Checkbox color="white">Teste</Checkbox>
      <Button
        bg="transparent"
        size="xs"
        _hover={{ background: "transparent" }}
        _focus={{ background: "transparent" }}
      >
        <Trash size={20} weight="light" color="white" />
      </Button>
    </Box>
  );
};
