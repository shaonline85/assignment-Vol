import styled from "styled-components";
import { Icon } from "vcc-ui";

const ArrowsContainer = styled.div`
  display: flex;
`;

const NextIcon = styled.div`
  cursor: pointer;
`;

const PrevIcon = styled.div`
  cursor: pointer;
`;

export interface NavigatorProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function Navigator({onNext, onPrev}: NavigatorProps) {
  return (
    <ArrowsContainer>
      <NextIcon onClick={onNext}>
        <Icon type="mediacircled-previous-32" color="secondary" />
      </NextIcon>
      <PrevIcon onClick={onPrev}>
        <Icon type="mediacircled-next-32" />
      </PrevIcon>
    </ArrowsContainer>
  );
}
