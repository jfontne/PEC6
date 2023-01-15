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
  
  public winelist:Wine[];
  
  constructor(private http: HttpClient) {
    this.winelist = [];
  }

  getWines(searchString:string): Observable<Wine[]>{
    //Recuperem els vins i també podem buscar un vi amb el paràmetre searchString
    return this.http.get<Wine[]>(`/api/wine/?q=${searchString}`);
  }

  changeQuantity(id:number,changeInQuantity:number):Observable<Wine>{
    //Aquesta part la gestionem localment per veure-ho en pantalla
    let indexWine = this.winelist.findIndex(wine=>wine.id === id);
    this.winelist[indexWine].quantityInCart = this.winelist[indexWine].quantityInCart + changeInQuantity;
    
    //Aquí actualitzem el servidor
    return this.http.patch<Wine>('/api/wine/' + id,{
      changeInQuantity: changeInQuantity
    });
  }

  
  create(wine:Wine):Observable<any>{
    //Afegim el nou vi, no gestionem la id perque ho fa el servidor
    return this.http.post('/api/wine',wine)
  }

  putWines(w:Wine[]){
    //Posem els vins dins d'un array local per mantenir la info
    //actualitzada en pantalla
      this.winelist=w;
  }
  addWineList(w:Wine){
    //Afegim el vi de manera local per veure els canvis en pantalla
    w.id = this.winelist.length + 1;
    this.winelist.push(w);
  }
}
