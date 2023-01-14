import { Injectable } from '@angular/core';
import { from, Observable, subscribeOn } from 'rxjs';
import { Wine } from '../models/wine';
import { Food } from '../interfaces/food';
import { HttpClient } from '@angular/common/http';
import { WineQuantityChange } from '../interfaces/wine-quantity-change';

@Injectable({
  providedIn: 'root'
})
export class WineServiceService {
  //public winelist: Wine[];
  public totalComanda: string;
  public winelist:Wine[];
  
  constructor(private http: HttpClient) {
    this.totalComanda = '0.00';
    this.winelist = [];
  }

  getWines(searchString:string): Observable<Wine[]>{

    return this.http.get<Wine[]>(`/api/wine/?q=${searchString}`);
  }

  changeQuantity(id:number,changeInQuantity:number):Observable<Wine>{
    let indexWine = this.winelist.findIndex(wine=>wine.id === id);
    this.winelist[indexWine].quantityInCart = this.winelist[indexWine].quantityInCart + changeInQuantity;
    this.winelist[indexWine].total=this.winelist[indexWine].price * this.winelist[indexWine].quantityInCart
    //Actualitzem el total comanda
    let total: number = 0;
    this.winelist.forEach(wine =>{
      total = total + wine.total;
    });
    this.totalComanda =  total.toFixed(2);
    return this.http.patch<Wine>('/api/wine/' + id,{
      changeInQuantity: changeInQuantity
    });
  }

  
  create(wine:Wine):Observable<any>{
    console.log(wine);
    return this.http.post('/api/wine',wine)
  }

  putWines(w:Wine[]){
      this.winelist=w;
  }
  addWineList(w:Wine){
    w.id = this.winelist.length + 1;
    this.winelist.push(w);
  }
}
