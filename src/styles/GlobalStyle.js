import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Title = styled.h1`
  font-size: 32px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #777;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #444;
`;

const Button = styled.button`
  background-color: #008CBA;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #006F8F;
  }
`;

// const breakpoints = {
//   mobile: '320px',
//   tablet: '768px',
//   desktop: '1200px',
// };

// const mediaQueries = Object.keys(breakpoints).reduce((acc, breakpoint) => {
//   acc[breakpoint] = `@media screen and (min-width: ${breakpoints[breakpoint]})`;
//   return acc;
// }, {});

// const ResponsiveTitle = styled(Title)`
//   ${mediaQueries.mobile} {
//     font-size: 24px;
//   }
  
//   ${mediaQueries.tablet} {
//     font-size: 28px;
//   }
  
//   ${mediaQueries.desktop} {
//     font-size: 32px;
//   }
// `;

export { GlobalStyle, Container, Title, Subtitle, Paragraph, Button };
