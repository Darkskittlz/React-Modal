import React, { useEffect } from 'react';
import useStyles from './styles';
import ParticleBackground from '../../ParticleBackground';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import './updates.css';
import FooterComponent from '../Footer/Footer';
import StickyFooter from 'react-sticky-footer';


const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;

  @media (max-width: 860px){
      display: flex;
      width: 100%;
      justify-content: center;
    }
`

const NewsContainer = styled.div`
  display: flex;
  border-radius: 10px;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  width: 650px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 999;

  h2 {
    color: white;
    font-size: 50px;
    text-align: center;
    @media (max-width: 860px){
      font-size: 34px;
    }
  }

  h3 {
    color: white;
    text-align: center;
    @media (max-width: 860px){
      font-size: 12px;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex; 
  width: 100%;
  justify-content: center;
`


const Updates = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ParticleBackground />
      <div class="wrapper">
        <GridContainer>
          <NewsContainer>
            <h2>News & Highlights</h2>
            <h3>
              Anastasia & Collin News & Highlights
            </h3>
            <br />
            <ButtonContainer>
              <Button
                aria-label="Visit Etsy"
                target="_blank"
                href="https://www.youtube.com/watch?v=EjIfL0rSndo"
                cursor="pointer"
                color="dark"
              >Etsy Shop?</Button>
            </ButtonContainer>
          </NewsContainer>
        </GridContainer>
        <div className="footer push">
          <StickyFooter
            bottomThreshold={50}
            normalStyles={{
              backgroundColor: "#999999",
              padding: "2rem",
              zIndex: "999"
            }}
            stickyStyles={{
              backgroundColor: "rgba(255,255,255,.8)",
              padding: "2rem"
            }}
          >
            <FooterComponent />
          </StickyFooter>
        </div>
      </div>
    </main>
  );
};

export default Updates;

