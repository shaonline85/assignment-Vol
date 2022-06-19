import styled from "styled-components";
import { Text } from "vcc-ui";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  width: 100%;
  height: 150px;  
  position:absolute;
  bottom:0;
`;

export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <Text variant="bates">
          Copyright © 2022 Volvo Car Corporation (eller dess
          dotterbolag/licensgivare).
        </Text>
      </FooterContainer>
    </footer>
  );
}
