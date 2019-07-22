import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import recipes from '../store/recipes'
// In this component we are using a single route from App.js to display every recipe
export default class Recipe extends Component {
    constructor(props){
        super(props)
        const{ match } = props

        this.state={
            recipeId: match.params.id
        }
    }

    componentDidUpdate(prevProps){
        const prevMatch = prevProps.match
        const{ match } = this.props
        if(match.params.id != prevMatch.params.id){
            this.setState({recipeId: match.params.id})
        }
    }
    // Determines if the previous props(id) matches the current props(id). If not, the componentDidUpdate re-renders the page to match current props. The if statement determines if there is an actual handle change, otherwise we'd end up in an endless loop. Finally, we assign the id of our object to state.

    render() {
        const{ recipeId } = this.state
        const recipe = recipes.find((r)=> r.id == recipeId)
        // find will locate the first element(r) of the array that satisfies that r's id is equal to recipeId(state)

        return(
            <div>
                    {recipe &&
                        <div>
                            <h1>{recipe.name}</h1>
                            <p>{recipe.instructions}</p>
                        </div>
                    }
            </div>
        )
    }
}
