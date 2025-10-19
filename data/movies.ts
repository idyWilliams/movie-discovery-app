export interface Movie {
  id: string
  title: string
  epilogue: string
  dateReleased: string
  category: string
  type: string
  actors: string[]
  trailer: string
  rating: number
  keywords: string[]
  kind: string
  poster: string
}

export const moviesData: Movie[] = [
  {
    id: "1",
    title: "Inception",
    epilogue:
      "A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    dateReleased: "2010-07-16",
    category: "Sci-Fi",
    type: "Thriller",
    actors: ["Leonardo DiCaprio", "Marion Cotillard", "Ellen Page"],
    trailer: "https://www.youtube.com/embed/YoHD_XwrzKc",
    rating: 8.8,
    keywords: ["dreams", "heist", "mind-bending"],
    kind: "PG-13",
    poster: "/inception-movie-poster.png",
  },
  {
    id: "2",
    title: "The Dark Knight",
    epilogue:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
    dateReleased: "2008-07-18",
    category: "Action",
    type: "Crime",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    rating: 9.0,
    keywords: ["batman", "joker", "gotham"],
    kind: "PG-13",
    poster: "/dark-knight-poster.png",
  },
  {
    id: "3",
    title: "Interstellar",
    epilogue: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    dateReleased: "2014-11-07",
    category: "Sci-Fi",
    type: "Adventure",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    trailer: "https://www.youtube.com/embed/zSID6PrCR5c",
    rating: 8.6,
    keywords: ["space", "time", "survival"],
    kind: "PG-13",
    poster: "/interstellar-movie-poster.jpg",
  },
  {
    id: "4",
    title: "Pulp Fiction",
    epilogue:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    dateReleased: "1994-10-14",
    category: "Crime",
    type: "Drama",
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    trailer: "https://www.youtube.com/embed/s7EdQ4FqJDE",
    rating: 8.9,
    keywords: ["crime", "dialogue", "nonlinear"],
    kind: "R",
    poster: "/pulp-fiction-poster.png",
  },
  {
    id: "5",
    title: "The Shawshank Redemption",
    epilogue:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    dateReleased: "1994-09-23",
    category: "Drama",
    type: "Crime",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    rating: 9.3,
    keywords: ["prison", "friendship", "redemption"],
    kind: "R",
    poster: "/shawshank-redemption-poster.png",
  },
  {
    id: "6",
    title: "Forrest Gump",
    epilogue: "The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man with an IQ of 75.",
    dateReleased: "1994-07-06",
    category: "Drama",
    type: "Comedy",
    actors: ["Tom Hanks", "Sally Field", "Gary Sinise"],
    trailer: "https://www.youtube.com/embed/bLvqoByUGDc",
    rating: 8.8,
    keywords: ["life", "journey", "love"],
    kind: "PG-13",
    poster: "/forrest-gump-poster.png",
  },
  {
    id: "7",
    title: "The Matrix",
    epilogue:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    dateReleased: "1999-03-31",
    category: "Sci-Fi",
    type: "Action",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    rating: 8.7,
    keywords: ["virtual reality", "action", "philosophy"],
    kind: "R",
    poster: "/matrix-movie-poster.png",
  },
  {
    id: "8",
    title: "Gladiator",
    epilogue:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    dateReleased: "2000-05-05",
    category: "Action",
    type: "Drama",
    actors: ["Russell Crowe", "Joaquin Phoenix", "Lucilla"],
    trailer: "https://www.youtube.com/embed/owK1qxDsel8",
    rating: 8.5,
    keywords: ["rome", "revenge", "epic"],
    kind: "R",
    poster: "/gladiator-movie-poster.jpg",
  },
]
