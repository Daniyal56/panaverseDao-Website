import { Text, Box, Heading, Button } from '@chakra-ui/react'
import style from './homepage.module.css'

const Program = () => {
    return(
<Box mb={'32'}>

    <Box className={style.ProgramBox} height={150}>
        
    </Box>
    <Box>
            <Text color={"#00616C"}>Program of Studies</Text>
            <Heading>Core Courses
                (Common in All Specializations):</Heading>
            <Text>Every participant of the program will start by completing the following three core courses:</Text>
            <Button className={style.LearnMore}>Learn More</Button>
        </Box>
</Box>
    )
}

export default Program;