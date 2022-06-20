import { useRouter } from "next/router";
import Head from "next/head";

import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Heading>Learn about {id}</Heading>
      </Content>
    </>
  );
};

export default Learn;
