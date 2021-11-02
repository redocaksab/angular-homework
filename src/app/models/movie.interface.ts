export interface IMovie {
    page: string;
    results: any[];
    total_pages: number;
    total_results: number;
}
export interface IResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface IMovieInf {
    genres: {id: string, name: string}[];
    original_language: string;
    overview: string;
    status: string;
    budget: number;
    original_title: string;
}