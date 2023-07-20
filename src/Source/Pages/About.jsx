import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'

import { RandomBoxShadow, RandomGradientColor, ShadowText } from '../Utility/Helper';

function About({ height }) {
    return (
        <Box
            width='100%'
            height={height}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            id='About'
            paddingX={{ base: '15px', sm: "50px", md: '40px', lg: '100px' }}
            paddingY={{ base: '20px', sm: '20px', md: '60px' }}
        >
            <Box
                h='100%'
                w='100%'
                // bg={RandomGradientColor}
                boxShadow={RandomBoxShadow}
                borderRadius={{ base: '10px', }}
                p='2'
                flexDir={{ base: 'column-reverse', sm: 'column-reverse', md: "row", lg: "row", xl: 'row', '2xl': 'row' }}

            >
                <Text mb='1' textAlign='center' fontFamily={'Rancho'} fontSize={30} > About  Ritik Raj</Text>

                <Box
                    sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
                    overflowY={'scroll'}
                    p={5}
                    paddingX={{ base: 2, sm:4, md: 10, lg: 15, xl: 15, '2xl': 20 }}
                    m={{ base: 2, sm: 10, md: 15, lg: 15, xl: 15, '2xl': 25 }}
                    // border={'8px solid white'}
                    // borderRadius={15}
                    display={'flex'} alignItems={'center'} justifyContent={'center'}
                    flexDir={'column'}
                    
                    h='80%'>
                    <Text
                        fontSize={15}
                        // fontWeight={600}
                        // fontFamily={'Bad Script'}
                        // textShadow={ShadowText}
                        whiteSpace={'pre-wrap'}
                        wordBreak={'break-word'}

                    >
                        Hello there ,
                        <br></br>
                        This is Ritik Raj .
                        <br></br>
                        Dedicated and detail-oriented Fullstack Developer. Eager to apply web and app development skills
                        to create amazing and highly scalable products with great user experiences. A firm believer in
                        discipline and self-motivation.
                        <br></br>

                        As a software developer with a passion for
                        creating efficient and user-friendly applications, I have gained 1 year of valuable experience in
                        the field. Throughout my journey, I have worked on diverse projects, ranging from web
                        development to mobile app development.
                        <br></br>
                        In terms of technical skills, I am proficient in programming languages such as Java, JavaScript,
                        Python, and have also knowledge of C and C++. Additionally, I possess knowledge of the
                        MERN stack, including MongoDB, Express, React, and Node.js. I am also familiar with libraries
                        such as React Native, React Native Elements, Chakra UI, jQuery, Material UI, and Bootstrap

                    </Text>
                    <Box w={'100%'} >
                    <Text fontFamily={'Bad Script'}
                        textShadow={ShadowText}
                            textAlign="right"
                            fontWeight={700}
                            fontSize={20}
                    >Ritik Raj
                        </Text>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}

export default About;