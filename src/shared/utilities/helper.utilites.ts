import axios, { AxiosRequestConfig } from 'axios';
import {NextFunction, Request, Response} from 'express';

export class Helper {
  public static async sendRequest(requestConfig: AxiosRequestConfig): Promise<any> {
    try {
      const response = await axios(requestConfig);
      return response.data;
    } catch (err) {
      throw {
        status: err.response.status,
        statusText: err.response.statusText,
        msg: '',
      };
    }
  }

  public static async sendSuccessResponse(request: Request, response: Response,code: number, message: string, data?: any, meta ?: any,){
    return response.status(code).json({
      status : true,
      message,
      data,
      meta
    })
  }

  public static async sendFailureResponse(request: Request, response: Response,code: number, message: string){
    return response.status(code).json({
      status : false,
      message
    })
  }

  public static toInchesAndFeet(data: number){
    let realFeet = ((data * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + " ft and " + inches + ' inches';
  }
}
