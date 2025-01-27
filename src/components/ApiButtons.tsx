import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button<{ $isLoading: boolean }>`
  background-color: ${({ $isLoading }) => ($isLoading ? "#cccccc" : "#007bff")};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: ${({ $isLoading }) => ($isLoading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $isLoading }) =>
      $isLoading ? "#cccccc" : "#0056b3"};
  }
`;

const ResponseContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ResponseBox = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  background-color: #f9f9f9;
  overflow-x: auto;
  white-space: pre;
  font-family: "Courier New", Courier, monospace;
  margin-top: 20px;
`;

const ApiButtons: React.FC = () => {
  const [userOpResponse, setUserOpResponse] = useState<any | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [loadingUserOp, setLoadingUserOp] = useState(false);
  const [loadingRpc, setLoadingRpc] = useState(false);

  const callUserOpApi = async () => {
    setLoadingUserOp(true);
    setResponse(null);
    setUserOpResponse(null);
    try {
      const response = await axios.post("/v1/user-op", {
        to: "0x0065512840A4c8E80b047C2246c06302d0B3801C",
        amount: 0.0001,
      });

      setUserOpResponse(response.data.userOp);
      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setResponse(
        error.response?.data
          ? JSON.stringify(error.response.data, null, 2)
          : error.message
      );
    } finally {
      setLoadingUserOp(false);
    }
  };

  const callRpcApi = async () => {
    if (!userOpResponse) {
      setResponse(
        "Please generate UserOp first before submitting transaction."
      );
      return;
    }

    setLoadingRpc(true);
    setResponse(null);
    try {
      const response = await axios.post("/v1/rpc", {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_sendUserOperation",
        params: [userOpResponse, "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789"],
      });

      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setResponse(
        error.response?.data
          ? JSON.stringify(error.response.data, null, 2)
          : error.message
      );
    } finally {
      setLoadingRpc(false);
    }
  };

  return (
    <Container>
      <ButtonContainer>
        <Button
          onClick={callUserOpApi}
          $isLoading={loadingUserOp}
          disabled={loadingUserOp || loadingRpc}
        >
          {loadingUserOp ? "Loading..." : "Generate UserOp"}
        </Button>
        <Button
          onClick={callRpcApi}
          $isLoading={loadingRpc}
          disabled={loadingUserOp || loadingRpc}
        >
          {loadingRpc ? "Loading..." : "Submit Transaction"}
        </Button>
      </ButtonContainer>
      <ResponseContainer>
        {response && (
          <ResponseBox>
            <h4>Response:</h4>
            <pre>{response}</pre>
          </ResponseBox>
        )}
      </ResponseContainer>
    </Container>
  );
};

export default ApiButtons;
