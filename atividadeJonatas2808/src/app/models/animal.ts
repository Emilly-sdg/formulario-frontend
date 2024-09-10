import { FormGroup } from "@angular/forms";

export class Animal{
    id?: any;
    name: string;
    age: string;
    species: string;
    owner: string;

    constructor(form: FormGroup) {
        this.id = form.value.id;
        this.name = form.value.name;
        this.age = form.value.age;
        this.species = form.value.species;
        this.owner = form.value.owner;
      }
}