import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Introduction = () => {
  return (
    <Box display={''} textAlign={'center'} height={'auto'} width={'600px'} word-wrap={'break-word'}>
        <Heading color='#ff5e5b'>What is the diabetes?</Heading>
        <br/>
        <Text textAlign={'left'}>Diabetes is a chronic disease that occurs when the pancreas does
        not produce enough insulin or when the body does not effectively
        use the insulin it does produce. Insulin is a hormone that regulates
        blood sugar. The effect of uncontrolled diabetes is hyperglycemia   
        (increased blood sugar), which over time seriously damages many
        organs and systems, especially nerves and blood vessels.</Text><br/>
        <br/>

        <Heading fontSize={'20px'} color='#ff5e5b'>Impaired glucose tolerance and impaired fasting blood glucose</Heading>
        <br/>
        
        <Text textAlign={'left'}>Impaired glucose tolerance and impaired fasting blood glucose are
        transition states between normality and diabetes, and sufferers are
        at increased risk of progressing to type 2 diabetes, although this is
        not inevitable.</Text>
    </Box>
  )
}

export default Introduction