import { Box, Flex, Text } from "@chakra-ui/react";
import { CardTask } from "./components/CardTask";
import { Header } from "./components/Header";

export default function App() {
  return (
    <Box bg="gray.900" w="100%" minH="100vh">
      <Header />
      <Flex w="100%" maxW="768px" flexDir="column" mx="auto">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="10"
        >
          <Flex gap="10px">
            <Text color="blue.500">Tarefas criadas</Text>
            <Text color="blue.500">5</Text>
          </Flex>

          <Flex gap="10px">
            <Text color="blue.500">Concluídas</Text>
            <Text color="blue.500">2 de 5</Text>
          </Flex>
        </Box>

        <Flex
          w="100%"
          maxH="600px"
          flexDir="column"
          gap="10px"
          mt="5"
          overflowY="auto"
        >
          <CardTask />
        </Flex>
      </Flex>
    </Box>
  );
}
