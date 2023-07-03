import React from 'react';
import { Box, Text} from '@chakra-ui/react';
import '@fontsource/bad-script';
import '@fontsource/cinzel-decorative'
import '@fontsource/rancho'

import { RandomBoxShadow, RandomGradientColor } from '../Utility/Helper';
function Servies({ height }) {

    return (
        <Box
            width='100%'
            height={height}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            id='Servies'
            paddingX={{ base: '15px', sm: "50px", md: '40px', lg: '100px' }}
            paddingY={{ base: '20px', sm: '20px', md: '80px' }}
        >
            <Box

                height={'100%'}
                
                width={'100%'}
                borderRadius={{ base: '10px', }}
                alignItems={'center'}
                bg={RandomGradientColor}
                boxShadow={RandomBoxShadow}
                display={'flex'}
                flexDir={{ base: 'column-reverse', sm: 'column-reverse', md: "row", lg: "row", xl: 'row', '2xl': 'row' }}
                justifyContent="space-around"
                overflowY={'scroll'}
                overflowX={'scroll'}
                sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
            >


                <Box w={{base:"90%", sm:"80%", md:"45%"}} my={10} h="95%" border="4px solid white" borderRadius={10} background={'black'}
                    overflow={'scroll'}
                    p={5}
                    
                    sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
                >
                    <Text textAlign={'center'} fontSize={25}>App Development</Text>
                    <Text textAlign={'justify'} >Expertise in React Native: I have a strong command over React Native framework, allowing me to efficiently build cross-platform mobile applications. I am well-versed in the best practices, libraries, and tools associated with React Native development.

                        Proficient in JavaScript: React Native relies heavily on JavaScript, and I possess a deep understanding of the language. I am experienced in using JavaScript to build robust and scalable applications, ensuring high-quality code.

                        Mobile App Development Experience: I have hands-on experience in developing mobile applications using React Native. I am familiar with the challenges and nuances specific to mobile app development and can navigate them effectively to deliver successful projects.

                        Problem-Solving Skills: I possess strong problem-solving abilities, which are crucial for identifying and resolving issues in complex React Native projects. I am adept at debugging, optimizing performance, and implementing efficient solutions.

                        Collaboration and Communication: As a developer, I understand the importance of effective collaboration and communication within a team. I am a good team player, capable of working closely with designers, product managers, and other developers to deliver high-quality results.

                        Continuous Learning: The tech industry is constantly evolving, and I am committed to keeping up with the latest trends and updates in React Native development. I am eager to learn and adapt to new technologies, ensuring that I can bring innovative solutions to the table.</Text>
                </Box>
                <Box w={{ base: "90%", sm: "80%", md: "45%" }} my={10} h="95%" border="4px solid white" borderRadius={10} background={'black'}
                    overflow={'scroll'}
                    p={5}
                    sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
                >
                    <Text textAlign={'center'} fontSize={25}>Web Development</Text>
                    <Text textAlign={'justify'} >Strong technical skills: With expertise in a wide range of programming languages and technologies, I bring a diverse skill set to the table. This means that I can handle various aspects of web development, from frontend design and development using HTML, CSS, and Chakra-UI, to building dynamic and interactive user interfaces using React and React Native.

                        Experience and track record: Throughout my career, I have successfully completed projects that demonstrate my ability to deliver high-quality web solutions. I can provide a portfolio showcasing my previous work, which can serve as concrete evidence of my skills and dedication to producing exceptional results.

                        Problem-solving ability: Web development often involves overcoming challenges and finding innovative solutions. With my solid foundation in programming principles, I can analyze complex problems and devise effective solutions. I am accustomed to troubleshooting and debugging code to ensure optimal functionality and user experience.

                        Collaboration and teamwork: As a web developer, I understand the importance of effective communication and collaboration within a team. I am a reliable team player who can work well with designers, project managers, and other developers to ensure seamless integration and timely completion of projects.

                        Adaptability and continuous learning: The field of web development is constantly evolving, with new technologies and frameworks emerging regularly. I am dedicated to staying up to date with the latest industry trends and continuously improving my skills. This adaptability allows me to embrace new challenges and deliver innovative solutions.

                        Strong attention to detail: In web development, small details can make a significant impact on the overall user experience and functionality. I take pride in my meticulous approach to coding, ensuring clean, readable, and well-structured code that is easy to maintain and scale.

                        Passion for the craft: Beyond my technical skills, I am genuinely passionate about web development. I enjoy creating engaging and intuitive user interfaces, solving problems, and making a positive impact through my work. This enthusiasm drives me to consistently deliver exceptional results and motivates me to continuously grow and improve as a developer.

                        Overall, I believe my strong technical skills, experience, problem-solving ability, collaboration skills, adaptability, attention to detail, and passion for web development make me a valuable candidate worth considering for the position.</Text>
                </Box>
                

                

            </Box>





        </Box>
    );
}


export default Servies;