import styled, { css } from "styled-components"

import JeffPhoto from "../../images/Jeff-09-2020-web.png"

export const HeaderContainer = styled.div`
  height: 180vh;
  width: 100vw;
  background-color: #19292d;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 2s;

  ${({ scroll, windowHeight }) => scroll > windowHeight &&
      css`
        transform: translateY(-40%);
      `
    }

  h1 {
    display: inline-block;
    position: -webkit-sticky;
    position: sticky;
    top: 35%;

    z-index: 10;
    font-family: "Martel";
    font-size: 6rem;
    font-weight: 200;
    color: #9899a0;

    opacity: 0.3;
    transition: opacity 4s, transform 2s, font-size 2s;

    ${({ scroll }) => scroll && (scroll < 100 ?
      css`
        opacity: 1;
      ` :
      css`
        opacity: 1;
        font-size: 3rem;
        transform: translate(50%, -100%);
      `
      )
    }
  }

  h2 {
    display: inline-block;
    position: -webkit-sticky;
    position: sticky;
    top: 49%;

    z-index: 10;
    font-family: "Roboto";
    font-size: 2rem;
    font-weight: 200;
    text-align: center;
    color: #9899a0;

    opacity: 0.3;
    transition: opacity 4s, transform 2s, font-size 2s;

    ${({ scroll }) => scroll && (scroll < 100 ?
      css`
        opacity: 1;
      ` :
      css`
        opacity: 1;
        font-size: 1rem;
        color: #fff;
        transform: translate(100%, -500%);
      `
      )
    }
  }

  p {
    display: inline-block;
    position: -webkit-sticky;
    position: sticky;
    top: 40%;
    left: 48.5%;
    max-width: 340px;

    z-index: 10;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
    color: #fff;

    opacity: 0;
    transition: opacity 2s;

    ${({ scroll }) => scroll > 100 &&
      css`
        opacity: 1;
      `
    }
  }

  div {
    display: inline-block;
    position: -webkit-sticky;
    position: sticky;
    top: 33%;

    z-index: 1;
    background: url(${JeffPhoto}) no-repeat center;
    background-size: cover;
    background-position: center;

    height: 20vh;
    width: 25vw;
    transform: translate(-450%, -20%);

    opacity: 0;
    transition: opacity 2s, transform 1.5s, height 2s, width 2s;

    ${({ scroll }) => scroll > 100 &&
      css`
        opacity: 1;
        height: 45vh;
        width: 50vw;
        transform: translate(-70%, -20%);
      `
    }
  }
`
