import profile from './assets/profile.jpg'
import down from './assets/down.png'

import React, { useRef } from 'react';
import linkedin from './assets/linkedin.png'
import git from './assets/github.png'
import twitter from './assets/twitter.png'
import cal from './assets/cal.png'
import clone from './assets/clone.jpg'
import watch from './assets/stopwatch.jpg'
import html from './assets/tml.jpg'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react.png'
import node from './assets/node.jpg'
import java from './assets/java.jpg'


function App() {
  const aboutSectionRef = useRef(null);
  const skills = useRef(null);
  const contact =useRef(null);
  const handleAboutClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
   
  };
  const handleSkillclick=()=>{
    skills.current.scrollIntoView({ behavior: 'smooth' })
  };
  const handleContactClick=()=>{
    contact.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className='container'>

<div className='nav'>
          <div className='name'>
            <h1 className='name-txt'>AJAY</h1>

          </div>
          <div className='details'>


            <p className='details-txt'>Home</p>
            <p className='details-txt'> About</p>
            <p className='details-txt' onClick={handleSkillclick}>Skills</p>
            <p className='details-txt' onClick={handleContactClick}>Contact</p>


           
          </div>
        </div>
      <div className='content'>
  
        <div className='wrap'>




          <div className='hi'>
            <p className='hi-txt'>Hi There, <br /> I'm Ajay Rawat</p>
            <p className='web'>I am a Web Developer</p>
            <div className='btn'>
              <button className='about-btn' onClick={handleAboutClick}>About Me</button>
              <img className='down' src={down} /></div>

            <div className='icons'>

              <div className='icon-div'> <img className='icon' src={linkedin} /></div>
              <div className='icon-div'>   <img className='icon' src={git} /></div>
              <div className='icon-div'><img className='icon' src={twitter} /></div>



            </div>
          </div>


          <div className='image'>
            <img className='profile' src={profile} />
          </div>
        </div>
      </div>

      <div className='about-wrap' ref={aboutSectionRef}>
        <div className='about'>
          <div className='about-me-wrap'><p className='about-me'>ABOUT ME</p></div>
          <p className='about-name'>AJAY RAWAT</p>
          <p className='about-me-txt'>I am a web developer. I have a Knowledge of the react,html,css and javascript. <br /> I have created many
            projects also like calculator,faq page,stopwatch,youtube clone etc. <br />

            I am in 1st year and pursuing my Btech from Dronacharya College Of Engeenering. </p>
          <div className='projects'>
            <img className='project' src={cal} alt="calculator" />
            <img className='project' src={clone} alt="youtube-clone" />

          </div>
          <div className='stopwatch'>
            <img className='project' src={watch} alt="stop-watch" /></div>
        </div>
      </div>

      <div className='skill-wrap' ref={skills}>
        <div className='skill-head'>
          <p className='skill-txt'>SKILLS</p></div>
        <div className='skill-img'>
          <div className='skill1'>
          <div>
            <img className='skills' src={html} alt="" />
          </div>
          <div>
            <img className='skills' src={css} alt="" />
          </div>
          <div>
            <img className='skills' src={js} alt="" />
          </div>
          </div>
          <div className='skill1'>
          <div>
            <img className='skills' src={react} alt="" />
          </div>
          <div>
            <img className='skills' src={node} alt="" />
          </div>
          <div>
            <img className='skills' src={java} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className='contact-wrap' ref={contact}>
        <div className='contact-wrap2'>
          <div className='contact-txt'>
            <p className='contact-me'>CONTACT ME</p>
          </div>
          <div className='inputs1'>
            <form className='inputs'>
              <input className='input-txt' type="text" placeholder='Name' />
              <input className='input-txt' type="email" placeholder='Email' />
              <input className='input-txt' type="text" placeholder='Subject' />
              <input className='your-message' type="text" placeholder='Your message' />
              <button className='send'>Send Message</button>
            </form>
          </div>
        </div>
      </div>




    </div>
  )
}

export default App
