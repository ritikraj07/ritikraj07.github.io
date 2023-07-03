import React from 'react';
import { Box, Text, Flex, Image, Button, Link } from '@chakra-ui/react';
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'

import { AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa'
import {IconComp, RandomBoxShadow, RandomGradientColor, ShadowText } from '../Utility/Helper';
function Home({ height }) {
    function redirectToGmail() {
        var email = "ritikra3rrr@gmail.com";
        var subject = "Mail from Portfolio";
        var message = "Please write you message here";

        var url = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(email) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
        window.location.href = url;
    }
    function redirectToCall() {
        var phoneNumber = "9693452199";
        var url = "tel:" + phoneNumber;
        window.location.href = url;
    }
    function redirectToWhatsApp() {
        var phoneNumber = "9693452199";
        var message = "Hello from Button Click!";
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.location.href = url;
    }
    return (
        <Box
            width='100%'
            height={height}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            id='Home'
            paddingX={{ base: '15px', sm: "50px", md:'40px', lg:'100px' }}
            paddingY={{base: '20px', sm: '20px', md:'80px'}}
        >
            <Box
                
                height={'100%'}
                justifyContent={'space-around'}
                width={'100%'}
                borderRadius={{base: '10px', }}
                alignItems={'center'}
                bg={RandomGradientColor}
                boxShadow={RandomBoxShadow}
                display={'flex'}
                flexDir={{ base: 'column-reverse', sm: 'column-reverse', md:"row", lg: "row", xl: 'row', '2xl':'row' }}
                
            >


                <Box m={{ base: 5, sm: 8, md: 10, lg: 15, xl: 20, '2xl': 25 }}
                
                >
                    
                    <Text
                        fontWeight={800}
                        fontFamily={'Bad Script'}
                        fontSize={12}
                        textShadow={ShadowText}
                    >
                        Hello There!
                    </Text>
                    <Text fontSize={40} fontWeight={800} fontFamily={'Cinzel Decorative'} >Ritik Raj <sub style={{fontSize:'20'}} >Here!</sub> </Text>
                    <Text fontSize={20} fontFamily={'Rancho'} >A Full Stack Web and App Developer </Text>
                    <Flex mt='10'
                        w='80%' fontSize={30} justify={'center'} alignItems={'flex-end'}
                    >
                        <IconComp> <AiFillLinkedin onClick={() => {
                            window.open('https://linkedin.com/in/ritik-raj-191323243/', 'name', '_parent')
                        }} /> </IconComp>
                        <IconComp> <FaGithubSquare onClick={() => {
                            window.open('https://github.com/ritikraj07', 'name', '_self')
                        }} /> </IconComp>

                        
                        <IconComp><AiOutlineMail onClick={redirectToGmail} /></IconComp>
                        <IconComp><AiOutlinePhone onClick={redirectToCall} /></IconComp>
                        <IconComp> <FaWhatsappSquare onClick={redirectToWhatsApp} /> </IconComp>
                        
                        
                    </Flex>
                    <Flex mt="10" w='80%' fontSize={30} justify={'space-around'} alignItems={'flex-end'}>
                        <Button onClick={() => {
                            window.open('https://drive.google.com/file/d/1Piz6_5AZqQMaSUfc8TJI-dnD8P3jYtRl/view?usp=sharing', 'name', '_self')
                        }} >Download CV</Button>
                        <Button onClick={() => window.location.href = "#Contact"} >Hire Me </Button>
                    </Flex>
                </Box>

                <Box
                    width={{ base: '90%', sm: "80%", md: "50%", xl: '40%' }} height={{ base: '50%', md: '75%', xl: '80%' }} >
                    <Image border={'5px solid white'}
                        borderRadius={10}
                        w={{ base: '80%', }}
                        h={{ base: "90%" }}
                        m={{base:'10px auto'}}
                        src="https://6479a5d363dc2604c72e7bb0--capable-macaron-d8101b.netlify.app/ritik.jpg" />
                </Box>



            </Box>





        </Box>
    );
}


export default Home;