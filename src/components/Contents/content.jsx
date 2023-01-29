import react from 'react';
import '../Contents/content.css';
import Icons from "../Icons/icons"

function Content() {
  return (
    <div className="contentWrapper">
      <h3 className="paragraphTitle">About me</h3>
      <div className="paragraphContent">
        <p>
          I’m John Brian Capate, 23 years old. Fresh graduate with Bachelor’s
          Degree in Information Technology.
        </p>
        <p>
          I was 10 years old when I was inspired by my Sister and my
          Brother-in-law to became interested in programming. There is an online
          game that I playing at that age.
        </p>
        <p>
          The game was made by 4 Filipino. Only one of them are a programmer. I
          loved the game and made me inspired to create my own game someday.
        </p>
        <p>
          But as I got older I realized that I no longer wanted to create a game
          anymore but those things lead me to where I am and to where I want to
          be.
        </p>
      </div>
      <h3 className="paragraphTitle">Skills</h3>
      <div className="paragraphContent">
        <p>
          When I was a senior high-school student my programming language was
          Java, HTML, CSS, and JavaScript.
        </p>
        <p>
          After learning C#, Java, and python at school. JavaScript is the
          language that I liked the most.
        </p>
        <p>
          I’m interested in other languages and frameworks out there like
          typescript, Laravel and many more.
        </p>
        <p>
          I’m willing to learn more and enhance my skills to become a better
          programmer here is some of them and the tools that currently use:
        </p>
        <Icons/>
      </div>
      
    </div>
  );
}

export default Content;
