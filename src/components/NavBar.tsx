import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted borderless>
      <Container>
        <Link to='/'>
          <Menu.Item name="STAR WARS API" />
        </Link>
        <Link to='/people'>
          <Menu.Item name="People" />
        </Link>
        <Link to='/species'>
          <Menu.Item name="Species" />
        </Link>
      </Container>
    </Menu>
  );
}
