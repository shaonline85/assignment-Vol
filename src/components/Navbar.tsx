import styled from "styled-components";
import Link from "next/link";
import { Logo, Text } from "vcc-ui";

const Nav = styled.nav`
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  text-decoration: none;
  font-weight: bold;
`;

const NavItem = styled.div`
  display: flex;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Link href="/" passHref>
          <StyledLink>
            <Logo type="spreadmark" height={16} />
          </StyledLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/" passHref>
          <StyledLink>
            <Text>Menu</Text>
          </StyledLink>
        </Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
