import { Food } from "../interfaces/food";

export interface Wine {
     id: number,
     name: string, 
     imageUrl: string, 
     price: number, 
     isOnSale: boolean, 
     quantityInCart: number, 
     total: number,
     foodPairing: Food[]
}
