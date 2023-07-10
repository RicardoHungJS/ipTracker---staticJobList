import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  @Input() activeTags!: Array<string>;
  @Output() clearAllFilter = new EventEmitter();
  @Output() clearTagFilter = new EventEmitter();

  ngOnInit(): void {}

  deleteSearchTag(e: string) {
    this.clearTagFilter.emit(e);
  }

  clearSearcher() {
    this.clearAllFilter.emit();
  }
}
