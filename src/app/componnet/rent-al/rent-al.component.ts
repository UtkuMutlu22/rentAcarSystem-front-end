import { Component, OnInit } from '@angular/core';
import { RentAl } from 'src/app/models/rentAl';
import { RentalService } from 'src/app/services/rentalservice';

@Component({
  selector: 'app-rent-al',
  templateUrl: './rent-al.component.html',
  styleUrls: ['./rent-al.component.css']
})
export class RentAlComponent implements OnInit {
rentals: RentAl[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  // tslint:disable-next-line:typedef
  getRentals() {
    this.rentalService.getRentals().subscribe(data => { this.rentals = data.data; });
 }
}
