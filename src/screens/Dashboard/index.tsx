import React from "react";
import PrimaryCard from "../../components/PrimaryCard";
import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <PrimaryCard />
      </Content>
    </Container>
  );
};

export default Dashboard;
