const movies = [
  { imdbID: "tt1", Title: "Inception", Year: "2010", rating: 8.8 },
  { imdbID: "tt2", Title: "Interstellar", Year: "2014", rating: 8.7 },
  { imdbID: "tt3", Title: "Tenet", Year: "2020", rating: 7.3 },
];


export default function MovieWatch() {

    return (
            <div>
                {movies.map((movie, i) => (
                    <h2 key={i}>{movie}</h2>
                ))}
            </div>
        
    )
}