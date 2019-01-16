import React, { Component } from 'react';
import axios from 'axios';

// ====> this is for styling/ layouting
import './style.css';
import {Container, Row, Col } from 'reactstrap';

// ===> this is from rest api
import api from '../../config/services'

class GameIndices extends Component {
    state = {
        gameIdices: []
    }

    componentDidMount = () => {
        this.getData()

    }
    getData=()=> {
        let id = this.props.match.params.id
        axios.get(`https://cors-anywhere.herokuapp.com/${api.getGameIndices}/${id}/`)
        .then(({ data })=>{
            this.setState({gameIdices: data})
        })
    }
    render() {
        const { gameIdices } = this.state
        return (
            <Container>
                <div className="text-center text-indices">
                    Game Indices Language
                </div>
                <Row>
                {gameIdices.names !== undefined &&(
                    gameIdices.names.map((list, idx)=>{
                        return (
                                <Col md={4} key={idx}>
                                    <div className="language">
                                    {list.language.name}
                                    </div>
                                </Col>
                        )
                    })
                )}
                </Row>
            </Container>
        );
    }
}

export default GameIndices;