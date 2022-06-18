import { useState } from "react";
import styled from "styled-components";
import { ItemCard } from "./ItemCard";
import { CardType } from "../types";
import Navigator from "./Navigator";
import useWindowWidth from "../hooks/useWindowWidth";

const ListContainer = styled.div`
  display: grid;
  place-items: end;
  padding: 50px 0;
  @media (min-width: 1024px) {
    place-items: center;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 392px;
  overflow: hidden;
  padding-left: 20px;
  width: 98%;
  @media (min-width: 1024px) {
    width: 80%;
    max-width: 1285px;
  }
`;

const Reel = styled.div.attrs((props: { percentage: number }) => props)`
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;
  transform: translate3d(${(props) => props.percentage}%, 0, 0);
  -ms-transform: translate3d(${(props) => props.percentage}%, 0, 0);
  -webkit-transform: translate3d(${(props) => props.percentage}%, 0, 0);
  transition: 0.3s ease-out;
  -ms-transition: 0.3s ease-out;
  -webkit-transition: 0.3s ease-out;
`;

const NavigationTracker = styled.div`
  display: flex;
  transition: 0.3s ease-out;
`;

const TrackingDot = styled.div.attrs((props: { color: string }) => props)`
  background-color: ${(props) => props.color ?? '#f1f1f1'};
  border: 1px solid ${(props) => props.color ?? '#f1f1f1'};
  height: 6px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 6px;
  margin-left: 5px;
`;

interface CardListProps {
  cards: CardType[];
  isFetched: boolean;
}

export const CardList = ({ cards, isFetched }: CardListProps) => {
  const [translate, setTranslate] = useState<number>(0);
  const [xPosition, setXPosition] = useState<number>(0);
  const windowWidth = useWindowWidth(); //1023

  const handleTranslator = (value: number) => {
    let newValue = translate + value;
    newValue = newValue > 0 ? 0 : newValue;
    setTranslate(newValue);
  };

  const handleMouseDown = (ev: any) => {
    ev.preventDefault();
    setXPosition(ev.clientX);
  };

  const handleMouseUp = (ev: any) => {
    ev.preventDefault();
    xPosition > ev.clientX ? handleTranslator(-13) : handleTranslator(13);
  };

  const handleTouchStart = (ev: any) => {
    const touches = ev.touches || ev.originalEvent.touches;
    const firstTouch = touches[0];
    setXPosition(firstTouch.clientX);
  };

  const handleTouchEnd = (ev: any) => {
    const touches = ev.changedTouches || ev.originalEvent.touches;
    const touchEndPosition = touches[0].pageX;
    xPosition > touchEndPosition ? handleTranslator(-13) : handleTranslator(13);
  };

  if (!isFetched) {
    return (
      <ListContainer>
        <List data-testid="loading">Loading...</List>
      </ListContainer>
    );
  }
  return (
    <ListContainer>
      <List>
        <Reel
          percentage={translate}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </Reel>
      </List>
      {/* <Navigator
        onNext={() => handleTranslator(13)}
        onPrev={() => handleTranslator(-13)}
      /> */}
      <NavigationTracker>
      {cards.map((item) => (
            <TrackingDot/>
          ))}        
      </NavigationTracker>
    </ListContainer>
  );
};
