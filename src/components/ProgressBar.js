import React from "react";
import styled from "@emotion/styled";

const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <Uploading>Uploading...</Uploading>
      <Bar>
        <Progress></Progress>
      </Bar>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  background: #fafafb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 500px;
  padding: 50px 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Uploading = styled.h2`
  font-weight: 500;
  font-size: 28px;
  color: #4f4f4f;
  margin-bottom: 30px;
`;

const Bar = styled.div`
  background: #f2f2f2;
  border-radius: 8px;
  padding: 5px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  height: 100%;
  width: 100px;
  background-color: #2f80ed;
  clear: both;
  animation: loading 2s linear 0.8s infinite;
`;

export default ProgressBar;
