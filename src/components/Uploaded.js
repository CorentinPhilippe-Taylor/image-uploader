import React from "react";
import styled from "@emotion/styled";

const Uploaded = ({ file, setUploading, setUploaded }) => {
  return (
    <UploadedContainer>
      <BackButton
        onClick={() => {
          setUploading(false);
          setUploaded(false);
        }}
      >
        <span className="material-icons">arrow_back_ios</span>
        <span>Back</span>
      </BackButton>
      <Title>
        <span className="material-icons">check_circle</span>
        <h2>Uploaded Successfully!</h2>
      </Title>
      <img src={file} alt="imageuploaded" />
      <Link>
        <span>{file}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(file);
          }}
        >
          Copy Link
        </button>
      </Link>
    </UploadedContainer>
  );
};

const UploadedContainer = styled.div`
  background: #fafafb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 70px;
  position: relative;

  img {
    border-radius: 15px;
    object-fit: contain;
    max-height: 500px;
    margin: 50px 0;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #219653;
    font-size: 42px;
  }
  h2 {
    font-weight: 500;
    font-size: 28px;
    color: #4f4f4f;
    white-space: nowrap;
  }
`;

const Link = styled.div`
  background: #f6f8fb;
  border: 1px solid #e0e0e0;
  width: 500px;
  border-radius: 8px;
  padding: 3px;
  font-size: 16px;
  color: #4f4f4f;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  span {
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
  }
  button {
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    color: #4f4f4f;
    border: none;
    background: #2f80ed;
    color: white;
    cursor: pointer;
  }
`;

const BackButton = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  background-color: #3c3c3c;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #494949;
  }

  span {
    color: white;
  }
`;
export default Uploaded;