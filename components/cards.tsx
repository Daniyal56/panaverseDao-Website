import { Card, Flex, Avatar, IconButton,StackDivider ,CardHeader, CardBody, CardFooter, Image, Stack, Box, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import BsThreeDotsVertical from '@chakra-ui/icons';
import style from './card.module.css';
import Head from 'next/head';

interface Detail {
  quarter_id: number;
  quarter_name: string;
  quarter_detail: string;
}

const detail: Detail[] = [
  {
    quarter_id: 1,
    quarter_name: 'Quarter I',
    quarter_detail: 'CS-101: Object-Oriented Programming using TypeScript',
  },
  {
    quarter_id: 2,
    quarter_name: 'Quarter II',
    quarter_detail: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
  },
  {
    quarter_id: 3,
    quarter_name: 'Quarter III',
    quarter_detail: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
  },
];

const moredetail: Detail[] = [
  {
    quarter_id: 4,
    quarter_name: 'Quarter IV',
    quarter_detail: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
  },
  {
    quarter_id: 5,
    quarter_name: 'Quarter V',
    quarter_detail: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
  },
];

interface Video {
  video_title: string,
  video_cover: string
}

const video_detail: Video[] = [
  {
    video_title: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    video_cover: ''
  },
  {
    video_title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    video_cover: ''
  },
  {
    video_title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    video_cover: ''
  },
  {
    video_title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    video_cover: ''
  },
  {
    video_title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    video_cover: ''
  },
  {
    video_title: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    video_cover: ''
  },

]

const Cards = () => {
  return (
    <>
      <Box className={style.cardDetail}>
        {detail.map((d) => (
          <Card key={d.quarter_id} maxW='sm'>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{d.quarter_name}</Heading>
                <Text>{d.quarter_detail}</Text>
                <Text color='blue.600' fontSize='2xl' className={style.cards}>
                  {d.quarter_id}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
      <Box mt={10}>
        <Heading>Specialized Tracks:</Heading>
        <Text w={600}>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </Text>
        <Box className={style.video_quarter}>
          <Card maxW='lg' minWidth={"75%"} p={"5rem"}>
            <CardHeader>
              <Flex >
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  {/* <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' /> */}

                  <Box>
                    {/* <Heading size='sm'>Segun Adebayo</Heading> */}
                    <Text color={"#00616C"}>Specialized Program</Text>
                    <Heading>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                />
              </Flex>
            </CardHeader>
            <CardBody className=''>
              <Text>
                This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.

              </Text>
              <Text>Learn More</Text>
            </CardBody>
            {
              <Box className={style.cardmoreDetail}>
                {moredetail.map((d) => (
                  <Card key={d.quarter_id} maxW='sm' boxShadow={"none"}>
                    <CardBody>
                      <Stack mt='6' spacing='3'>
                        <Heading size='md'>{d.quarter_name}</Heading>
                        <Text>{d.quarter_detail}</Text>
                        <Text color='blue.600' fontSize='2xl' className={style.cards}>
                          {d.quarter_id}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </Box>
            }

            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
            </CardFooter>
          </Card>
              
          {
              <Box width={"22%"}>
                {video_detail.map((d) => (
                  <Card key={d.video_title} maxW='sm' boxShadow={"none"} >
                    <CardBody>
                      <Stack mt='6' spacing='3'>
                        <Text size='md' color={"#00616C"}>Specialized Program</Text>
                        <Text>{d.video_title}</Text>
                        
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </Box>
            }

        </Box>

      </Box>

    </>

  );
};

export default Cards;
