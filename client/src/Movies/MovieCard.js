import React from 'react';

const MovieCard = props => {
  if(!props){
    return (
    <div>
      Loading movie information..
    </div>);
  };
  const { title, director, metascore, stars} = props;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars &&
        stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>


  );

  function BackButton({ children }) {
    let history = useHistory()
    return (
      <div>
        <h1>
          Avenger: </h1>
         <h1> {name} {nickname}</h1>
        <button type="button" onClick={() => history.goBack()}>
          Go Back
        </button>
      </div>
    );
  }
    )
  }
}

