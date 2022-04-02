import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { useParams, useHistory } from "react-router-dom";
import EventsDetails from "../../data/EventsDetails.js";
import axios from "axios";
import { toast } from "react-toastify";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { AppContext } from "context/AppContext";
import { REACT_APP_BASE_URL } from "./../../config";

const ActionButton = tw(
  PrimaryButtonBase
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium  text-justify max-w-xl`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/3 lg:w-5/12 xl:w-1/2 flex-shrink-0 h-40 md:h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-base leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const params = useParams();
  const history = useHistory();

  const { email } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let events = [];

  switch (params.type) {
    case "dramatics":
      events = EventsDetails.dramatics;
      break;
    case "music":
      events = EventsDetails.music;
      break;
    case "dance":
      events = EventsDetails.dance;
      break;
    case "literature":
      events = EventsDetails.literature;
      break;
    case "food":
      events = EventsDetails.food;
      break;
    case "esports":
      events = EventsDetails.esports;
      break;
    case "photography":
      events = EventsDetails.photography;
      break;
    case "fashion":
      events = EventsDetails.fashion;
      break;
    case "filler":
      events = EventsDetails.filler;
      break;
    default:
      events = null;
      break;
  }

  const registerForEvent = async (event) => {
    if (!email) {
      return toast(`Please Login to continue registration!`, {
        autoClose: 2000,
      });
    }
    if (String(email).split("@")[1] === "iitbbs.ac.in") {
      const token = window.localStorage.getItem("jwt");
      try {
        const registrationResponse = await axios.post(
          `${REACT_APP_BASE_URL}/api/v1/event/register/${event.id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        if (registrationResponse.status === 200) {
          return toast(`Successfully registered for ${event.title}`, {
            autoClose: 2000,
          });
        }
      } catch (e) {
        if (String(e.response.data.error.statusCode).startsWith("4")) {
          return toast.error(e.response.data.message);
        }
        toast.error("There was some error! Please try again later");
      }
    } else {
      toast(
        `Your being redirected to Razorpay page for payment, make sure you enter the same email you entered here during registration!`,
        {
          autoClose: 2000,
        }
      );
      window.location.href = event.url;
    }
  };

  return events === null ? (
    <></>
  ) : (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle style={{ textTransform: "capitalize" }}>
            {params.type} Events
          </HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {events.map((event, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={event.imageSrc} />
              <Details>
                <Subtitle>{event.subtitle}</Subtitle>
                <Title>{event.title}</Title>
                <Description>{event.description}</Description>
                <Link href={event.rulebook}>Event Rules</Link>
                <br />
                <Link href={event.url}>See Event Details</Link>
                <br />
                <PrimaryButton
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    registerForEvent(event);
                  }}
                >
                  Register
                </PrimaryButton>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
