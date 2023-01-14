import { ChangeDetectionStrategy, Component, Input, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Wine } from '../models/wine';
import { WineServiceService } from '../services/wine-service.service';
import { ValidacionsPropies } from '../validacions/validacions-propies';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineNewComponent {
public wineForm: FormGroup;
@Output() create = new EventEmitter<any>

constructor(private fb:FormBuilder){
  this.wineForm = this.fb.group({             
    name: [null, [Validators.required, ValidacionsPropies.NameWineValidator]],         
    price: [0, [Validators.required, Validators.min(1)]],
    imageURL: [null, [Validators.required]],
    isOnSale: [false,[]]
  });
}
createWine() {
  let Nwine: Wine;
  let valors = this.wineForm.value;
  Nwine = new Wine(0,valors.name,valors.imageURL,valors.price,valors.isOnSale,1,valors.price,[])
  this.create.emit(Nwine);
}



}
