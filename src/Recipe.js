import React from 'react';

const Recipe =props=> {
        const {recipes}=props;
        return(
            <div class="row">
                {
                    recipes.map(recipe  =>(
                      <div class="col-md-3">
                        <div class="card">
                        <img src={recipe.recipe.image} className="'img-fluid" />
                        <div class="card-body">
                        <h4>{recipe.recipe.label}</h4>
                        </div>
                        <ul class="list-group list-group-flush">

                            <li className="list-group-item">{recipe.recipe.ingredientLines}</li>
                        </ul>
                        <li className="list-group-item">Calories: {recipe.recipe.calories}</li>

                        </div>
                      </div>  
                    ))
                }
            </div>
        )
    
}

export default Recipe;