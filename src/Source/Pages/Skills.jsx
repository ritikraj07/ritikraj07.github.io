import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import Helper, { RandomBoxShadow, RandomGradientColor, ShadowText } from '../Utility/Helper';


function Skills({ height }) {
    const [Skill, setskills] = useState([
        { name: 'React_JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', doc:"https://react.dev/" },
        { name: 'React_Native', logo: 'https://media2.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif?cid=6c09b952a5ni6g5m5gi6nuddgxodzu2gd9zuna0vpnh1v7c2&ep=v1_stickers_related&rid=giphy.gif&ct=s', doc: "https://reactnative.dev/" },
        { name: 'JavaScript', logo: 'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif', doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: 'TypeScript', logo: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png', doc: "https://www.typescriptlang.org/" },
        { name: 'Chakra-Ui', logo: 'https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png', doc: "https://chakra-ui.com/docs/" },
        { name: 'JAVA', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', doc: "https://dev.java/" },
        { name: 'Python', logo: 'https://www.newus.in/static/media/Core-python-at-newus-Dharmsala.0fc3b7c72cdea81baba4.gif', doc: "https://docs.python.org/3/" },
        { name: 'C_Program', logo: 'https://cdn.dribbble.com/users/605032/screenshots/2624385/c.gif', doc:"https://www.w3schools.com/c/c_intro.php" },
        { name: 'C++', logo: 'https://camo.githubusercontent.com/bd46eb3c715499957f46588b8742a23f6b683f34107c5ff87daa0097ed0c948d/68747470733a2f2f6172742e706978696c6172742e636f6d2f3064393265613736633066353430612e676966', doc: "https://www.w3schools.com/cpp/default.asp" },
        { name: 'JQuery', logo: 'https://w7.pngwing.com/pngs/1004/13/png-transparent-jquery-hd-logo.png', doc: "https://api.jquery.com/" },
        
        { name: 'Redux', logo: 'https://redux-observable.js.org/logo/logo-small.gif', doc: "https://redux.js.org/" },
        { name: 'Postman', logo: 'https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png', doc: "https://www.postman.com/" }, 
        { name: 'HTML', logo: 'https://cdn.dribbble.com/users/783/screenshots/104300/shot_1295820312.gif', doc: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: 'CSS', logo: 'https://onepatch.com/wp-content/uploads/2022/03/CSS_CIRCLE.gif', doc: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, { name: 'PHP', logo: 'https://ftp.ntu.edu.tw/pub/php/images/ele-running.gif', doc: "https://www.php.net/docs.php" },
        { name: 'GIT', logo: 'https://assets.materialup.com/uploads/a8d3dcda-37d6-42bd-bb02-afecc006253d/preview.gif', doc: "https://git-scm.com/doc" }
    ])


    return (
        <Box
            width='100%'
            height={height}
            id='Skills'
            paddingX={{ base: '15px', sm: "50px", md: '40px', lg: '100px' }}
            paddingY={{ base: '20px', sm: '20px', md: '80px' }}
        >

            <Box
                h='100%'
                w='100%'
                bg={RandomGradientColor}
                boxShadow={RandomBoxShadow}

                borderRadius={{ base: '10px', }}
                paddingX={{ base: '5px', sm: "50px", md: '40px', lg: '100px' }}
            >

                <Text mb='1' textAlign='center' fontFamily={'Rancho'} fontSize={30} > Skills </Text>


                <Box
                    display={{ base: 'block', sm: 'flex' }}
                    flexWrap={{ base: 'none', sm: 'wrap' }}
                    flexDir={{ base: 'column', sm: 'row' }}
                    overflowY={'scroll'}
                    sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
                    border={'5px solid white'}
                    height={'85%'}
                    borderRadius={10}
                    justifyContent={'center'}
                    alignItems={'center'}

                >

                    {Skill.map((sk) => {
                        return <Box
                            key={sk.name}
                            display="flex"
                            flexDir={'column'}
                            justifyContent={'center'}
                            alignItems='center'
                            w={{ base: '65%', sm: '40%', md: '25%', lg: '20%' }}
                            h={{ base: '35%', sm: '40%', md: '45%', lg: '40%' }}
                            m={{ base: 'auto', sm: '3', md: '2' }}
                            mt="2"
                            borderRadius={10}
                            px='3'
                            py={5}
                            background={Helper}
                            cursor={'pointer'}
                            onClick={() => {
                                window.open(sk.doc, 'name', '_self')
                            }}
                        >
                            <Image w={{ base: '60px', sm: '70px' }} src={sk.logo} />
                            <Text textShadow={ShadowText} fontSize={18} >{sk.name}</Text>
                        </Box>
                    })}

                </Box>


            </Box>

        </Box>
    );
}


function Crousal({ data }) {



    return (
        <Box>

        </Box>
    )
}


export default Skills;