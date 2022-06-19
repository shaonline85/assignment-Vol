import styled from "styled-components";
import { useState } from "react";
import { CardList } from "../src/components/CardList";

import { CardType } from "../src/types";

export interface Vehicle {
  cars: CardType[];
}

const SearchBoxContainer = styled.div`
  width: 70%;
  max-width: 1285px;
  margin: 0 auto;
  padding-top: 20px;
`;

const StyledTextInput = styled.div`
  input {
    width: 100%;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    padding: 20px 15px 20px 15px;
  }
`;

export default function Home(props: Vehicle) {
  const cars = props.cars;
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredCars = cars.filter((car) => car.bodyType.includes(searchValue));

  return (
    <>
      <SearchBoxContainer>
        <StyledTextInput>
          <input
            type="text"
            value={searchValue}
            placeholder="filter by body"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </StyledTextInput>
      </SearchBoxContainer>

      <CardList cards={filteredCars} />
    </>
  );
}

let cars = require("../public/api/cars.json");
export async function getStaticProps() {
  return {
    props: { cars },
  };
}
