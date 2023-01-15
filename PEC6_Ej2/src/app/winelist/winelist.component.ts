import { Component } from '@angular/core';
import { Wine } from '../models/wine';
import { WineQuantityChange } from '../interfaces/wine-quantity-change';
import { Observable } from 'rxjs';
import { WineServiceService } from '../services/wine-service.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent {

  public wines$: Observable<Wine[]>;
  //public total$: Observable<any>;
  public total: any;
  public msg: any;

  constructor(private SWine: WineServiceService) {

    //Inicialitzem la llista de vins mitjançant el servei amb el métode getWines
    this.wines$ = this.SWine.getWines();
    this.SWine.getTotalOrder()
    .subscribe(total => {
      this.total = total;
    });
    this.msg = {};
  }
  addGetWine(e: WineQuantityChange) {
    this.SWine.changeQuantity(e.id, 1);
    this.SWine.getTotalOrder()
    .subscribe(total => {
      this.total = total;
    });
  }
  substractGetWine(e: WineQuantityChange) {
    this.SWine.changeQuantity(e.id, -1);
    this.SWine.getTotalOrder()
    .subscribe(total => {
      this.total = total;
    });
  }
  createWine(wine: Wine) {
    this.SWine.create(wine);
  }
}
