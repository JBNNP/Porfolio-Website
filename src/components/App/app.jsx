import React from 'react';
import Title from '../Title/Title';
import Navbar from '../Navbar/Navbar';
import Content from '../Contents/content';
import Circles from '../Circles/Circles';
import Footer from '../Footer/Footer';
import "../App/app.css"
//DITO IBIBIGAY LAHAT

function App() {
  return (
    <div>
      <div className="appWrapper">
        <Circles />
        <Navbar />
        <Title />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
