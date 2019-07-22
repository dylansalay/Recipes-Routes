import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

import Home from './pages/Home'
import recipes from './store/recipes'
import Recipe from './pages/Recipe'
import NotFound from './pages/NotFound'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import mac from './1.jpg';
import tofu from './2.jpg';
import pad from './3.jpg';

export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            recipes: recipes
        }
    }

    render() {
        const { recipes } = this.state

        return (
            <Router>
                <div>

                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="/">Home</Dropdown.Item>
                </DropdownButton>
                    <nav>

                            {recipes.map((recipe)=>


                                <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={recipe.image} />
                                  <Card.Body>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Button variant="primary" href={`/recipe/${recipe.id}`}>{recipe.name}</Button>
                                  </Card.Body>
                                </Card>


                                // In this dynamic link, we are mapping through the recipes array and constructing a link based on the recipe id.
                            )}
                            <div className="test"></div>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipe/:id" component={Recipe} />
                        // This is a Dynamic Route. The part of the path after the : are variable declarations. We can pass anything we like here and it will be passed to the recieving component as a prop.
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
