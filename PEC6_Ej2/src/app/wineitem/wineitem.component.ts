import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Wine } from '../models/wine';
import { WineQuantityChange } from '../interfaces/wine-quantity-change';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineitemComponent{
  
  public wineClasses;
  public wineQuantity: WineQuantityChange;
  @Input() wine: Wine;
  
  @Output() addEvento = new EventEmitter<WineQuantityChange>
  @Output() substractEvento = new EventEmitter<WineQuantityChange>

  constructor(){
    this.wineQuantity = {id: 0,quantity: 0}
    this.wine = {id: 0,name: '',imageUrl: '',price: 0,quantityInCart: 0,isOnSale: false,total: 0,foodPairing: []}
    this.wineClasses = {};    
  }

  ngOnInit(){
    let enVenta = this.wine? this.wine.isOnSale : false;
    this.wineClasses = {
      enVenda: enVenta,
      noDisponible: !enVenta
    }
  }

  addQuantity(){
      this.wineQuantity.id = this.wine.id;
      this.addEvento.emit(this.wineQuantity);
  }
  subtractQuantity(){
      this.wineQuantity.id = this.wine.id;
      this.substractEvento.emit(this.wineQuantity);
  }
}
