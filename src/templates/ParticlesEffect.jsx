import { useColorMode } from "@chakra-ui/react"
import Particles from "react-tsparticles"
import { loadTrianglesPreset } from "tsparticles-preset-triangles"

let tsp

const ParticlesEffect = () => {
  const { colorMode } = useColorMode()
  const viewColor = colorMode == "dark" ? "#fff" : "#000"
  const particlesInit = (main) => {
    loadTrianglesPreset(main)
    tsp = main
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = (container) => {}
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "triangles",
        particles: {
          color: viewColor,
          zIndex: {
            value: -1,
          },
          links: {
            triangles: {
              opacity: 0.01,
              color: viewColor,
            },
            opacity: colorMode == "dark" ? 0.3 : 0.1,
            color: viewColor,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
        },
        background: {
          opacity: 0,
        },
        fpsLimit: 60,
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesEffect
