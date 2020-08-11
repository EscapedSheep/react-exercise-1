import React from 'react';
import avatar from '../assets/avatar.jpg';
import './UpperSection.css';

const ProfileImg = () => <img src={avatar} alt="Profile"></img>;

const UpperSection = () => (
  <section className="upperSection">
    <ProfileImg></ProfileImg>
    <h1 className="upperContent">HELLO,</h1>
    <h2 className="upperContent">
      MY NAME IS KAMAIL 24YO AND THIS IS MY RESUME/CV
    </h2>
  </section>
);

export default UpperSection;
