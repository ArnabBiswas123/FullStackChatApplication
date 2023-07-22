import React from 'react'
import { Container, Box, Text, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';


export default function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const authtoken = localStorage.getItem('authToken');
    if (authtoken) {
      history.push("/chats")
    }
  }, [history])


  return (
    <Container maxW='xl' centerContent>
      <Box
        display='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        w='100%'
        m="40px 0 15px 0"
        borderRadius='md'
        borderWidth='1px'
      >
        <Text fontSize='2xl' fontFamily='Work sans' color='black' textAlign='center'>Simple Chat and that's it</Text>
      </Box>
      <Box bg='white' w='100%' p={4} borderRadius='md' borderWidth='1px'>
        <Tabs variant='soft-rounded'>
          <TabList mb='1em'>
            <Tab w='50%'>Login</Tab>
            <Tab w='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <Signup></Signup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}
