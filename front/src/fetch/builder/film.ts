const search_keys = [
    "director",
    "producer",
    "title",
    "opening_crawl",
];

const allowed_keys = [
    "characters",
    "director",
    "episode_id",
    "opening_crawl",
    "planets",
    "producer",
    "species",
    "starships",
    "title",
    "url",
    "vehicles",
];

const buildFilmSearch = (): URLSearchParams|undefined => {
    if (typeof window.location.search !== "string"){
        return undefined;
    }

    const input = new URLSearchParams(window.location.search);
    const output = new URLSearchParams();

    for(const value of input.getAll("query")){
        for(const key of search_keys){
            output.append(key,value);
        }
    }

    for(const key of allowed_keys){
        for(const value of input.getAll(key)){
            output.append(key,value);
        }
    }

    return output;
}

export default buildFilmSearch;