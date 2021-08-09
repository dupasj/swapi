

const search_keys = [
    "birth_year",
    "eye_color",
    "gender",
    "hair_color",
    "name",
    "skin_color",
];

const allowed_keys = [
    "birth_year",
    "eye_color",
    "gender",
    "crew",
    "hair_color",
    "height",
    "homeworld",
    "mass",
    "name",
    "skin_color",
    "species",
    "starships",
    "vehicles",
    "url",
];

const buildPeopleSearch = (): URLSearchParams|undefined => {
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

export default buildPeopleSearch;