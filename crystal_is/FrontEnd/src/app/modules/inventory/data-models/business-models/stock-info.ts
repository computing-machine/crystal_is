import { StockInfoData } from "../json-models/stock-info-data";

export class StockInfo {

    constructor(stock_info_data:StockInfoData){
        this.setUnitId(stock_info_data.unit_id);
        this.setAvailQuan(stock_info_data.available);
        this.setMinQuan(stock_info_data.minimum);
    }//constructor

    //mutators
    setUnitId(given_unit_id:object):void{this.unit_id=given_unit_id;}
    setAvailQuan(given_avail_quan:number){this.available=given_avail_quan}
    setMinQuan(given_min_quan:number){this.minimum=given_min_quan}

    //accessors
    getUnitId():object{return this.unit_id;}
    getAvailQuan():number{return this.available;}
    getMinQuan():number{return this.minimum;}

    //data members
    private unit_id:object;
    private available:number;
    private minimum:number;
}//class ends
