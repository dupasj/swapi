



const search_keys = [
    "terrain",
    "climate",
    "name",
];

const allowed_keys = [
    "url",
    "terrain",
    "surface_water",
    "rotation_period",
    "residents",
    "name",
    "gravity",
    "diameter",
    "climate",
];

const buildPlanetSearch = (): URLSearchParams|undefined => {
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

export default buildPlanetSearch;