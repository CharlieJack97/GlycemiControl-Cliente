import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ReduceDiabetesBurden = () => {
  return (
    <Box display={''} textAlign={'center'} height={'auto'} width={'600px'} word-wrap={'break-word'}>
    <Heading color='#ff5e5b'>
        Prevention
    </Heading>
        <Text textAlign={'left'}>
            Simple lifestyle measures have been shown to be effective in preventing type 2 diabetes or delaying its onset. To help prevent type 2 diabetes and its complications, you should:
            <br/><br/>
                <li>
                    Achieve and maintain a healthy body weight.
                </li>
                <li>
                    Be physically active: at least 30 minutes of regular, moderate-intensity activity most days of the week; more strenuous activity may be necessary to control weight.
                </li>
                <li>
                    Eat a healthy diet that avoids sugar and saturated fats.
                    Avoid tobacco consumption, since it increases the risk of suffering from diabetes and cardiovascular diseases.
                </li>
            </Text>
    <Heading color='#ff5e5b'>
        Diagnosis and treatment
    </Heading>
        <Text textAlign={'left'}>
            The diagnosis can be made early with relatively inexpensive blood tests.<br/><br/>
            Diabetes treatment consists of a healthy diet and physical activity, along with lowering blood sugar and other known risk factors for damaging blood vessels. To avoid complications it is also important to stop smoking.<br/><br/>
            Interventions that are feasible and affordable in developing countries include:<br/>
            <li>
                glycemic control, particularly in people with type 1 diabetes. Type 1 diabetes patients require insulin and type 2 diabetes patients can be treated with oral medications, but may also require insulin;    
            </li>
            <li>
                blood pressure control; and
            </li>
            <li>
                podiatric care.    
            </li>
            <br/>
            <br/>
            <Text textAlign={'left'} color='#ff5e5b'><strong> Other economic interventions are:</strong></Text>
            <li>
                Screening for retinopathy (a cause of blindness).
            </li>
            <li>
                Control of blood lipids (regulation of cholesterol concentration).
            </li>
            <li>
                Detection of early signs of diabetes-related kidney disease.
            </li>
        </Text>
    </Box>
  )
}

export default ReduceDiabetesBurden