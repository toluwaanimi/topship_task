import {v4} from 'uuid'
import {IMovies} from '../interfaces';
import {Helper} from '../utilities/helper.utilites';

export class SwapiProvider {
    public static async getStarWars(): Promise<IMovies[]> {
        const response = (await Helper.sendRequest({
            url: 'https://swapi.dev/api/films/',
            method: 'get'
        })).results
        const movies: IMovies[] = []
        let i = 0
        for (const value of response) {
            movies.push({
                id: i += 1,
                title: value.title,
                openingCrawl: value.opening_crawl,
                releaseDate: value.release_date
            })
        }
        return movies
    }


    public static async getCharacters(page: number) {
        return (await Helper.sendRequest({
            url: 'http://swapi.dev/api/people/?page=' + page,
            method: 'get'
        })).results
    }


}
