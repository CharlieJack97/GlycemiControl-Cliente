import { Box, Link, List } from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ExternalLink = () => {
  return (

    <Box fontSize={'25px'} textAlign={'left'} height={'auto'} width={'600px'} word-wrap={'break-word'}>
        <List><Link color='#ff423d' href={'https://medlineplus.gov/ency/article/001214.htm'} isExternal>MedLinePlus{' '}<ExternalLinkIcon mx='2px'/></Link></List><br/><br/>
        <List><Link color='#ff423d' href={'https://www.who.int/news-room/fact-sheets/detail/diabetes'} isExternal>World Health Organization{' '}<ExternalLinkIcon mx='2px'/></Link></List><br/><br/>
        <Link color='#ff423d' href={'https://www.niddk.nih.gov/health-information/diabetes'} isExternal>National Institute of Diabetes and Digestive and Kidney Diseases{' '}<ExternalLinkIcon mx='2px'/></Link><br/><br/>
        <Link color='#ff423d' href={'https://www.mayoclinic.org/diseases-conditions/diabetes/diagnosis-treatment/drc-20371451'} isExternal>Mayo Clinic{' '}<ExternalLinkIcon mx='2px'/></Link><br/><br/>
    </Box>
  )
}

export default ExternalLink