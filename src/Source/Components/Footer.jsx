import { Box, Text } from '@chakra-ui/react';
import { RandomGradientColor, ShadowText } from '../Utility/Helper';
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'

export default function Footer() {
    return <Box w="100%" display={'flex'} alignItems={'center'} justifyContent={'center'} textShadow={ShadowText} h="20px">
        <Text h="100%" textAlign={"center"}>
            Made by Ritik Raj
        </Text>

    </Box>
  }