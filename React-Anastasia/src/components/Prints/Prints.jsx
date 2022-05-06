import React from 'react';
import { render } from 'react-dom';
import { photos } from '../constants/constants';
import { Box2, BoxTitle } from './PrintStyles';
import ParticleBackground from '../../ParticleBackground';
import FooterComponent from '../Footer/Footer';
import StickyFooter from 'react-sticky-footer';
import styled from 'styled-components';
import './PrintStyles.js'
import Gallery from "react-photo-gallery";
import useStyles from './styles';


const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;


  @media (max-width: 860px){
      display: flex;
      width: 100%;
      justify-content: center;
    }
`

const PrintContainer = styled.div`
  display: flex;
  border-radius: 10px;
  opacity: 1;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
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

const Img = styled.img`
    height: 80%;
`

const Prints = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <ParticleBackground />
            <div class="wrapper">
                <GridContainer>
                    <PrintContainer>
                        {/* {photos.map(({ id, title, image }) => (
                            <Box2 key={id}>
                                <BoxTitle style={{
                                    textAlign: "center",
                                    marginBottom: "10px"
                                }}>{title}</BoxTitle>
                                <Img src={image} />
                            </Box2>
                        ))} */}

                        <Gallery photos={photos} direction={"column"} />
                    </PrintContainer>
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

{
    photos.map(({ id, title }) => (
        <Box2 key={id}>
            <BoxTitle style={{
                textAlign: "center",
                marginBottom: "10px"
            }}>{title}</BoxTitle>
        </Box2>
    ))
}


export default Prints