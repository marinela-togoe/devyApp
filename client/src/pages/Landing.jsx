import React from 'react';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby blue bottle tote bag street art, flexitarian XOXO hell of
            taiyaki YOLO raclette leggings yr mumblecore 3 wolf moon narwhal
            hella. Bespoke mlkshk freegan tumblr bitters, tbh wayfarers.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn register-link'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};




export default Landing;
