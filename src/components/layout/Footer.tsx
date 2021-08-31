import { Flex, Box, Text, FormLabel, Switch, Heading } from "@chakra-ui/react";
import { textState, switchState } from "state/atoms";
import { useRecoilState } from "recoil";

const Footer = () => {
  const [text] = useRecoilState(textState);
  const [switchValue, setSwitchValue] = useRecoilState(switchState);

  console.log(switchValue);
  return (
    <Flex as="footer" width="full" align="center">
      <Box>
        <Heading>{text}</Heading>
        <Switch
          value={switchValue}
          onChange={() => setSwitchValue(!switchValue)}
        />
      </Box>
    </Flex>
  );
};

export default Footer;
