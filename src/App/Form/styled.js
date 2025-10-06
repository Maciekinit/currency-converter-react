import styled from "styled-components";

export const LabelText = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;
`;

export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.color.green};
  padding: 10px;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 5px;
  transition: 0.6s;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.blue};
  text-align: center;
`;

export const Info = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.color.emperor};
`;

export const Loading = styled.p`
color: ${({ theme }) => theme.color.green};
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.color.red};
`;