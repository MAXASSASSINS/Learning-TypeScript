import { HasFormatter } from '../interfaces/HasFormatter.js'


export class Invoice implements HasFormatter {
    // readonly name: string
    // private details: string
    // public amount: number

    // constructor(n: string, d: string, a: number){
    //     this.name = n;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor(
        readonly name: string,
        private details: string,
        public amount: number
    ) { }


    format() {
        return `${this.name} owes $${this.amount} for ${this.details}`
    }

}


