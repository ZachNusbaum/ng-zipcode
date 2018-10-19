import { ZippoService } from './../zippo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zipcode-form.component.html',
  styleUrls: ['./zipcode-form.component.scss']
})
export class ZipcodeFormComponent implements OnInit {
  place;

  constructor(private zippo: ZippoService) { }

  ngOnInit() {
    // this.zippo.parse('48025').subscribe((response) => console.log(response));
  }

  processZip(zip) {
    this.zippo.parse(zip).subscribe(
      (response: any) => {
        console.log(response);
        this.place = response.places[0];
      }
    );
    return false;
  }

}
