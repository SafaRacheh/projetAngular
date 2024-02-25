import { Component } from '@angular/core';
import { Apartment } from 'src/app/core/models/Appartement';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  constructor(private _router:Router) {}
  search: string = "";
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg",apartments: []},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg",apartments: []},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg",apartments: []},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg",apartments: []}
    ];
    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":"100","terrace":"oui","surfaceTerrace":20,"category":"S+1","description":
      "Appartement S+1","residence":this.listResidences[0],like: 0 },
      {id:2,"appartNum":2,"floorNum":0,"surface":"130","terrace":"non","surfaceTerrace":0,"category":"S+2","description":
      "Appartement S+2","residence":this.listResidences[0],like: 0 },
      {id:3,"appartNum":3,"floorNum":0,"surface":"150","terrace":"oui","surfaceTerrace":30,"category":"S+3","description":
      "Appartement S+3","residence":this.listResidences[1],like: 0 }
    ];
    searchApartments() {
      // Reset apartments for all residences
      this.listResidences.forEach((residence) => (residence.apartments = []));
  
      this.listApartments.forEach((apartment) => {
        if (apartment.surface === this.search) {
          apartment.residence.apartments.push(apartment);
        }
      });
    }
    showApartments(residence: Residence) {
      residence.apartments = this.listApartments.filter(
        (apartment) => apartment.residence.id === residence.id
      );
    }
    like(t: Apartment) {
      t.like++;
    }
   

}
