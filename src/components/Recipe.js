import React from 'react';

function Recipe({ title, image, calories, ingredients }) {
  return (
    <div className='recipe'>
      <h1>{title}</h1>
      <img src={image} alt='Food' />
      <h5>{Math.floor(calories)} Calories</h5>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default Recipe;
