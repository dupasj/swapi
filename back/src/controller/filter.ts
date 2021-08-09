import Film from "../type/film";
import * as Boom from "@hapi/boom";
import Vehicle from "../type/vehicles";
import People from "../type/people";
import Specy from "../type/specy";
import Starship from "../type/starship";
import Planet from "../type/planet";

type FilterScore = {
    minor: number,
    major: number
};
const filterScore = (item: Film|Vehicle|People|Planet|Specy|Starship,filter: {[key: string]: string[]}): FilterScore => {
    const point: FilterScore = {
        minor: 0,
        major: 0
    };

    for(const key in item){
        if (!(key in filter)){
            continue;
        }

        for(const search of filter[key]){
            const value = Array.isArray(item[key]) ? item[key] : [item[key]];

            for(const _item of value){
                if (_item === search){
                    point.major++;
                    continue;
                }

                if (_item.toLowerCase().includes(search.toLowerCase())){
                    point.minor += search.length * _item.toLowerCase().split(search.toLowerCase()).length;
                }
            }
        }
    }

    return point;
};

const filter = (data: (Film|Vehicle|People|Planet|Specy|Starship)[],filter: {[key: string]: string}) => {
    if (data.length <= 0){
        return [];
    }

    if (Object.keys(filter).length <= 0){
        return data;
    }

    const keys = Object.keys(data[0]);
    const unavailable = new Set<string>();

    const splited_filter: {[key: string]: string[]} = {};
    for(const key in filter){
        splited_filter[key] = filter[key].split(" ");

        if (!keys.includes(key)){
            unavailable.add(key);
        }
    }

    if (unavailable.size > 0){
        if (unavailable.size === 1){
            throw Boom.expectationFailed(`The following filter key \`${Array.from(unavailable)[0]}\` are unavailable for this request.`);
        }

        const list = Array.from(unavailable).map(i => `\`${i}\``).join(",");
        throw Boom.expectationFailed(`The following filter keys ${list} are unavailable for this request.`);
    }

    return data.filter((item) => {
        const point = filterScore(item, splited_filter);
        return point.minor + point.major > 0
    }).sort((a,b) => {
        const point_a = filterScore(a, splited_filter);
        const point_b = filterScore(b, splited_filter);

        if (point_a.major === point_b.major){
            return Math.sin(point_a.minor - point_b.minor);
        }

        return Math.sin(point_a.major - point_b.major);
    });
};

export default filter;