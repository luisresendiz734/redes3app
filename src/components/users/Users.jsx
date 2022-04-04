import { Box, Button, Center, Container, FormControl, FormLabel, Input, Select, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text } from "@chakra-ui/react"
import { child, get, set } from "firebase/database";
import { useState } from "react"
import { routersRef, userRef } from "../../services/firebase/database";

const Users = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [metodo, setMetodo] = useState("telnet");
  const [privilegio, setPrivilegio] = useState(1);

  const handleSubmit = async () => {
    const routersSnapshot = await get(child(routersRef, "/"))
    if(routersSnapshot.exists()) {
      const routersObj = routersSnapshot.val();
      const routerNames = Object.keys(routersObj);
      console.log(routerNames);
      console.log(routersObj);
      routerNames.forEach(routerName => {
        routersObj[routerName].username = usuario
        routersObj[routerName].password = password
        routersObj[routerName].metodo = metodo
        routersObj[routerName].privilegios = privilegio
      })

      await set(routersRef, routersObj);
    }
    const user = {
      usuario,
      password,
      metodo,
      privilegio
    }
    await set(userRef, user);
  }

  return (
    <Box>
      <Container maxW="container.xl">
        <Center>
        <Box boxShadow='md' p='6' rounded='md' bg='whiteAlpha.200' w="400px" mt="12">
          <FormControl mb="4">
            <FormLabel>Usuario:</FormLabel>
            <Input placeholder='Usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password:</FormLabel>
            <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Metodo:</FormLabel>
            <Select value={metodo} onChange={(e) => setMetodo(e.target.value)}>
              <option value='telnet'>Telnet</option>
              <option value='ssh'>SSH</option>
            </Select>
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Privilegio:</FormLabel>
            <Slider value={privilegio} onChange={(value) => setPrivilegio(value)} min={1} max={15} step={1}>
              <SliderMark
                value={privilegio}
                textAlign='center'
                bg='blue.500'
                color='white'
                mt='+30'
                w='12'
              >
                {privilegio}
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </FormControl>
          <FormControl>
            <Button onClick={handleSubmit} colorScheme="blue" w="full">Aceptar</Button>
          </FormControl>
        </Box>
        </Center>
      </Container>
    </Box>
  )
}

export default Users
