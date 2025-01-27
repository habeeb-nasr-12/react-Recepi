import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FromStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </FromStyle>
  );
};
const FromStyle = styled.form`
  margin: 0rem 8rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 6rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    /* width: 100%; */
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media screen and (max-width: 768px) {
    margin: 0rem 1rem;
    div {
      width: 100%;
    }
      input{
      width: 100%;
      }
  }
`;
export default Search;
