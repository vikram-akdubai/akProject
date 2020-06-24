
import { Injectable } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class DateConfigService {
  config: { displayMonths: number; navigation: string; showWeekNumbers: boolean; outsideDays: string; };

  constructor() {
    this.config = { displayMonths: 1, navigation: 'select', showWeekNumbers: false, outsideDays: 'visible' };
  }

}
