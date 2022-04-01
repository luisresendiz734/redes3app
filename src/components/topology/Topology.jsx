import { Box, Center, Container, Heading } from "@chakra-ui/react"
import DisplayTopology from "./DisplayTopology"
import pc from "../../assets/pc.png"
import router from "../../assets/router.png"

const nodes = [
  { id: 1, label: "Node 1", image: router, shape: "image" },
  { id: 2, label: "Node 2", image: router, shape: "image" },
  { id: 3, label: "Node 3", image: pc, shape: "image" },
  { id: 4, label: "Node 4", image: pc, shape: "image" },
  { id: 5, label: "Node 5", image: pc, shape: "image" },
]

const edges = [
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
]

const Topology = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Center>
          <Heading marginY={4}>Topologia</Heading>
        </Center>
        <Box w="full" h="80vh">
          <DisplayTopology nodes={nodes} edges={edges} />
        </Box>
      </Container>
    </Box>
  )
}

export default Topology
