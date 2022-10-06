import {
   Tabs, 
   TabList, 
   Tab, 
   TabPanels, 
   TabPanel, 
   Heading }
    from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'
import ExternalLink from '../components/AboutDiabetes/ExternalLink'
import FrequentConsequences from '../components/AboutDiabetes/FrequentConsequences'
import Introduction from '../components/AboutDiabetes/Introduction'
import ReduceDiabetesBurden from '../components/AboutDiabetes/ReduceDiabetesBurden'
import Types from '../components/AboutDiabetes/Types'


const About = () => {
  return (
    <div >
        <Heading textAlign={'center'} m={'50px'}><u>About my Illness</u></Heading>
        <Tabs align='center' display={''} variant='soft-rounded' colorScheme='red'>
      <TabList>
        <Tab>What is the diabetes?</Tab>
        <Tab>Types</Tab>
        <Tab>Frequent Consequences</Tab>
        <Tab>Reduce Diabetes Burden</Tab>
        <Tab>Know More{' '}<ExternalLinkIcon mx={'2px'}/></Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Introduction/>
        </TabPanel>
        <TabPanel>
          <Types/>
        </TabPanel>
        <TabPanel>
          <FrequentConsequences/>
        </TabPanel>
        <TabPanel>
          <ReduceDiabetesBurden/>
        </TabPanel>
        <TabPanel>
          <ExternalLink></ExternalLink>
        </TabPanel>
      </TabPanels>
</Tabs>
    </div>
  )
}

export default About