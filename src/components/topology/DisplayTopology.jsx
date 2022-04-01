import { useColorMode } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import { Network } from "vis-network"

const DisplayTopology = ({ nodes, edges }) => {
  const { colorMode } = useColorMode()
  const domNode = useRef(null)
  useEffect(() => {
    const options = {
      autoResize: true,
      height: "100%",
      width: "100%",
      nodes: {
        font: {
          size: 12,
          color: colorMode === "light" ? "#171923" : "#EDF2F7",
        },
      },
    }
    const network =
      domNode.current && new Network(domNode.current, { nodes, edges }, options)
  }, [domNode, nodes, edges, colorMode])

  return (
    <div
      ref={domNode}
      style={{ width: "100%", height: "100%", color: "white" }}
    />
  )
}

export default DisplayTopology
