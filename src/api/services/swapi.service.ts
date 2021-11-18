import {getRepository} from 'typeorm';
import {Comments} from '../../models/comments.entity';
import {SwapiProvider} from '../../shared/provider/swapi.provider';
import {ICharacterSearch} from "../../shared/interfaces";
import {Helper} from "../../shared/utilities/helper.utilites";

export class SwapiService {
    public static async getMovies() {
        const response = await SwapiProvider.getStarWars();
        const moviesComments = []
        for (const movie of response) {
            const comments = await getRepository(Comments).count({where: {movieId: movie.id}})
            moviesComments.push({...movie, noComments: comments})
        }
        return moviesComments
    }

    public static async getCharacters(data: ICharacterSearch) {
        let response = await SwapiProvider.getCharacters(data.page || 1)
        if (data.gender) {
            response = response.filter((obj: any) => {
                // @ts-ignore
                return obj.gender === (data.gender).toLowerCase();
            });
        }

        if (data.search) {
            response = response.filter((obj: any) => {
                // @ts-ignore
                return ((obj.name).toLowerCase()).includes((data.search).toLowerCase());
            });
        }

        if ((data.sortType == 'name') && (data.order == 'asc')) {
            response.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
        } else if ((data.sortType == 'name') && (data.order == 'desc')) {
            response.sort((a: any, b: any) => (a.name < b.name) ? 1 : -1);
        } else if ((data.sortType == 'height') && (data.order == 'asc')) {
            response.sort((a: any, b: any) => (parseInt(a.height) > parseInt(b.height)) ? 1 : -1);
        } else if ((data.sortType == 'height') && (data.order == 'desc')) {
            response.sort((a: any, b: any) => (parseInt(a.height) < parseInt(b.height)) ? 1 : -1);
        }
        let totalHeight = 0;
        for (let i = 0; i < response.length; i++) {
            totalHeight = totalHeight + parseFloat(response[i]['height']);
        }
        const total_height_cm = totalHeight + " cm";
        const total_height_ft_in = Helper.toInchesAndFeet(totalHeight);
        return {count: response.length, total_height: {cm: total_height_cm, ft_in: total_height_ft_in}, data: response}
    }

    public static async makeAnonymous(data: any) {
        return await getRepository(Comments).save({
            movieId: data.movieId,
            comment: data.comment,
            ipAddress: data.ipAddress,
            createdDate: new Date().toUTCString(),
            createdTime: new Date().getTime().toString()
        })
    }

    public static async getMovieComments(id: number) {
        return await getRepository(Comments).find({
            where: {movieId: id}, order: {
                id: "DESC"
            }
        })
    }

    public static async getComments() {
        return await getRepository(Comments).find({
            order: {
                id: "DESC"
            }
        })
    }


}