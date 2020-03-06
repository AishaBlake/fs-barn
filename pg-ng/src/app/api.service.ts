import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3000/api/animals';
  constructor(private http: HttpClient) { }
  getAnimals() {
    return this.http.get(this.apiUrl, { responseType: 'json'});
  }

  getAnimalByID(id: number) {
    return this.http.get(this.apiUrl + `/${id}`, { responseType: 'json'});
  }

  postAnimal(name: string) {
    return this.http.post(this.apiUrl, { name }, { responseType: 'json'});
  }

  updateAnimal(id: number, name: string) {
    return this.http.put(this.apiUrl + `/${id}`, { name }, { responseType: 'json'});
  }

  deleteAnimal(id: number) {
    return this.http.delete(this.apiUrl + `/${id}`, { responseType: 'json'});
  }
}
