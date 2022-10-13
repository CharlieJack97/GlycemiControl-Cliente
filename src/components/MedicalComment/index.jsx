import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

import LibiaImg from '../../images/Libia.jpg'
import AlvaroImg from '../../images/Alvaro.jpg'
import AbrahamImg from '../../images/Abraham.jpg'

const Tips = ({ children }) => {
  return <Box>{children}</Box>;
};

const TipContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('gray.100', 'gray.900')}
      h={280}
      w={380}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('gray.100', 'gray.900'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TipText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const AvatarDr = ({
  src="",
  name="",
  title="",
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function MedicalComment() {
  return (
    <Box >
      <Container
       maxW={'7xl'} 
       paddingTop={10} 
       as={Stack} 
       spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Advice from some Specialists</Heading>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          >
          <Tips>
            <TipContent>
              <TipText>
              Type 2 diabetes mellitus requires multidisciplinary care by trained medical personnel to avoid complications.
              If your question is focused on who can control your glucose, cholesterol, HbA1c levels, etc., both specialties are trained to manage it.
              But relying on an ophthalmologist, diabetes educator, podiatrist and nutritionist at the same time is also essential for your care. And avoid what all doctors seek, complications.
              Best regards and thank you very much for your trust.
              </TipText>
            </TipContent>
            <AvatarDr
              src={LibiaImg}
              name={'Dr. Libia Euridice Cordero Lima'}
              title={'Diabetologist, Internist'}
            />
          </Tips>
          <Tips>
            <TipContent>
              <TipText>
              Diabetes is a multifactorial disease, so a detailed consultation is necessary for its correct treatment, in order to prevent complications (such as blindness, amputations, neuropathies, nephropathies and many more). The treatment focuses on 4 basic points: diet, medicine, exercise and measurement of glucose (sugar) levels. I hope you will give me the opportunity to treat your condition.
              </TipText>
            </TipContent>
            <AvatarDr
              src={AlvaroImg}
              name={'Dr. Alvaro Pastrana Venzor'}
              title={'Diabetologist, Specialist in Obesity and Thinness'}
            />
          </Tips>
          <Tips>
            <TipContent>
              <TipText>
              Go to the endocrinologist if your problem is only high glucose, if in addition to that you have any of the following; high blood pressure, high triglycerides or cholesterol, diabetic neuropathy, kidney disease or any other disease in addition to your diabetes, seek an internist, he will give you more complete care.
              </TipText>
            </TipContent>
            <AvatarDr
              src={AbrahamImg}
              name={'Dr. Abraham Solis Viveros'}
              title={'Internist'}
            />
          </Tips>         
        </Stack>
      </Container>
    </Box>
  );
}