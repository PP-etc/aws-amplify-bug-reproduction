import {
  NativeBaseProvider,
  Box,
  TextArea,
  Heading,
  Button,
  Text,
} from "native-base";

// import { Amplify, API, graphqlOperation } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

function App() {
  return (
    <NativeBaseProvider>
      <Authenticator.Provider>
        <Authenticator
          components={{
            SignUp: ({ fields, ...props }) => (
              <Authenticator.SignUp
                {...props}
                fields={[
                  {
                    name: "custom:displayName",
                    label: "Display Name",
                    type: "default",
                    placeholder: "Enter your display name",
                  },
                  ...fields,
                ]}
              />
            ),
          }}
        >
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
        </Authenticator>
      </Authenticator.Provider>
    </NativeBaseProvider>
  );
}
