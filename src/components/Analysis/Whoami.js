import React from "react";
import styled from "styled-components";
import Label from "components/Label";
import ProgressBar from "components/ProgressBar";
import devices from "styles/device";

const WhoamI = () => {
  return (
    <Container>
      <LabelLayout>
        <Label label={"WHO AM I"} color={"#FDD692"} />
      </LabelLayout>
      <ContentsLayout>
        <ProgressBarLayout>
          <ProgressBar />
        </ProgressBarLayout>
      </ContentsLayout>
    </Container>
  );
};

const Container = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    height: fit-content;
  }
  width: 100%;
  /* height: 100%; */
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
`;

const LabelLayout = styled.div`
  width: 100%;
  height: 25px;
`;

const ContentsLayout = styled.div`
  width: 100%;
  height: calc(100% - 25px);
  padding: 15px 0px;
  /* background-color: wheat; */
`;

const ProgressBarLayout = styled.div`
  @media ${({ theme }) => devices.device.mobile} {
    width: 100%;
    heigth: 70%;
  }

  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
`;

export default WhoamI;
