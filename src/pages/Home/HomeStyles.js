import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(500)};
  height: ${px2vw(500)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;
`;