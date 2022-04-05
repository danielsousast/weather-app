import React from "react";
import {
  CardFooter,
  Container,
  Content,
  FooterText,
  Header,
  Image,
  LeftContent,
  RightContent,
  Subtitle,
  Temperature,
  Title,
} from "./styles";

const PrimaryCard: React.FC = ({ children }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default PrimaryCard;
