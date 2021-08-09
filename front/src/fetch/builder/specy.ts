/*
 average_height:   string;
    average_lifespan: string;
    classification:   string;
    created:          Date;
    designation:      string;
    edited:           Date;
    eye_colors:       string;
    hair_colors:      string;
    homeworld:        string;
    language:         string;
    name:             string;
    people:           string[];
    films:            string[];
    skin_colors:      string;
    url:              string;
 */

const search_keys = [
    "classification",
    "designation",
    "language",
    "skin_colors",
    "name",
];

const allowed_keys = [
    "url",
    "skin_colors",
    "films",
    "name",
    "language",
    "hair_colors",
    "eye_colors",
    "average_lifespan",
    "designation",
    "classification",
    "average_height",
];


const buildSpecySearch = (): URLSearchParams|undefined => {
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

export default buildSpecySearch;