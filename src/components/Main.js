import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import '../App.css';

const Repair = styled.div`
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    line-height: 30px;

    span {
        display: block;
       
        font-size: 24px;
    }
`
const DescText = styled.div`
    margin-top:54px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
`
const ReqButton = styled.button`
    margin-top: 32px;
    width: 247px;
    height: 67px;
    background-color: #ffa14b;
    border-radius: 30px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    border:  none;
`


class Main extends React.Component{
    render(){
        return(
            <Row>
                <Col lg={5}>
                    <Repair>Качественный ремонт
                        <span>
                            iphone за 35 минут и гарантия 1 год
                        </span>
                    </Repair>
                    <DescText>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </DescText>
                    <ReqButton>Отправить заявку!</ReqButton>
                </Col>
                <Col lg={6} lgOffset={1}>
                </Col>
            </Row>
        )
    }
}

export default Main