import React, { useState, useContext } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/final/almalogo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { AppContext } from "context/AppContext";
import { useHistory } from "react-router-dom";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import axios from "axios";
import { toast } from "react-toastify";
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-32 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Institute, setInstitute] = useState("");
  const [Year, setYear] = useState("");
  const [Branch, setBranch] = useState("");
  const [City, setCity] = useState("");
  const submitButtonText = "Sign Up";
  const SubmitButtonIcon = SignUpIcon;
  const history = useHistory();
  const { setIsLoggedIn, setEmail, setName } = useContext(AppContext);

  const logoLinkUrl = "#";
  const illustrationImageSrc = illustration;
  const headingText = "Complete your registration";
  const tosUrl = "#";
  const privacyPolicyUrl = "#";
  const signInUrl = "#";
  const onSubmitSuccess = async (e) => {
    e.preventDefault();
    try {
      const FormResponse = await axios.post(
        "http://localhost:5000/api/v1/auth/finish-registration",
        {
          phone: PhoneNumber,
          institute: Institute,
          branch: Branch,
          year: Year,
          city: City,
        },
        {
          withCredentials: true,
        }
      );
      if (FormResponse.status === 200) {
        toast(`Registered Successfully`, { autoClose: 2000 });
        setEmail(FormResponse.data.updatedUser.email);
        setName(FormResponse.data.updatedUser.name);
        setIsLoggedIn(true);
        history.push("/");
      }
    } catch (e) {
      if (String(e.response.data.error.statusCode).startsWith("4")) {
        return toast.error(e.response.data.message);
      }
      toast.error("There was some error! Please try again later");
    }
  };
  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer style={{ marginTop: "-50px" }}>
            <MainContent>
              <Heading style={{ fontSize: "25px" }}>{headingText}</Heading>
              <FormContainer>
                <Form autoComplete="true">
                  <Input
                    type="text"
                    name="PhoneNumber"
                    placeholder="PhoneNumber"
                    value={PhoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    name="Institute"
                    placeholder="Institute"
                    value={Institute}
                    onChange={(e) => {
                      setInstitute(e.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    name="Branch"
                    placeholder="Branch"
                    value={Branch}
                    onChange={(e) => {
                      setBranch(e.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    name="Year"
                    placeholder="Year"
                    value={Year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    name="City"
                    placeholder="City"
                    value={City}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  <SubmitButton onClick={(e) => onSubmitSuccess(e)}>
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={logo} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
