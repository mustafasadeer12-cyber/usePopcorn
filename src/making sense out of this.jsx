  function handleAddWacthed(movie) {
    setWatched((watched) => [...watched, movie])
  }

  <MovieDetails 
          
          onAddWatched={handleAddWacthed}
          /> 



function handleAdd() {
      const newWatchedMovie = { 
        imdbID: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
        userRating,
      }
      onAddWatched(newWatchedMovie)
      onCloseMovie()
    }




    { userRating > 0 && ( <button 
        className="btn-add"
        onClick={handleAdd}> 
          + Add to list
          </button>
        )}
      </div> 