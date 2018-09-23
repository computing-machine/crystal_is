export class Deliverables {
    //private members
    private fg_item_id :object;
    private quantity : number
    //constructor
    constructor(deliverables_data?:any){
        if(deliverables_data!=undefined){
            this.setFGItemId(deliverables_data.fg_id);
            this.setQuantity(deliverables_data.quantity);
        }//if
    }
    setFGItemId(fg_id:object){
        this.fg_item_id = fg_id;
    }//setFGItemId
    setQuantity(quantity:number){
        this.quantity = quantity;
    }//setQuantity
    getFGItemId():object{
        return this.fg_item_id;
    }//getFGItemId
    getQuantity():number{
        return this.quantity;
    }//getQuantity
   
}
