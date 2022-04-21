import React, {useState} from "react";
import "./App.css";
import { Body } from "./Components/Body";
import companies from "./Components/companies.json"; //{companies[0].company}
// {companies.map(  (compani, index) => (<li key={index}> {companies[index].company} </li>   )     )}
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// Themes $ npm install styled-components
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./themes.js";

// Button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

const StyledApp = styled.div``

function App(){

  const [theme, setTheme] = useState("light"); // Cambiar el color "default"
  const themeToggler = () =>{
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
        <Header title="The largest companies in the world" >asd </Header>
        <GlobalStyles/>

        <StyledApp>  
          <button className="lamparita2"  onClick = { () => themeToggler()}><FontAwesomeIcon className="lamparita"  icon={faLightbulb} /></button>  

          </StyledApp>

        <div className="App-header">
          {companies.map((companyMap, index) => (
            <Body
              key={index}
              url_image={companies[index].url_image}
              company={companies[index].company}
              marketCap={companies[index].marketCap}
              ticker={companies[index].ticker}
              country={companies[index].country}
            />
          ))}
        </div>

        <Footer />
      </ThemeProvider>
    );
  }

export default App;