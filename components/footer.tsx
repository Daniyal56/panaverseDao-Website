import Image from "next/image";
import listIcon from 'public/Polygon Icon.png';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, Card, Flex, Avatar, IconButton, StackDivider, CardHeader, CardBody, CardFooter, Stack, Box, Heading, Text, Divider, ButtonGroup, Button
} from '@chakra-ui/react';
import FooterImage from 'public/Left.png';

interface ListItems_Icons {
    id: number,
    title: string
}

const listDetails: ListItems_Icons[] = [
    {
        id: 1,
        title: 'Product Ownership'
    },
    {
        id: 2,
        title: 'Freelacing'
    },
    {
        id: 3,
        title: 'Global Marketing by DAO'
    },
    {
        id: 4,
        title: 'Boosting Economy.'
    },
]

const Footer = () => {
    return (
        <>
            <Box pt={"5rem"} display={"flex"}>
                <Box width={"34%"}>
                    <Image src={FooterImage} alt='.........' />
                </Box>
                <Box background={"rgba(5, 193, 156, 0.6)"} filter={'blur(250px)'} width={"20%"}></Box>
                <Box width={"56%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <Heading>The Outcome for Participants of the Program</Heading>
                    <Text>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</Text>
                    <List spacing={3} pt={"2rem"} display={'flex'}>
                        {
                            <Flex flexWrap={"wrap"}>
                                {listDetails.map((a, index) => (
                                    <ListItem key={index} width={"50%"} display={"flex"} alignItems={"center"} p={"2rem"}>
                                        <Image src={listIcon} width={30} alt="" />
                                        <Text pl={"0.5rem"}>{a.title}</Text>
                                    </ListItem>
                                ))}
                            </Flex>
                        }
                    </List>
                </Box>

            </Box>
        </>
    );
}

export default Footer;
