import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import SliderAuto from '../components/SliderAuto';
import MedicalComment from '../components/MedicalComment';
import { Link } from 'react-router-dom';
import AboutControl from '../components/AboutControl';

export default function HomePage(props) {
  return (
    <Container maxW={'5xl'}>
      <SliderAuto />
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 20, md: 20 }}
        py={{ base: 20, md: 40 }}
        >
        
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Text as={'span'} color={'#ff5e5b'}>
              About 
            </Text>
            {' '}Diabetes Mellitus
          </Heading>
          <Stack align={'end'}>
          <Text textAlign={'left'} color={'gray.500'} maxW={'3xl'}>
          Diabetes is a disease in which blood glucose (sugar) levels are too high.
           Glucose comes from the foods you eat. Insulin is a hormone that helps glucose
            enter cells to supply them with energy. In type 1 diabetes, the body does not
            produce insulin. In type 2 diabetes, the most common type, the body does not
            make or use insulin properly. Without enough insulin, glucose stays in the blood.
            <br/>
          Over time, too much glucose in the blood can cause serious problems. It can damage
           the eyes, kidneys, and nerves. Diabetes can also cause heart disease, stroke, and the
           need to amputate a limb. Pregnant women can also develop diabetes, called gestational
           diabetes.
          </Text>
            <Link to={'/about'}>
              <Button  px={6}>
                  Learn more
              </Button>
            </Link>
          </Stack>
          <Stack>
        <AboutControl/>
        </Stack>
        <MedicalComment/> 
      </Stack>
      <Footer/>
    </Container>
  );
}