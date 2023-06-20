import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";

function Recepie() {
  const [detail, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instruction");
  let params = useParams();

  const fetchDetails = useCallback(async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KET}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  }, [params.name]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>

      <Info>
        <div className="bttn">
          <Button
            className={activeTab === "instruction" ? "active" : ""}
            onClick={() => setActiveTab("instruction")}
          >
            Instruction
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === "instruction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {detail.extendedIngredients?.map((ingred) => {
              return <li key={ingred.id}>{ingred.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    max-width: 100%;
  }

  li {
    line-height: 2.5rem;
    font-size: 1.2rem;
  }

  ul {
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 6rem;
    margin-bottom: 3rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    img {
      max-width: 90%;
    }

    li {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
`;

const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
    font-size: 0.9rem;
  }
`;

const Info = styled.div`
  margin-top: 2rem;

  .bttn {
    display: flex;
  }
`;

export default Recepie;
