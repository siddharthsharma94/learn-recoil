import { Box, Input, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import { textState, charCountState, switchState } from "state/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

import { CodeBlock } from "@atlaskit/code";

const Home = () => {
  const [text, setText] = useRecoilState(textState);
  const [switchValue] = useRecoilState(switchState);
  const charsCount = useRecoilValue(charCountState);

  const { colorMode } = useColorMode();

  const exampleCodeBlock = `
  {
    switchState: ${switchValue},
    text: "${text}",
    charsCount: ${charsCount}
  }
  `;
  return (
    <Box mb={8} w="full">
      <FormLabel>Enter some global state</FormLabel>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <CodeBlock text={exampleCodeBlock} language="jsx" />
      <FormLabel>{charsCount} characters</FormLabel>
    </Box>
  );
};

export default Home;
