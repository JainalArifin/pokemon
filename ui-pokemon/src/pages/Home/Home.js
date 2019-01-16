import React, { Component } from 'react';
import axios from 'axios';

// ====> this is for assets
import banner from '../../assets/images/pokemon-banner.jpg';

// ====> this is for layouting
import './style.css';
import {
    Container, Row, Col,
     Form, FormGroup, Input,
} from 'reactstrap';

// =====> this is api for show pokemon from config service
import api from '../../config/services';

// ===> router
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        pokemon: [],
        search: ''
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        axios.get(`${api.getAll}`)
            .then(({ data }) => {
                this.setState({ pokemon: data.results })
            })
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    render() {
        const { pokemon } = this.state

        let filterPokemon = pokemon.filter((list) => {
            return list.name.indexOf(this.state.search) !== -1;
        })

        return (
            <Container>
                <div className="text-center">
                    <img src={banner} className="banner-img" alt="pokemon" />
                    <Form>
                        <FormGroup>
                            <Input type="text" name="search" id="search" placeholder="search name pokemon..."
                                value={this.state.search}
                                onChange={this.handleChange}
                                className="input-search"
                            />
                        </FormGroup>
                    </Form>
                </div>
                <Row>
                    {filterPokemon.map((list, idx) => (
                        <Col md={2} key={idx}>
                            <Link to={`/detail/${idx + 1}`}>
                                <div className="list-item text-center">
                                    {list.name}
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Home;