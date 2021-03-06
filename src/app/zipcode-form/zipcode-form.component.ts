import { ZippoService } from './../zippo.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zipcode-form.component.html',
  styleUrls: ['./zipcode-form.component.scss']
})
export class ZipcodeFormComponent implements OnInit {
  place;
  timer;
  key = environment.googleKey;

  constructor(private zippo: ZippoService) { }

  ngOnInit() {
    // this.zippo.parse('48025').subscribe((response) => console.log(response));
  }

  processZip(zip) {
    if (zip.length < 5) { return false; }
    this.zippo.parse(zip).subscribe(
      (response: any) => {
        console.log(response);
        this.place = response.places[0];
      }, (error: any) => {
        alert(`Error (ZIP: ${zip}): ` + error.statusText);
      }
    );
    return false;
  }

  onKeyUp(zip) {
    if (!!this.timer) { clearTimeout(this.timer); }
    this.timer = setTimeout(() => { this.processZip(zip); }, 2000);
  }

  /*onKeyDown() {
    console.log(this.timer);
    clearTimeout(this.timer);
  }*/

}
