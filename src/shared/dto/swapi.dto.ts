import {IsEnum, IsInt, IsOptional, IsString, Matches, Max, Min, MinLength} from "class-validator";
import {Type} from "class-transformer";
import {IGender, IOrder, ISortType} from "../interfaces";

export class QueryCharacter{

    @IsOptional()
    @Min(1)
    @Type(() => Number)
    page : number

    @IsOptional()
    @IsEnum(ISortType)
    sortType: ISortType


    @IsOptional()
    @IsEnum(IOrder)
    order:IOrder


    @IsOptional()
    // @ts-ignore
    @IsEnum(IGender, {message: 'gender must be a either male or female'})
    gender :IGender

    @IsOptional()
    search:string
}
