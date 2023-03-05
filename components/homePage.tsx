import {Box, Text,Heading, Button} from '@chakra-ui/react'
import style from './homepage.module.css'
import Image from 'next/image'
import Hero from 'public/Hero Poster.png'
const Homepage = () => {
    return(
        <>
        <Box className={style.homepageBoxMain}>
            <Box className={style.contentBox}>
                    <Text color={'#00616C'}>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</Text>
                    <Heading pt={'2rem'} fontSize={'5xl'} color={'#4A5B5C'}>Certified Web 3.0 and Metaverse Developer</Heading>
                    <Text pt={'2rem'}  color={'#4A5B5C'}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</Text>
                    <Text pt={'2rem'} color={'#4A5B5C'}>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</Text>
                    <Button className={style.LearnMore}>Learn More</Button>
            </Box>
            <Box className={style.HeroBox}>
                <Image width={1000}  src={Hero} alt='....' className={style.sidesimage}/>
            </Box>
        </Box>
        </>
    )
}

export default Homepage;