import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Map, icon, marker, tileLayer } from 'leaflet';
import { Coords } from 'src/app/shared/models/ipTrackerModels';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss'],
})
export class MapComponentComponent implements OnInit {
  @Input() coordsData!: Coords;

  private map!: Map;

  customIcon = icon({
    iconUrl: '../../../../../../assets/vsg/iconLocation.svg',
    iconSize: [35, 40],
    iconAnchor: [22, 94],
  });

  ngOnInit() {
    if (this.coordsData) {
      this.renderingMap();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['coordsData'] && !changes['coordsData'].firstChange) {
      this.updateMap();
    }
  }

  renderingMap() {
    this.map = new Map('map').setView(
      [this.coordsData.lat + 0.007, this.coordsData.lng],
      14
    );

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    marker([this.coordsData.lat, this.coordsData.lng], {
      icon: this.customIcon,
    }).addTo(this.map);
  }

  private updateMap() {
    this.map.setView([this.coordsData.lat, this.coordsData.lng]);
    marker([this.coordsData.lat, this.coordsData.lng], {
      icon: this.customIcon,
    }).addTo(this.map);
  }
}
