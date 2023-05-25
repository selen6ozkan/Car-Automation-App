import { Model } from "./model.model";

export class Items
{
    constructor(
        public title?:string,
        public models?:Model[],
    ){}
    
}