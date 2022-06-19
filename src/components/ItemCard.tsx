import styled from "styled-components";
import { CardType } from "../types";
import Image from "next/image";
import { Text, Link } from "vcc-ui";

const Card = styled.div`
cursor: pointer;
  &:hover {
    color: #1c6bba;
  }
  img {
    &:hover {
      transform: scale(1.1);
    }
    transition: 0.3s ease-out;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface ItemCardProps {
  item: CardType;
}
export const ItemCard = ({ item }: ItemCardProps) => {
  const { id, bodyType, modelName, modelType, imageUrl } = item;
  const learnLink = `/learn/${id}`;
  const shopLink = `/shop/${id}`;
  return (
    <Card>
      <Text fg="#707070">{bodyType}</Text>
      <Text subStyle="emphasis">{modelName}</Text>
      <Text variant="bates">{modelType}</Text>
      
      <Image
        src={imageUrl}
        alt={modelName}
        layout="responsive"
        objectFit="fill"
        quality={100}
        width="300px"
        height="223px"
      />

      <LinkContainer>
        <Link href={learnLink} arrow="right">
          Learn
        </Link>
        <Link href={shopLink} arrow="right">
          shop
        </Link>
      </LinkContainer>
    </Card>
  );
};
