export type Movie = {
  director: string;
  id : string;
  original_title: string;
  title: string;
  release_date: string;
  producer: string;
  rt_score: string;
}

export type MovieMessages = {
  id: string;
  description: string;
  
}

export type SingleMessageApiResponse = {
  movie: Movie;
  message: MovieMessages;
}