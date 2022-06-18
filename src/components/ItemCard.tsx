import styled from "styled-components";
import { CardType } from "../types";
import Image from "next/image";
import { Text, Link} from "vcc-ui";

const Card = styled.div`
  display: inline;
  height: 325px;
  width: 300px;
  margin: 10px 0px;
  padding: 10px;
  text-size-adjust: 100%;
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
const ImageContainer = styled.div`
  width: 290px;
  height: 218px;
  overflow: hidden;
  margin-top: 10px;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const blah = styled.div`
  font-weight: 500;
  color: #707070;
`;

interface ItemCardProps {
  item: CardType;
}
export const ItemCard = ({ item }: ItemCardProps) => {
  const {id, bodyType, modelName, modelType, imageUrl} = item;
  const learnLink = `/learn/${id}`
  const shopLink = `/shop/${id}`
  return (
    <Card>
      <Text fg='#707070'>{bodyType}</Text>
      <Text>{modelName}</Text>
      <Text>{modelType}</Text>
      <ImageContainer>
        <Image
          src={imageUrl}
          alt={modelName}
          width="290"
          height="218"
        />
      </ImageContainer>
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
