import { Food } from "../interfaces/food";

export class Wine {
    constructor(
        public id: number,
        public name: string, 
        public imageUrl: string, 
        public price: number, 
        public isOnSale: boolean, 
        public quantityInCart: number, 
        public total: number,
        public foodPairing: Food[]){}
}
