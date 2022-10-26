export class Products {
    id:number;
    uid:string;
    blend_name:string;
    origin:string;
    variety:string;
    notes:string;
    intensifier:string;

    constructor(
        id?: number,
        uid?:string,
        blend_name?:string,
        origin?: string,
        variety?: string,
        notes?: string,
        intensifier?: string
        ) {
          this.id = id || 0;
          this.uid = uid || '';
          this.blend_name = blend_name || '';
          this.origin = origin || '';
          this.variety = variety || '';
          this.notes = notes || '';
          this.intensifier = intensifier || '';
      }
}
