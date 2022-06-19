var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import styled from "styled-components";
import { ItemCard } from "./ItemCard";
import { CardType } from "../types";
import { Text } from "vcc-ui";

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
  margin-left: -30%;
  height: 400px;
  @media (min-width: 375px) {
    place-items: center;
    margin-left: -23%;
    justify-content: center;
  }
  @media (min-width: 480px) {
    place-items: center;
    margin-left: -14%;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    place-items: center;
    margin-left: unset;
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

const TextContent = styled.div`
  width: 35%;
  margin: 0 auto;
  padding: 20px;
`;

interface CardListProps {
  cards: CardType[];
}

export const CardList = ({ cards }: CardListProps) => {
  const responsive = {
    0: {
      margin: 15,
      loop: false,
      items: 1,
      stagePadding: 90,
      nav: false,
    },
    375: {
      margin: 15,
      loop: false,
      items: 1,
      stagePadding: 100,
      nav: false,
    },
    480: {
      margin: 15,
      loop: false,
      items: 2,
      stagePadding: 100,
      nav: false,
    },
    1024: {
      items: 4,
      margin: 15,
      dots: false,
    },
  };

  if (cards.length < 1) {
    return (
      <TextContent>
        <Text data-testid="no result found">No result found</Text>
      </TextContent>
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
