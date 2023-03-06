export interface Movie{
    title: string,
    poster_path: string,
    release_date: string,
    backdrop_path: string
    overview: string,
    vote_average: number ,
    id: number
}

export interface MovieDesc {
    data: MovieData;
}

export interface MovieData {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                MovieGenre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface MovieGenre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}


