import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Box, Text, Image,
    FormLabel, Input, Textarea, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, } from '@chakra-ui/react';
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'
import { RandomBoxShadow } from '../Utility/Helper';

function Contact({ height }) {
    const [status, setstatus] = useState(true)
    const form = useRef();
    
    function MessageStatus(status) {
        let alert = document.getElementById("alert")
        alert.style.display = "flex"
        setstatus(status)
        setTimeout(() => {
            alert.style.display = "none"
        }, 5000)
    }
       

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ya2705m', 'template_0d88srh', form.current, 'rM_0bek0kKIZMInnW')
            .then((result) => {
                console.log(result.text);
                document.getElementById("myForm").reset();
                MessageStatus(true)

            }, (error) => {
                console.log(error.text);
                MessageStatus(false)
            });
    };

    
    return (
        <Box
            width='100%'
            // height={height}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            id='Contact'
            paddingX={{ base: '15px', sm: "50px", md: '40px', lg: '100px' }}
            paddingY={{ base: '20px', sm: '20px', md: '80px' }}
            pos={'relative'}
        >
            

            <Alert pos={'absolute'} id="alert" display={'none'} w="50%" top={10} bg={status?"green":"red"} status={status?'success':'error'}>
                <AlertIcon />
                <AlertTitle>{status?"Goodnews: ":"Something went wrong: "}</AlertTitle>
                <AlertDescription>{status ? "Message is sent to Mr. Ritik Raj" : "Please use other platform to with me"}</AlertDescription>
            </Alert>

            <Box

                height={'100%'}
                justifyContent={'center'}
                width={'100%'}
                borderRadius={{ base: '10px', }}
                alignItems={'center'}
                bg={"#03020D"}
                boxShadow={RandomBoxShadow}
                display={'flex'}
                p={{ base: 2, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 10 }}
                flexDir={{ base: 'column-reverse', sm: 'column-reverse', md: "row", lg: "row", xl: 'row', '2xl': 'row' }}

            >
                
                

                

                <Box w="50%">
                    <Image m="auto" w="100%" src="https://dilasathapa.github.io/static/media/icon-animation.ce9b5736cd071feb5c99.gif" />
                </Box>
                <Box w={{ base: '95%', sm: '90%', md: "70%", lg: "65%", xl: '50%', '2xl': '50%' }} h="100%" >
                    <Text fontSize={25} fontWeight={600} textAlign={'center'} >Let's Connect Dude</Text>
                    <Box w="100%" border={"5px solid white"} borderStyle={"dotted"} h="80%" p={{ base: 2, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 10 }} >
                        
                        <form id="myForm" ref={form} onSubmit={sendEmail} >
                            <FormLabel fontSize={20}  >Enter Your Name</FormLabel>
                            <Input placeholder='Your Name' type="text" name="from_name" required />
                            <FormLabel fontSize={20} >Email </FormLabel>
                            <Input placeholder='Email' type="email" name="from_email" required />
                            <FormLabel fontSize={20} >Enter Your message</FormLabel>
                            <Textarea placeholder='Your message' name="message" required />
                        
                            <Input type="submit" value="Send" w='100%' mt="5" />
                        </form>

                    </Box>
                </Box>



            </Box>





        </Box>
    );
}


export default Contact;