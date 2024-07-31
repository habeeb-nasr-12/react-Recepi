import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Spanish"}>
        <GiChopsticks />
        <h4>Spanish</h4>
      </SLink>
    </List>
  );
};
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.8);
  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    padding: 15px;
  }
  h4 {
    color: white;
    font-size: 0.65rem;
  }
  svg {
    color: white;
    font-size: 1.3rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
