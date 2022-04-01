import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"
import { set } from "firebase/database"
import { edgesRef, nodesRef } from "../../services/firebase/database"
import luis from "../../assets/luis.png"

const nodes = [
  { id: 1, label: "Router 1" },
  { id: 2, label: "Router 2" },
  { id: 3, label: "Pc 1" },
  { id: 4, label: "Pc 2" },
  { id: 5, label: "Pc 3" },
]

const edges = [
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
]

const partners = [
  { fullname: "Luis Fernando Resendiz Chavez", block: "B", img: luis },
  { fullname: "Alondra Gasca Leon", block: "A", img: luis },
  { fullname: "Isai Buzani", block: "A", img: luis },
  { fullname: "Alfredo Pereda Reyes", block: "B", img: luis },
]

const Home = () => {
  const resetNodes = async () => {
    await set(nodesRef, nodes)
  }

  const resetEdges = async () => {
    await set(edgesRef, edges)
  }
  return (
    <Box>
      <Container maxW="container.xl">
        <Center>
          <Heading marginY={16}>Equipo</Heading>
        </Center>

        <Box display="flex" justifyContent="space-between">
          {partners.map((partner) => (
            <Box
              key={partner.fullname}
              boxShadow="md"
              p={4}
              w={"22%"}
              backgroundColor="whiteAlpha.200"
              borderRadius="md">
              <VStack>
                <Avatar size="2xl" src={partner.img} />
                <Text fontWeight="bold">{partner.fullname}</Text>
                <Text>Bloque {partner.block}</Text>
                <Text>3CM16</Text>
              </VStack>
            </Box>
          ))}
        </Box>
        <button onClick={resetNodes}>nodes</button>
        <button onClick={resetEdges}>edges</button>
      </Container>
    </Box>
  )
}

export default Home
