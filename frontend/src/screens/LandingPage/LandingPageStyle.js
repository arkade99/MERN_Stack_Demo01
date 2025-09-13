import styled from "styled-components";

export const LandingPageStyle = styled.div`
  .title {
    font-size: 42px;
  }
  .subtitle {
    font-size: 25px;
    padding-top: 10px;
  }
  .intro-text {
    width: 100%;
    text-align: center;
  }
  .main {
    min-height: 93vh;
    display: flex;
    align-items: center;
    background-image: url("../../Images/background1.jpg");
    background-position: center;
    background-size: cover;
  }
  .buttonContainer {
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
  }

  .landingbutton {
    width: 200px;
    height: 55px;
  }

  @media only screen and (min-width: 992px) {
    .buttonContainer {
      padding: 0 200px;
    }
    .title {
      padding: 0 100px;
    }
  }

  @media only screen and (min-width: 1300px) {
    .buttonContainer {
      padding: 0 250px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .title {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 768px) {
    .landingbutton {
      width: 150px;
      height: 50px;
    }
  }
`;
