import React, { useEffect, useRef, useState } from 'react';
import {
    Box, Flex, Image, Text, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Button,
} from '@chakra-ui/react';


import Helper, { RandomBoxShadow, RandomGradientColor, ShadowText } from '../Utility/Helper';
import { FaChrome, FaGithubSquare } from 'react-icons/fa'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'
import { IconComp } from '../Utility/Helper';
function Projects({ height }) {
    const [count, setcount] = useState(0)
    let id = useRef()
    const [hov, sethov] = useState(false)
    let myprojects = [
        {
            name: 'Spotify', text: "Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. Basic functions such as playing music are totally free, but you can also choose to upgrade to Spotify Premium.A collaborative project build by a team of 6 developers in 6 days and used open source API of spotify .",
            techStack: ["HTML", "CSS", "JAVASCRIPT"],
            responsbility: ["Home page UI & CSS with JavaScript", "Manage All API calls", "Work as leader"],
            image: 'https://dilasathapa.github.io/static/media/spotifyclonecom.914510491b847df6f968.gif', github: 'https://github.com/ritikraj07/Project_Spotify.com', deploy: 'https://640351fb29b7613bca3776b6--wondrous-stroopwafel-729c2a.netlify.app/html/'
        },
        {
            name: 'Shop.com', text: "Shop.com is an E-commerce shopping site.",
            techStack: ["HTML", "CSS", "JAVASCRIPT"],
            responsbility: ["Home page UI & CSS with JavaScript", "Manage All API calls", "Work as leader"],
            image: 'https://6479a15feee9a000c0583ee5--glittery-smakager-e5b23b.netlify.app/shop.gif'
        }
    ]


    useEffect(() => {
        if (!hov) {
            clearTimeout(id.current);

            id.current = setTimeout(() => {
                if (count == myprojects.length - 1) {
                    setcount(0)
                } else {
                    setcount((pre) => pre + 1)
                }
            }, 3000)
        }
    }, [count, hov])

    function HandleClick(dir) {
        let cot = count + dir;
        if (cot >= myprojects.length) {
            cot = 0;
        } else if (cot < 0) {
            cot = myprojects.length - 1;
        }
        
        setcount(cot)
    }

    return (
        <Box
            width='100%'
            height={height}
            paddingX={{ base: '15px', sm: "50px", md: '40px', lg: '30px', xl:'100px' }}
            paddingY={{ base: '20px', sm: '10px', md: '60px', lg: '40px' }}
            id="Projects"
        >

            <Box
                h='100%'
                w='100%'
                // bg={RandomGradientColor}
                boxShadow={RandomBoxShadow}
                borderRadius={{ base: '10px', }}
                paddingX={{ base: '1px', sm: "2px", md: '20px', lg: '10px' }}

            >

                <Text mb='1' textAlign='center' fontFamily={'Rancho'} fontSize={30} > Projects </Text>

                <Box w="100%" h={{base:'90%', sm:'90%', md:'80%'}} position={'relative'}
                    onMouseEnter={() => { sethov(true) }}
                    onMouseLeave={() => { sethov(false) }}
                    
                >
                    <Button
                        pos={'absolute'}
                        top="40%"
                        bg="white"
                        w={'3%'}
                        color={'black'}
                        h={'80px'}
                        borderRadius={'0px 10px 10px 0px'}
                        opacity={0.5}
                        _hover={{
                            opacity: 1
                        }}
                        onClick={() => HandleClick(-1)}
                        disabled={count===0}
                    >
                        <BiLeftArrow />
                    </Button>
                    <Button
                        pos={'absolute'}
                        top="40%"
                        bg="white"
                        right={0}
                        w={'3%'}
                        color={'black'}
                        h={'80px'}
                        borderRadius={'10px 0px 0px 10px'}
                        opacity={0.5}
                        _hover={{
                            opacity: 1
                        }}
                        disabled={count === myprojects.length-1}
                        onClick={() => HandleClick(1)}
                        
                    >
                        <BiRightArrow />
                    </Button>

                    {myprojects.map((pro, i) => {
                        return (<Box key={i}
                            w="100%"
                            h="100%"
                            display={i == count ? "flex" : "none"}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            // bg="black"
                            p={{base:1, sm:2, md:3, lg:4, xl:5}}
                            flexDir={{base:"column", sm:'column', md: 'row',lg:'row', xl:'row'}}
                            borderRadius={4}
                            
                        >
                            <Box w={{ base: "100%", sm: "80%", md: "80%", xl: "60%" }} h="100%"
                                borderRadius={10}
                            >
                                <Image
                                    w="100%" h="100%"
                                    borderRadius={10}
                                    src={pro.image} />
                            </Box>
                            <Box w={{ base: "80%", sm: "90%", md: "80%", xl: "60%" }} h="100%"
                                display={'flex'}
                                flexDir={'column'}
                                alignItems={'center'}
                                px="5"
                                overflowY={'scroll'}
                                sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
                                pb={30}
                                fontSize={15}
                            >
                                <Text
                                    fontWeight={700}
                                    fontSize={25}
                                    // fontFamily="Cinzel Decorative"
                                >{pro.name}</Text>
                                <Text
                                    // fontFamily={'Bad Script'}
                                    textAlign={'justify'}
                                >{pro.text}</Text>
                                <Box w="100%" >
                                    <Text textAlign={'start'} >Area of Responsibility</Text>
                                    <UnorderedList>
                                        {pro.responsbility.map((res, i) => {
                                            return <ListItem key={i} >

                                                {res}
                                            </ListItem>
                                        })}
                                    </UnorderedList>
                                    <Text textAlign={'start'} >TechStack Used</Text>
                                    <UnorderedList>
                                        {pro.techStack.map((tech, i) => {
                                            return <ListItem key={i}>

                                                {tech}
                                            </ListItem>
                                        })}
                                    </UnorderedList>
                                </Box>

                                <Flex mt='10'
                                    fontSize={30}
                                    justify="flex-end"

                                    w="80%"

                                    justifySelf={'flex-end'}
                                >
                                    <IconComp> <FaGithubSquare onClick={() => {
                                        window.open(`${pro.github}`, 'name', '_self')
                                    }} /> </IconComp>

                                    <IconComp>
                                        <FaChrome />
                                    </IconComp>
                                </Flex>
                            </Box>
                        </Box>)
                    })}
                </Box>


            </Box>











        </Box>
    );
}

export default Projects;
