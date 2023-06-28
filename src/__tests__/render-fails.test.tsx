import { render, screen, fireEvent } from '@testing-library/react-native';

import {
    NativeBaseProvider,
    Box,
    TextArea,
    Heading,
    Button,
    Text,
  } from "native-base";
  
  import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
  
  function App() {
    return (
      <NativeBaseProvider>
            <Box safeArea>
              <Heading>What was great last week?</Heading>
              <TextArea
                h={20}
                placeholder="Text Area Placeholder"
                w="75%"
                maxW="300"
                autoCompleteType={false}
              />
              <Button onPress={() => {}}>Create New Blog</Button>
            </Box>
      </NativeBaseProvider>
    );
  }
  

test('renders the landing page', () => {
    render(App());
});