import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataBar } from 'src/app/shared/models/ipTrackerModels';

@Component({
  selector: 'app-data-bar',
  templateUrl: './data-bar.component.html',
  styleUrls: ['./data-bar.component.scss'],
})
export class DataBarComponent implements OnInit, OnChanges {
  @Input() dataBar?: DataBar;
  utcFormat?: any;

  ngOnInit(): void {
    if (this.dataBar?.timezone) {
      this.utcFormat = this.convertOffsetToUTCFormat(this.dataBar?.timezone);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataBar?.timezone && changes['dataBar'] && !changes['dataBar'].firstChange) {
      this.utcFormat = this.convertOffsetToUTCFormat(this.dataBar?.timezone);
    }
  }

  convertOffsetToUTCFormat(offset: string) {
    const [hours, minutes] = offset.split(':').map(Number);
    const sign = hours < 0 ? '-' : '+';
    const absHours = Math.abs(hours);
    const absMinutes = Math.abs(minutes);
    const utcOffset = `UTC${sign}${this.padZero(absHours)}:${this.padZero(
      absMinutes
    )}`;

    return utcOffset;
  }

  padZero(number: number) {
    return number < 10 ? `0${number}` : number;
  }
}
