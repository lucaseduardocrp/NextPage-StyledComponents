import { styled } from "styled-components";
import { themes } from "@/styles/themes";

const Title = styled.h1`
  background: ${({theme}) => themes.colors.red};
  font-size: ${() => themes.sizes["4xl"]};
`;

export default function Home() {
  return (
    <>
      <Title>Hello World</Title>
    </>
  )
}
