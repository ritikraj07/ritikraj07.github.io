import React, {useState } from 'react';
import { Box, Text, Link, useColorMode, useColorModeValue } from '@chakra-ui/react';
import '@fontsource/dancing-script';

import Helper, { RandomGradientColor } from '../Utility/Helper';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';


function Navbar() {
    const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
    const [active, setactive] = useState('Home');
    const [opa, setopa] = useState(0)
    const color = useColorModeValue('light', 'dark');
    console.log('====>', color)

    let bg = color === 'dark' ?'#1A202C':'white'

    var isScrolling;

    window.addEventListener('scroll', function () {
        clearTimeout(isScrolling);
        setopa(1)
        isScrolling = setTimeout(function () {
            setopa(0)
        }, 1000); // Adjust the timeout value as needed
    }, false);



    return (
        <Box display={{ xl: 'flex', '2xl': 'flex' }} justifyContent={'center'}>
            <Box
                height={'70px'}
                borderRadius={'0 0 10px 10px'}
                pos={'fixed'}
                // margin={10}
                // mt={5}
                paddingX={10}
                onMouseEnter={() =>setopa(1)}
                onMouseLeave={() =>setopa(0)}
                transition={'1s'}
                // bg="linear-gradient(163deg, rgba(211,60,195,0.978203781512605) 6%, rgba(113,33,188,1) 55%, rgba(0,255,252,1) 100%)"
                // bg={RandomGradientColor}
                bg={bg}
                width={'100%'}
                display={{ base: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
                alignItems={'center'}
                justifyContent={'space-between'}
                id='fullNavbar'
                zIndex={10}
                opacity={opa}

            >
                <Box ml="15">
                    <Text
                        fontFamily={'Dancing Script'}
                        fontSize={20}
                        transform={'rotate(-7deg)'}
                    >
                        Ritik Raj
                    </Text>
                </Box>
                <Box
                    width={'50%'}
                    display={'flex'}
                    justifyContent={'space-around'}
                    alignItems={'center'}
                >
                    {pages.map(page => {
                        return (
                            <Link key={page} href={`#${page}`} fontSize={20} fontFamily={'Lobster'}>
                                {page}
                            </Link>
                        );
                    })}
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Box>

            <Box
                pos='fixed'
                zIndex={1100}
                // border={'1px solid red'}
                display={{ base: 'block', lg: 'none', xl: 'none', '2xl': 'none', md: 'block', sm: 'block' }}
                width={{ md: '80px', sm: '70px', base: '60px' }}
                mt={{ md: '10%', sm: '25%', base: '20%' }}

            >
                <Box
                    width={'150%'}
                    bg={Helper}
                    borderRadius={5}
                    padding={2}
                    m={'4px 0'}
                    ml={active === 'Home' ? 0 : '-50px'}
                    transition={'1s'}
                    onClick={() => {
                        setactive('Home');
                        window.location.href = "#Home"
                    }}

                >
                    <Link href='#Home' color={active === 'Home' ? 'white' : 'transparent'} > Home</Link>
                </Box>

                <Box
                    width={'150%'}
                    bg={Helper}
                    borderRadius={5}
                    padding={2}
                    m={'4px 0'}
                    transition={'1s'}
                    ml={active === 'About' ? 0 : '-50px'}
                    onClick={() => {
                        setactive('About');
                        window.location.href = "#About"
                    }}
                >
                    <Link href='#About'
                        color={active === 'About' ? 'white' : 'transparent'}
                    >About </Link>
                </Box>
                <Box
                    width={'150%'}
                    bg={Helper}
                    borderRadius={5}
                    padding={2}
                    transition={'1s'}
                    m={'4px 0'}
                    ml={active === 'Skills' ? 0 : '-50px'}
                    onClick={() => {
                        setactive('Skills');
                        window.location.href = "#Skills"
                    }}
                >
                    <Link href='#Skills' color={active === 'Skills' ? 'white' : 'transparent'}  > Skills</Link>
                </Box>
                <Box
                    width={'150%'}
                    bg={Helper}
                    borderRadius={5}
                    padding={2}
                    transition={'1s'}
                    m={'4px 0'}
                    ml={active === 'Projects' ? 0 : '-50px'}
                    onClick={() => {
                        setactive('Projects');
                        window.location.href = "#Projects"
                    }}
                >
                    <Link href='#Projects' color={active === 'Projects' ? 'white' : 'transparent'}  >Projects </Link>
                </Box>
                {/* <Box
                    width={'150%'}
                    bg={Helper}
                    borderRadius={5}
                    padding={2}
                    m={'4px 0'}
                    transition={'1s'}
                    ml={active === 'Servies' ? 0 : '-50px'}
                    onClick={() => {
                        setactive('Servies');
                        window.location.href = "#Servies"
                    }}
                >
                    <Link href='#Servies' color={active === 'Servies' ? 'white' : 'transparent'}  >Servies </Link>
                </Box> */}
                <Box
                    width={'150%'}
                    bg={Helper}
                    borderRadius={5}
                    padding={2}
                    transition={'1s'}
                    m={'4px 0'}
                    ml={active === 'Contact' ? 0 : '-50px'}
                    onClick={() => {
                        setactive('Contact');
                        window.location.href = "#Contact"
                    }}
                >
                    <Link href='#Contact' color={active === 'Contact' ? 'white' : 'transparent'} >Contact </Link>
                </Box>
                
                <ColorModeSwitcher  />

            </Box>



        </Box>
    );
}
export default Navbar;
