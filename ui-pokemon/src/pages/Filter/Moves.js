import React, { Component } from 'react';
import axios from 'axios';

// ====> this is for styling/ layouting
import './style.css';
import { Container, Row, Table } from 'reactstrap';

// ===> this is from rest api
import api from '../../config/services'

class GameIndices extends Component {
    state = {
        gameMove: []
    }

    componentDidMount = () => {
        this.getData()

    }
    getData = () => {
        let id = this.props.match.params.id
        axios.get(`https://cors-anywhere.herokuapp.com/${api.getMove}/${id}/`)
            .then(({ data }) => {
                this.setState({ gameMove: data })
            })
    }
    render() {
        const { gameMove } = this.state
        return (
            <Container>
                <div className="text-center text-indices">
                    Moves
                </div>
                <Row>
                    <Table>
                        <tbody>
                            <tr>
                                <td>accuracy</td>
                                <td>{gameMove.accuracy}</td>
                            </tr>
                            <tr>
                                <td>contest_type</td>
                                {gameMove.contest_type !== undefined && (
                                    <td>{gameMove.contest_type.name}</td>
                                )}
                            </tr>
                            <tr>
                                <td>damage_class</td>
                                {gameMove.damage_class !== undefined && (
                                    <td>{gameMove.damage_class.name}</td>
                                )}
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default GameIndices;