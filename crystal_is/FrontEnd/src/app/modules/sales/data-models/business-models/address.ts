export class Address {
    //private members
    private address : string;
    //constructor
    constructor(addressdata ?: any){
        if(addressdata!=undefined){
            this.setAddress(addressdata.address);
        }//if
    }
    //public functions
    //setters
    setAddress(address:string){
        this.address=address;
    }//setCity
    //getters
   
    getAddress():string{
        return this.address;
    }//getCity
}//Adress class
