import React, { Component } from 'react';
import Headrer from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import './App.css';

const url = process.env.PUBLIC_URL + '/img/bg.png';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 49px;
    background-color: #242424;
    opacity: 0.8;
`
const MenuWrapper = styled.div`
    width: 100%;
    height: 89px;
    padding-top: 20px;
`
const MainWrapper = styled.main`
    width: 100%;
    height: 600px;
    padding-top: 130px;
    background:url(${url}) no-repeat;
    background-size: cover;
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
                <MenuWrapper>
                    <Grid>
                        <Menu />
                    </Grid>
                </MenuWrapper>      
                <MainWrapper>
                    <Grid> 
                        <Main />
                    </Grid>
                </MainWrapper>
                
            </div>
        );
    }
}


export default App;
