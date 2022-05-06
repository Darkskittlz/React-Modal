import { Facebook, Instagram, MailOutline, Room } from '@mui/icons-material';
import styled from 'styled-components';
import React from 'react';
import { mobile } from '../responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { LinkTwoTone, YouTube } from '@material-ui/icons';


const Left = styled.div`
    flex: 1;  
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    z-index: 999;
    color: white;

    @media (max-width: 860px){
      width: 100%;
      justify-content: center;
    }
  `;

const SocialContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  ${mobile({ justifyContent: 'center' })}
`;

const LogoContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 10px;

  h1 {
    text-align: center;
    color: black;
  }
  
  ${mobile({ justifyContent: 'center' })}
`



const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    //This is saying take my props, look inside (props.color) and find color. 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-bottom: 5px;
    filter: invert(1);
    display: none;

    @media (max-width: 860px){
      display: flex;
    }
`;

const Right = styled.div`
    flex: 1;   
    padding: 0px;
    z-index: 999;
    color: white;
    /* ${mobile({ backgroundColor: '#ebe8e8' })} */

    @media (max-width: 860px){
      display: none;
    }
`;

const Center = styled.div`
    flex: 0.3;   
    padding: 40px;
    z-index: 999;
    color: white;
    margin-top: -40px;
    ${mobile({ display: 'none' })}

    @media (max-width: 860px){
      display: none;
    }
`;

const Title = styled.h3`
    margin-bottom: 10px;
    display: flex;
    ${mobile({ justifyContent: 'center', fontWeight: '600', fontSize: '25px', textDecoration: 'underline' })}
`;

const List = styled.ul`   
    margin: 0;
    z-index: 999;
    color: white;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    flex-direction: column;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${mobile({ justifyContent: 'center', fontSize: '20px' })}
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  padding-top: 50px;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
`





const FooterComponent = () => (
  <FooterContainer>
    <Left>
      <LogoContainer>
        <h1>Jewelry Biz </h1>
      </LogoContainer>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <Facebook onClick={() => window.open('https://www.facebook.com/ItsAidanPaul', '_blank')} />
        </SocialIcon>
        <SocialIcon color="E4405F" >
          <Instagram onClick={() => window.open('https://www.instagram.com/aidanpaulmusic/', '_blank')} />
        </SocialIcon>
        <SocialIcon color="55ACEE" >
          <YouTube onClick={() => window.open('https://www.youtube.com/channel/UCNhe2SJj5CVBkdtKWSj8HEw?view_as=subscriber', '_blank')} />
        </SocialIcon>
        <SocialIcon color="000000">
          <LinkTwoTone onClick={() => window.open('https://linktr.ee/APMedia', '_blank')} />
        </SocialIcon>
      </SocialContainer>
    </Left>
    <Center>
      <Title>Links</Title>
      <List>
        <Button
          style={{ marginBottom: "5px" }}
          aria-label="Headshot"
          target="_blank"
          href="https://www.aidanpaulmusic.com/_files/ugd/e80a20_8e1c035cb7df43339fe0a1eda94ee802.pdf"
          cursor="pointer"
          color="dark"
        >Headshot</Button>
        <Button
          aria-label="Resume"
          target="_blank"
          href="https://www.aidanpaulmusic.com/_files/ugd/e80a20_7b2098ce624545b0a4038a43404f40e1.pdf"
          cursor="pointer"
          color="dark"
        >Resume</Button>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem>
        <Room style={{ marginRight: '10px' }} />United States
      </ContactItem>
      <ContactItem>
        <MailOutline style={{ marginRight: '10px' }} />_________@gmail.com
      </ContactItem>
    </Right>
  </FooterContainer>
);

export default FooterComponent;
