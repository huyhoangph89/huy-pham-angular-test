import { Component } from '@angular/core';
@Component({
  selector: 'app-kit-home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeViewComponent {
  value: string;

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getVal(data) {
    this.value = data;
  }
}
