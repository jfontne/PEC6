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
  public winelist:Wine[];
  
  constructor(private http: HttpClient) {
    
    this.winelist = [];
  }

  getWines(searchString:string): Observable<Wine[]>{

    return this.http.get<Wine[]>(`/api/wine/?q=${searchString}`);
  }

  changeQuantity(id:number,changeInQuantity:number):Observable<Wine>{
    let indexWine = this.winelist.findIndex(wine=>wine.id === id);
    this.winelist[indexWine].quantityInCart = this.winelist[indexWine].quantityInCart + changeInQuantity;
 
    return this.http.patch<Wine>('/api/wine/' + id,{
      changeInQuantity: changeInQuantity
    });
  }

  
  create(wine:Wine):Observable<any>{
    
    return this.http.post('/api/wine',wine)
  }

  putWines(w:Wine[]){
      //posem tots els vins en un array
      this.winelist=w;
  }
  addWineList(w:Wine){
    //afegim el vi al nostre array, ho fem per tenir la info local en pantalla
    //actualitzada
    w.id = this.winelist.length + 1;
    this.winelist.push(w);
  }
}
