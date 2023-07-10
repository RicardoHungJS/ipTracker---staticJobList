import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit, OnChanges {
  @Input() activeTags!: Array<string>;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['activeTags'] &&
      !changes['activeTags'].firstChange &&
      this.activeTags.length > 0
    ) {
      // console.log('in searcher component', this.activeTags);
    }
  }

  clearSearcher() {
    console.log('Cleaned');
  }
}
