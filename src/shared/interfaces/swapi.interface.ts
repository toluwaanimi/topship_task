import {IsEnum, IsOptional, Min} from "class-validator";
import {Type} from "class-transformer";

export interface IMovies{
    id : number
    title:string
    openingCrawl:string
    releaseDate:string
}


export enum IGender{
    male ='male',
    female = 'female'
}

export enum IOrder{
    asc = 'asc',
    desc ='desc'
}

export enum ISortType{
    name = 'name',
    height = 'height'
}


export interface ICharacterSearch{

    page ?: number

    sortType?: ISortType


    order?:IOrder

    gender ?:IGender

    search?:string
}