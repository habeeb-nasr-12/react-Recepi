import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetail(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>
      <Info>
        <BtnContainer>
          <Button
            className={activeTab === "Instructions" ? "active" : " "}
            onClick={() => setActiveTab("Instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "Ingredients" ? "active" : " "}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </Button>
        </BtnContainer>

        {activeTab === "Instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: detail.summary }}
              style={{ fontSize: "0.8rem", lineHeight: "1.5rem" }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: detail.instructions }}
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5rem",
                borderTop: "1px solid black",
                paddingTop: "1rem",
              }}
            ></h3>
          </div>
        )}
        {activeTab === "Ingredients" && (
          <div>
            <ul>
              {detail?.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  img {
    width: 400px;
  }

  h2 {
    font-size: 1.2rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items:center;
    img {
      width: 300px;
      margin-bottom: 2rem;
    }
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
    @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 1rem 2rem;


  }
`;
const BtnContainer = styled.div`
  display: flex;
`;

const Info = styled.div`
  margin-left: 10rem;
  @media (max-width: 768px) {
    margin-left: 0;
    
  }
 
  
`;
export default Recipe;
