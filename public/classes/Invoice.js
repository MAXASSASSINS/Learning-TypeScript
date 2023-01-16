export class Invoice {
    // readonly name: string
    // private details: string
    // public amount: number
    // constructor(n: string, d: string, a: number){
    //     this.name = n;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.name} owes $${this.amount} for ${this.details}`;
    }
}
