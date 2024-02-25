import { Apartment } from "./Appartement";

export class Residence {
    id!:number;
    name!:string;
    address!: string;
    image!:string;
    apartments: Apartment[] = [];
    }       