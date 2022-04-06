import React from "react";
import {
  CardFooter,
  Container,
  Content,
  FooterText,
  Header,
  Image,
  ImageBrackgound,
  LeftContent,
  RightContent,
  Subtitle,
  Temperature,
  Title,
  Wrapper,
} from "./styles";

const PrimaryCard: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Today</Title>
          <Subtitle>Monday 12, Ap</Subtitle>
        </Header>
        <Content>
          <LeftContent>
            <Image source={require("../../assets/images/cloudy.png")} />
          </LeftContent>
          <RightContent>
            <Temperature>30°</Temperature>
          </RightContent>
        </Content>
        <CardFooter>
          <FooterText>Posse, Go Brazil</FooterText>
        </CardFooter>
      </Wrapper>
      <ImageBrackgound source={require("../../assets/images/montain.png")} />
    </Container>
  );
};

export default PrimaryCard;
