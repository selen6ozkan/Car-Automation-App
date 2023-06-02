
export interface Brand {

  brands: Array<BrandItem>

}
export class BrandItem {
    constructor(
    public id?: number,
    public name?: string,
    public img?:string
    
    ){}
  }