import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Types = () => {
  return (
    <Box height={'auto'} width={'600px'} word-wrap={'break-word'}>
        <Heading color='#ff5e5b'>Type 1 Diabetes</Heading>
        <br/>
        <Text textAlign={'left'}>Type 1 diabetes (also called insulin-dependent, juvenile, or
        childhood-onset) is characterized by poor insulin production and
        requires daily administration of this hormone. The cause of type 1
        diabetes is still unknown and it cannot be prevented with current
        knowledge.
        <br/>
        Its symptoms consist, among others, of excessive urine excretion
        (polyuria), thirst (polydipsia), constant hunger (polyphagia), weight
        loss, visual disturbances and tiredness. These symptoms may
        appear suddenly.</Text>
        <br/>
        <br/>
        
        <Heading color='#ff5e5b'>Type 2 Diabetes</Heading>
        <br/>
        <Text textAlign={'left'}>Type 2 diabetes (also called non-insulin dependent or adult-onset)
        is due to ineffective use of insulin. This type accounts for the
        majority of cases worldwide and is largely due to excessive body
        weight and physical inactivity.
        <br/>
        Symptoms can be similar to those of type 1 diabetes, but are often
        less severe. Consequently, the disease can be diagnosed only after
        several years of evolution and complications have appeared.
        <br/>
        Until recently, this type of diabetes was only seen in adults, but it is
        now showing up in children as well.</Text>
        <br/>
        <br/>
        <Heading color='#ff5e5b'>Gestational Diabetes</Heading>
        <br/>
        <Text textAlign={'left'}>Gestational diabetes is characterized by hyperglycemia (increased
        blood sugar) that appears during pregnancy and reaches values
        that, despite being higher than normal, are lower than those
        established to diagnose diabetes.
        <br/>
        Women with gestational diabetes are at increased risk of
        complications during pregnancy and childbirth. In addition, both
        they and their children are at increased risk of developing type 2
        diabetes in the future.
        <br/>
        It is usually diagnosed through prenatal tests, rather than because
        the patient reports symptoms.</Text>
    </Box>
  )
}

export default Types