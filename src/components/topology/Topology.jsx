import { Box, Center, Container, Heading } from "@chakra-ui/react"
import DisplayTopology from "./DisplayTopology"
import pc from "../../assets/pc.png"
import router from "../../assets/router.png"
import { useEffect, useState } from "react"
import { onValue } from "firebase/database"
import { edgesRef, nodesRef } from "../../services/firebase/database"

const Topology = () => {
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])

  useEffect(() => {
    onValue(nodesRef, (snapshot) => {
      const data = snapshot.val()
      console.log("nodes snapshot", data)
      if (data?.length) {
        const newNodes = data.map((d) => {
          if (d.label.includes("R")) {
            return { ...d, image: router, shape: "image" }
          }

          return { ...d, image: pc, shape: "image" }
        })
        setNodes(newNodes)
      } else {
        setNodes([])
      }
    })
  }, [])

  useEffect(() => {
    onValue(edgesRef, (snapshot) => {
      const data = snapshot.val()
      console.log("edges snapshot:", data)
      if (data?.length) {
        setEdges(data)
      } else {
        setEdges([])
      }
    })
  }, [])

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
