import React, { Component } from 'react';
import Headrer from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import './App.css';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 49px;
    background-color: #242424;
    opacity: 0.8;
`

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderWrapper>
                    <Grid>
                        <Headrer />
                    </Grid>
                </HeaderWrapper>       
                <Menu />
                <Main />
            </div>
        );
    }
}


export default App;
