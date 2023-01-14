import { Injectable } from '@angular/core';
import { from, Observable, subscribeOn } from 'rxjs';
import { map } from 'rxjs';
import { Wine } from '../models/wine';
import { Food } from '../interfaces/food';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineServiceService {
  public winelist: Wine[];
  public totalComanda: string;

  constructor() {
    this.totalComanda = '0.00';  
    let foods: Food[]= [];
      foods = [
        {
        name: 'peix al forn',
        kcal: 1000,
        gluten: false,
        vegan: false}
        ,
        {
          name: "Anxoves de l'escala",
          kcal: 1000,
          gluten: false,
          vegan: false}
        ]  
        this.winelist = [
        new Wine(1,'Alta Alella LAIETÀ Gran Reserva','03_alta_alella_mirgin_laieta_gran_reserva_t_21.jpg',20.20,true,0,0,foods),
        new Wine(2,'Alta Alella LAIETÀ Rosé Gran Reserva','04_alta_alella_mirgin_laieta_rose_gran_reserva_t_22.jpg',21.85,true,0,0,foods),
        new Wine(3,'Alta Alella MIRGIN Gran Reserva','02_alta_alella_mirgin_gran_reserva_elaborador_t.jpg',12.95,false,0,0,foods),
        new Wine(4,'Alta Alella MIRGIN OPUS Paratge','05_alta_alella_mirgin_opus_paratge_qualificat_vallcirera_t_22.jpg',32.00,true,0,0,foods)
      ]

   }

  getWines(): Observable<Wine[]>{
    return of(this.winelist)
  }

  changeQuantity(wineId:number, changeInQuantity:number):Observable<Wine>{
    let indexWine = this.winelist.findIndex(wine=>wine.id === wineId);
    this.winelist[indexWine].quantityInCart = this.winelist[indexWine].quantityInCart + changeInQuantity;
    this.winelist[indexWine].total=this.winelist[indexWine].price * this.winelist[indexWine].quantityInCart
    //Actualitzem el total comanda
    let total: number = 0;
    this.winelist.forEach(wine =>{
      total = total + wine.total;
    });
    this.totalComanda =  total.toFixed(2);
    return of(this.winelist[indexWine]);
  }
  
  create(wine:Wine):Observable<any>{
    //Aconseguim l'id del nou vi
    let id = Math.max(...this.winelist.map(w=>w.id)) + 1
    wine.id = id;
    this.winelist.push(wine);
    return of({msg: 'Vi agregat correctament'});
  }

  getTotalOrder():Observable<any>{
    return of({total: this.totalComanda});
  }
}