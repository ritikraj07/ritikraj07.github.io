import { Box, Text } from '@chakra-ui/react';
import { RandomGradientColor } from '../Utility/Helper';
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'
export default function Footer() {
    return <Box w="100%" h="50px" >
        <Text h="100%" bg={RandomGradientColor} textAlign={"center"}>Made in India By
            <Text fontSize={40} fontWeight={800} fontFamily={'Cinzel Decorative'} > The Great Ritik Raj  </Text>
            All Copy Right is Reserved
        </Text>

    </Box>
  }