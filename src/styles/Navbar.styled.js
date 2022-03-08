import styled from "styled-components";

/* :root {
  --primary: #44ffaa;
  --light: #f6f6f6;
  --dark: #010201;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: poppins;
} */
export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: var(--dark);
  padding: 1rem 4rem;
  border-bottom: 1px solid var(--primary);
  .container {
    background: #ffffaa;
    max-width: 90rem;
    margin-inline: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav__logo {
      text-transform: capitalize;
      /* color: var(--primary); */
      color: ${({ theme }) => theme.colors.logo_clr};
      cursor: pointer;
    }
    .menu {
      display: flex;

      a {
        color: var(--light);
        text-align: left;
        font-size: 1.2rem;
        color: var(--light);
        text-decoration: none;
      }
      a {
        border: none;
        background: none;
        padding: 0.25rem 1rem;
        border-radius: 1.5rem;
        transition: all 250ms ease-in;
      }
      a + a {
        margin-left: 0.25rem;
      }
      :is(a):hover,
      :focus {
        color: var(--dark);
        background: var(--primary);
      }
    }
  }
  .hamburger {
    display: none;
    width: 1.5rem;
    aspect-ratio: 1;
    background: none;
    position: relative;
    z-index: 1;

    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .hamburger span {
    display: block;
    width: 2rem;
    height: 0.3rem;
    background: var(--light);
    margin-bottom: 0.25rem;
    position: relative;
    z-index: 1;
    border-radius: 0.25rem;

    transform-origin: 0 0;
    transition: 250ms ease-in;
  }
  .menu a:nth-child(1) {
    background-color: var(--primary);
  }
  .hamburger:hover span:nth-child(3) {
    transform: translateX(0.7rem);
    background: var(--primary);
  }
  .hamburger:hover span:nth-child(1) {
    transform: translateX(0.7rem);
    background: var(--primary);
  }
  .hamburger.is-active span:nth-child(1) {
    transform: translate(0px, -2px) rotate(45deg);
  }
  .hamburger.is-active span:nth-child(3) {
    transform: translate(-3px, 3px) rotate(-45deg);
  }
  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
    transform: translateX(15px);
  }
  /* ! Media query ! */
  /* * =========== * */
  @media (max-width: 44rem) {
    .hamburger {
      display: block;
    }
    .menu {
      /* display: none; */
      background: none;
      flex-direction: column;
      background: rgba(25, 224, 250, 0.4);
      backdrop-filter: blur(1rem);
      position: fixed;
      inset: 0 0 0% 30%;
      border-bottom-left-radius: 25rem;
      padding: 10rem 3rem;
      border-left: 2px solid rgba(253, 253, 253, 0.5);
      transform: translateX(100%);
      transition: transform 300ms ease-in;
    }
    @supports (backdrop-filter: blur(1rem)) {
      .menu {
        background: rgba(44, 43, 43, 0.3);
        backdrop-filter: blur(1rem);
      }
    }
    .menu a {
      color: var(--light);
    }
    .menu[data-visible="true"] {
      transform: translateX(0%);
    }
    .menu--active {
      display: flex;
    }
    .links + .links {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;
