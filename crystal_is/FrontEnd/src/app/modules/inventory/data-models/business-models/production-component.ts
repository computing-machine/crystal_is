export abstract class ProductionComponent {

    constructor(param:any){
        this.setItemId(param.id);
        this.setUnitId(param.unit_id);
        this.setQuantity(param.quantity);
    }

    //mutators
    setItemId(given_item_id:object):void{this.item_id=given_item_id;}
    setUnitId(given_unit_id:object):void{this.unit_id=given_unit_id;}
    setQuantity(given_quantity:number):void{this.quantity=given_quantity;}
    
    //accessor
    getItemId():object{return this.item_id;}
    getUnitId():object{return this.unit_id;}
    getQuantity():number{return this.quantity;}

    private item_id:object;
    private unit_id:object;
    private quantity:number;
}
