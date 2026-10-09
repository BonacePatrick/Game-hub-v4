import { HStack, Text } from "@chakra-ui/react";
import DarkModeSwitcher from "../ui/dark-mode-switcher";


export default function Navbar() {
  return (
      <HStack justifyContent={"space-between"} padding={"2rem"}>
          <Text>Game hub</Text>
          <DarkModeSwitcher/>
      </HStack>
  )
}
