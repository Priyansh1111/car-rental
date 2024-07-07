import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  createCar(formValue: any) {
    throw new Error('Method not implemented.');
  }

  apiUrl: string = 'https://freeapi.gerasim.in/api/CarRentalApp/';

  constructor(private http: HttpClient) { }

  getAllCars{
  return this.http.get(`${this.apiUrl}GetCars`)
}

updateCar(obj: any){
    debugger;
  return this.http.put(`${this.apiUrl}UpdateCar`, obj)

}
/api/CarRentalApp / DeleteCarbyCarId
deleteCar(carId: any){

  return this.http.delete(`${this.apiUrl}DeleteCarsbyCarId?carid=${carId}`)

}
createCar(obj: any){

  return this.http.post(`${this.apiUrl}CreateNewCar`, obj)

}
}
function updateCar(obj: any, any: any) {
  throw new Error('Function not implemented.');
}

function deleteCar(carId: any, any: any) {
  throw new Error('Function not implemented.');
}

function createCar(obj: any, any: any) {
  throw new Error('Function not implemented.');
}

