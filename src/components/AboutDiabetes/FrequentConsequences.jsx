import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const FrequentConsequences = () => {
  return (
        <Box height={'auto'} width={'600px'} word-wrap={'break-word'}>
            <Heading color='#ff5e5b'>
                What are the common consequences of diabetes?
            </Heading>
            <br/>
            <Text textAlign={'left'}>
            Over time, diabetes can damage the heart, blood vessels, eyes, kidneys, and nerves.
            <br/><br/>
                <li>
                    Adults with diabetes have a 2- to 3-fold increased risk of heart attack and stroke.
                </li>
                <li>
                    Neuropathy of the feet combined with reduced blood flow increases the risk of foot ulcers, infection, and ultimately amputation.
                </li>
                <li>
                Diabetic retinopathy is a major cause of blindness and is the consequence of damage to the small blood vessels of the retina that accumulates over time. 2.6% of global cases of blindness are caused by diabetes.
                </li>
                <li>
                Diabetes is among the leading causes of kidney failure.
                </li>
                <li>
                How to reduce the burden of diabetes
                </li>
            </Text>

        </Box>
  )
}

export default FrequentConsequences