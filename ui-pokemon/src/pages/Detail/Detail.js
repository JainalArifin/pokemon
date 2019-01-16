import React, { Component } from 'react';
import axios from 'axios';


// ====> this is for layouting
import './style.css';
import { Container, Row, Col } from 'reactstrap';

// =====> this is api for show pokemon from config service
import api from '../../config/services';

// ===> route
import { Link } from 'react-router-dom';

class Detail extends Component {

    state = {
        sprites: [],
        species: {},
        abilities: [],
        game_indices: [],
        moves: []
    }

    componentDidMount() {
        this.getById()
    }

    getById = () => {
        let id = this.props.match.params.id
        // console.log(this.props.match, ' <------ this.props.match')
        axios.get(`https://cors-anywhere.herokuapp.com/${api.getAll}${id}/`)
            .then(({ data }) => {
                this.setState({
                    sprites: data.sprites,
                    species: data.species,
                    game_indices: data.game_indices,
                    moves: data.moves
                })
            })
            .catch((err) => console.error(err))
    }
    render() {
        const { species, sprites, game_indices, moves } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <div className="title-species">Species</div>
                            <div className="desc-species">{species.name}</div>
                            <img src={sprites.back_default} alt="back_default" className="img-pokemon" />
                            <img src={sprites.back_shiny} alt="back_shiny" className="img-pokemon" />
                            <img src={sprites.front_default} alt="front_default" className="img-pokemon" />
                            <img src={sprites.front_shiny} alt="front_shiny" className="img-pokemon" />
                        </div>
                    </Col>
                </Row>

                <div className="text-center filter">
                    Filter
                </div>
                <Row>
                    <Col md={6} className="text-center">
                        <div>
                            Game Indices
                        </div>
                        {game_indices.map((list, idx) => {
                            let arrSplit = list.version.url.split('/')
                            let getValue = arrSplit.slice(0, arrSplit.length - 1).pop()
                            return (
                                <div key={idx}>
                                    <Link to={`/game-indices/${getValue}`}>
                                        <div className="game-indices">
                                            {list.version.name}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </Col>

                    <Col md={6} className="text-center">
                        <div>
                            moves
                        </div>
                        {moves.map((list, idx) => {
                            let arrSplit = list.move.url.split('/')
                            let getValue = arrSplit.slice(0, arrSplit.length - 1).pop()
                            return (
                                <div key={idx}>
                                    <Link to={`/game-move/${getValue}`}>
                                        <div className="game-indices">
                                            {list.move.name}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;