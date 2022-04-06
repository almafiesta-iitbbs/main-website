import React, { useState } from 'react';
import Slider from 'react-slick';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from 'components/misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons';

import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg';
import { useHistory } from 'react-router-dom';

import genreDetails from '../../data/GenreDetails';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;
const CardSlider = styled(Slider)`
  ${tw`mt-16  overflow-x-hidden`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);
const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;
const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4 text-justify`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  const history = useHistory();
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = genreDetails;

  return (
    <Container style={{ top: '-100px' }}>
      <a
        id="events"
        style={{
          width: '100%',
          position: 'relative',
          left: '-500px',
        }}
      />
      <Content>
        <HeadingWithControl>
          <Heading>Our Events</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  {/* <RatingsInfo> */}
                  {/* <StarIcon /> */}
                  {/* <Rating>{card.rating}</Rating> */}
                  {/* </RatingsInfo> */}
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  {/* <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText> */}
                  {/* <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText> */}
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              {card.title !== 'Food Fest' ? (
                <PrimaryButton
                  onClick={() => {
                    history.push(
                      `/events/${card.title.toLowerCase().split(' ').join('_')}`
                    );
                  }}
                >
                  Explore
                </PrimaryButton>
              ) : (
                <PrimaryButton>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forms.gle/Kup14F9KG1AJXFMGA"
                  >
                    Register
                  </a>
                </PrimaryButton>
              )}
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );

  // https://forms.gle/Kup14F9KG1AJXFMGA
};
