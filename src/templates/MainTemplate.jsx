import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react"
import { useAuth } from "../context/AuthContext"
import { Link as RouteLink } from "react-router-dom"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import ParticlesEffect from "./ParticlesEffect"

function MainTemplate({ children }) {
  const auth = useAuth()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Box boxShadow="md" backgroundColor="whiteAlpha.200" backdropBlur="10px">
        <Container maxW="container.xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingY={4}>
            <Link as={RouteLink} to="/">
              <Text fontWeight="bold" fontSize="md">
                redes3app
              </Text>
            </Link>
            <Box>
              <HStack>
                <Link as={RouteLink} to="/">
                  Home
                </Link>
                <Link as={RouteLink} to="/topology">
                  Topologia
                </Link>
                <Link as={RouteLink} to="/users">
                  Usuarios
                </Link>
                <Link as={RouteLink} to="/logs">
                  Logs
                </Link>
                <Link as={RouteLink} to="/graphs">
                  Graficas
                </Link>
                <Link as={RouteLink} to="/packages">
                  Paquetes
                </Link>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <IconButton
                  onClick={toggleColorMode}
                  size="sm"
                  icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
                />
                {auth.user ? (
                  <>
                    <Text onClick={auth.logout}>{auth.user.displayName}</Text>
                    <Avatar
                      onClick={auth.logout}
                      size="sm"
                      src={auth.user.photoURL}>
                      <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                  </>
                ) : (
                  <Button size="sm" onClick={auth.login}>
                    Iniciar sesion
                  </Button>
                )}
              </HStack>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        {/* <ParticlesEffect /> */}
        {children}
      </Box>
    </Box>
  )
}

export default MainTemplate
