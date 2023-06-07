export type data = {
    id: number,
    name: string,
    birth_year: string, 
    eye_color: string,
    hair_coor: string,
    height: string,
    created: string,
    films_count: number, 
    homeworld: {
        id: number,
        name: string
    }
}

export type srchResponse = {
    current_page: number, 
    data: data []
}