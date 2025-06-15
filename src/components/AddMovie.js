import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const imageRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
      image: imageRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    
    <form className={classes.card} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Year</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Image URL</label>
        <input type='text' id='image' ref={imageRef} />
      </div>
      <button>Add Movie</button>
    </form>
    
  );
}

export default AddMovie;
