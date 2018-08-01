export class Address {
    
    private city:string;
    private street:string;
    private HouseNo:string;


    constructor(addressdata : any){
        this.setCity(addressdata.city);
        this.setHouseNo(addressdata.house_no);
        this.setStreet(addressdata.street);   
    }

  
    setCity(given_city:string):void{
        this.city=given_city;
    }//method
    setStreet(given_Street:string):void{
        this.street=given_Street;
    }//method
    setHouseNo(given_HouseNo:string):void{
        this.HouseNo=given_HouseNo;
    }//method


    getCity():string{
        return this.city;
    }//method

    
    getStreet():string{
        return this.street;
    }//method

    getHouseNo():string{
        return this.HouseNo;
    }//method
}
