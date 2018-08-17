
import {Iterable} from 'ts-iterable';

export class List<T> extends Iterable<T> {
    // The underlying array data structure of the collection
    private items:T[]=[];
    //constructor
    constructor(){
        super();
    }
  
   public valid(key):boolean{
        return key < this.items.length;
    }

    public current(key):any{
        return this.items[key];
    }
    // Get the collection as an array
    public getItems() {
        return this.items;
    }

    // Get a specific item from a collection given it's index
    public getItem(index: number): T{
        return this.items[index];
    }

    // Length of the collection
    public getLength() { return this.items.length; }

    // Add an object to the collection
    public add(item: T) {
        this.items.push(item);
    }

    // Delete an object from the collection
    public delete(itemIndex: number) {
        this.items.splice(itemIndex, 1);
    }

    // Find the index of a given object in a collection
    public getIndexOf(obj: T) :number {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === obj)
                return i;
        }
        return -1;
    }

}



