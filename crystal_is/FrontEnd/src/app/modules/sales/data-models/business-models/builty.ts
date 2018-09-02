export class Builty {
    //private members
    private vehicle_number :string;
    //constructor
    constructor(builty_data?:any){
        if(builty_data!=undefined){
            this.setNumber(builty_data.number);
        }//if
    }
    
    setNumber(vehicle_number:string){
        this.vehicle_number = vehicle_number;
    }//setNumber
   
    getVehicleNo():string{
        return this.vehicle_number;
    }//getVehicleNo
}
