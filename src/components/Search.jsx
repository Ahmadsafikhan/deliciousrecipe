import styled from "styled-components";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <div>
      <FormStyle>
        <form onSubmit={submitHandler}>
          <div>
            <FaSearch />
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              value={input}
              placeholder="Search..."
            />
          </div>
        </form>
      </FormStyle>
    </div>
  );
}

const FormStyle = styled.div`
  margin: 0rem 2rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    outline: none;
    padding: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    color: white;
    font-size: 1.2rem;
    width: 100%;
  }

  svg {
    color: white;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) {
    margin: 0rem 8rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0rem 12rem;
  }
`;

export default Search;
