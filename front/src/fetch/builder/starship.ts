

const search_keys = [
    "name",
    "manufacturer",
    "model",
];

const allowed_keys = [
    "MGLT",
    "cargo_capacity",
    "consumables",
    "cost_in_credits",
    "url",
    "starship_class",
    "pilots",
    "films",
    "passengers",
    "name",
    "model",
    "max_atmosphering_speed",
    "manufacturer",
    "length",
    "hyperdrive_rating",
    "crew",
];

const buildStarshipSearch = (): URLSearchParams|undefined => {
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

export default buildStarshipSearch;