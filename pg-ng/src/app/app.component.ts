import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  animals = this.apiService.getAnimals().subscribe((data) => this.animals = data);
  selectedAnimals;

  getAnimal(id) {
    this.apiService.getAnimalByID(id).subscribe((data) => {
      this.selectedAnimals = Object.values(data);
    });
  }

  postAnimal(newAnimal) {
    this.apiService.postAnimal(newAnimal).subscribe((data) => {
      this.animals = data;
    });
  }

  updateAnimal(id, name) {
    this.apiService.updateAnimal(id, name).subscribe((data) => {
      this.animals = data;
    });
  }

  deleteAnimal(id) {
    this.apiService.deleteAnimal(id).subscribe((data) => {
      this.animals = Object.values(data);
    });
  }
}
