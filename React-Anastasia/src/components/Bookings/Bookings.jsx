import React, { useState, useRef } from 'react';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import useStyles from './styles';
import FooterComponent from '../Footer/Footer';
import { Button } from 'reactstrap';
import emailjs from '@emailjs/browser';
import './bookings.css';
// import pdf from '../../assets/aidanResume.pdf';
import Jewelry from '../../assets/sample2.jpg';
import Jewelry2 from '../../assets/sample3.jpg';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999;
  border: 2px solid black;
  width: 97%;
  margin-left: -10px;

  @media (max-width: 860px){
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      margin-left: -10px;
      width: 96%;
    }
`

const Col = styled.div`
  display: flex;
  z-index: 999;

  @media (max-width: 860px){
    height: 50%;
  }

  img {
    width: 600px;
    border-radius: 10px;
    opacity: 1;
    backdrop-filter: blur(10px);
    @media (max-width: 860px){
      width: 100%;
      display: flex;
      justify-content: center; 
    }
  }

`

const Col2 = styled.div`
  display: flex;
  border-radius: 10px;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 999;

  h1 {
    color: white;
    text-align: center;
    font-size: 100px;
    font-weight: 600;
    margin-bottom: 70px;
    font-family: 'Dancing Script', cursive;
  }

  h2 {
    color: white;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-align: center;
    font-family: 'Playfair Display', cursive;
  }

  @media (max-width: 900px){
    height: 500px;
    width: 100%;
    margin-left: 0px;


    h1 {
      margin-top: 100px;
      margin-bottom: 25px;
      font-size: 50px;
    }

    h2 {
      font-size: 15px;
    }
  }
`




const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  margin-top: 80px; 
  justify-content: center;
  grid-gap: 10px;
`

const ContactForm = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;


    h2 {
        color: white;
        text-align: center;
        font-size: 80px;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    span {
        color: white;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 900px){
      width: 90%;

      h2 {
        font-size: 70px;
      }
    }

`

export function Contact() {
  const [message, setMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true)

    emailjs.sendForm(
      'service_k3377z7',
      'template_cbbxd9b',
      form.current,
      'user_5ir65fREMKq7eQSSWuTYq',
    )
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (err) => {
        console.log('FAILED...', err.text);
      });
    e.target.reset();
  }
  return (
    <ContactForm>
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="NAME" />
        <input type="email" name="user_email" placeholder="EMAIL" />
        <textarea name="message" placeholder="MESSAGE" />
        <input id="send" type="submit" value="Send" />
        {message && <span>Thanks, I'll reply ASAP :)</span>}
      </form>
    </ContactForm>
  )
};


const Bookings = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ParticleBackground />
      <div class="wrapper">
        <Row>
          <Col2>
            <h1>For Custom Pieces: </h1>
            <h2>________@gmail.com</h2>
            <h2>***.***.****</h2>
            {/* <ButtonContainer>
              <Button
                aria-label="Headshot"
                target="_blank"
                href={headshot}
                cursor="pointer"
                color="dark"
                margin-right="20px"
              >Earrings</Button>

              <Button
                aria-label="Resume"
                target="_blank"
                href={pdf}
                cursor="pointer"
                color="dark"
              >Bracelets</Button>
            </ButtonContainer> */}
          </Col2>
          <Col>
            <img src={Jewelry} alt="img" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={Jewelry2} alt="img" />
          </Col>
          <Col2 id="contact">
            <Contact />
          </Col2>
        </Row>
      </div>
      <div class="push"></div>
      <div class="footer"><FooterComponent /></div>
    </main>
  );
};

export default Bookings;
