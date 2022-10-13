import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import Slider from 'react-slick';

import SliderImg1 from '../../images/slider1.png'
import SliderImg2 from '../../images/slider2.png'
import SliderImg3 from '../../images/slider3.png'
import SliderImg4 from '../../images/slider4.png'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SliderAuto() {

  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Diabetes is not hereditary as such',
      text:
        'Diabetes is not hereditary as such but it is genetically transmitted is the predisposition. When one of the two parents has type 2 diabetes, the risk of transmission is approximately 40%, if it is both, 70%. In the case of the first type, this risk is rather between 4 and 8%.',
      image: SliderImg1
        },
    {
      title: 'Risk Factors',
      text:
        "Smoking, being overweight, cholesterol, alcohol, a sedentary lifestyle... are some of the factors that can influence glycemic balance. They can cause complications such as hypertension and cardiovascular disease.",
      image: SliderImg2   
    },
    {
      title: 'The sugar?',
      text:
        "Many people still think that sugar is the main cause of diabetes. It turns out a bit more complex. Consuming sugar has nothing to do with type 1 diabetes, it depends essentially on genetic factors and others unknown until now, but it can become a risk factor for type 2. Hence the importance of controlling its consumption, without eliminating it altogether.",
      image: SliderImg3
    },
    {
      title: 'Sleeping well is key',
      text:
        "Sleep disorders such as insomnia can have direct consequences in diabetes. Several studies show that reduced sleep causes a dysregulation of carbohydrate metabolism (50% decrease in insulin action, 30% decrease in the amount of insulin produced). Hence the importance of a complete sleep.",
      image: SliderImg4
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'450px'}
      width={'full'}
      overflow={'hidden'}
      mt={10}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'450'}
            w={'700'}
            position="cover"
            backgroundPosition='center'
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Box 
                  className='bgText' 
                  bg='#1a202c75' 
                  p='20px' 
                  rounded='20px'>
                  <Heading 
                   color='white' 
                   fontSize={{
                   base: '3xl', 
                   md: '4xl', 
                   lg: '5xl' 
                   }}>
                    {card.title}
                  </Heading>
                  <Text
                   fontSize={{
                    base: 'md', 
                    lg: 'lg' 
                   }} 
                   color='gray.100'
                   fontStyle='italic' 
                   shadow='-moz-initial'>
                    <strong>{card.text}</strong>
                  </Text>
                </Box>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}


