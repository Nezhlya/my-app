import React from 'react';

const RecipesCard = (props) => {
    
    let {name, description, url, image} = props;
 
   
  return (
    <div className="card">
      <div className="card-body">
                <image src={image} alt={description}/>

        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
         Link to instructions
        </a>
      </div>
    </div>
  );
};

export default RecipesCard;

