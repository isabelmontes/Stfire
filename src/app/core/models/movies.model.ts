import { ActorModel } from "./actor.model";

export interface MovieModel{
    _id:string;
    cover:string;
    name: string;
    director: string;
    genre: string;
    year:string;
    duration:string;
    url:string;
    actor?: ActorModel;
}