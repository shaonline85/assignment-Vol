var $ = require("jquery");
if (typeof window !== "undefined") {  
  window.$ = window.jQuery = require("jquery");
}
import styled from "styled-components";
import { ItemCard } from "./ItemCard";
import { CardType } from "../types";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const ListContainer = styled.div`
  display: flex;
  place-items: start;
  padding: 50px 0;
  margin-left:-23%;
  @media (min-width: 480px) {
    place-items: center;
    margin-left:-13%;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    place-items: center;
    margin-left:unset;
    justify-content: center;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding-left: 20px;
  width: 98%;
  @media (min-width: 1024px) {
    width: 80%;
    max-width: 1285px;
  }
`;

interface CardListProps {
  cards: CardType[];
  isFetched: boolean;
}

export const CardList = ({ cards, isFetched }: CardListProps) => {
  
  const responsive = {
    0: {
      margin: 15,
      loop: false,
      items: 1,
      stagePadding: 100,      
      nav: false
    },
    480: {
      margin: 15,
      loop: false,
      items: 2,
      stagePadding: 100,
      nav: false
    },
    1024: {
      items: 4,
      margin: 15,
      dots: false
    },
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
        <OwlCarousel
          nav
          dots
          navContainerClass="navContainer"
          dotsClass="dotsClass"
          dotClass="dotClass"
          dotsEach={true}
          responsive={responsive}
          items={2}
        >
          {cards.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </OwlCarousel>
      </List>
    </ListContainer>
  );
};
