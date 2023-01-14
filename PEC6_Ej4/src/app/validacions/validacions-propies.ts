import { FormControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class ValidacionsPropies {
    static NameWineValidator(control:FormControl): ValidationErrors|null{
        let vins: Array<string>;
        vins = ['Laya', 'K-Naina', 'Verdejo', 'Monastrell'];
        return vins.some(vi => vi === control.value)?  null : {NoEstaEnLaLlista: true};
      }
}
