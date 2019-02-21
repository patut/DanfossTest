import { BaseResponse } from "./BaseResponse";
import { House } from "../internal/House";

export class GetHousesResponse extends BaseResponse {
    houseList: House[];
}