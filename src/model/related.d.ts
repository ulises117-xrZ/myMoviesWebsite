import { Movie } from "./movie";

export interface Recomendation {
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}


