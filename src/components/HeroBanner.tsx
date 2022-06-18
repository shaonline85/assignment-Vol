import styled from "styled-components";

const Herobanner = styled.div.attrs((props: { imgUrl: string }) => props)`
  display: flex;
  height: 300px;
  color: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.imgUrl});
  background-position: 50% 85%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroBanner = () => {
  return <Herobanner imgUrl="images/hero.webp" />;
};

export default HeroBanner;
