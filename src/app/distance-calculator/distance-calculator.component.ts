import { ZippoService } from './../zippo.service';
import { Component, OnInit } from '@angular/core';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-distance-calculator',
  templateUrl: './distance-calculator.component.html',
  styleUrls: ['./distance-calculator.component.scss']
})
export class DistanceCalculatorComponent implements OnInit {
  distance: number;

  constructor(private zippo: ZippoService) { }

  ngOnInit() {
    // this.calculateDistance('92108', '92111');
  }

  calculateDistance(zip1, zip2) {
    this.zippo.parseTwo(zip1, zip2).subscribe((responses: any) => {
      // let coords1 = {lat: responses[0].places[0].latitude, lng: responses[0].places[0].longitude};
      let from = turf.point([responses[0].places[0].longitude, responses[0].places[0].latitude,]);

      // let coords2 = {lat: responses[1].places[0].latitude, lng: responses[1].places[0].longitude};
      let to = turf.point([responses[1].places[0].longitude, responses[1].places[0].latitude]);

      this.distance = turf.distance(from, to);
    });
    return false;
  }

}
