import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//=====> this is pages
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import GameIndices from './pages/Filter/GameIndices';
import Moves from './pages/Filter/Moves';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact={true}  component={Home} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/game-indices/:id" component={GameIndices} />
                <Route path="/game-move/:id" component={Moves} />
                <Route render={()=>(<div><b>Halaman tidak di temukan</b></div>)} />
            </Switch>
        );
    }
}

export default Routes;