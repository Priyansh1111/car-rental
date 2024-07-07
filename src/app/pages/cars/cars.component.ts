import { Component, OnInit, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  [x: string]: any;

  carList: any[] = [];

  carService = inject(CarService); 

  carForm: FormGroup = new FormGroup({
    carId: new FormControl(0),
    brand  : new FormControl(""),
    model :  new FormControl(""),
    year   :  new FormControl(""),
    color   :  new FormControl(""),
    dailyRate : new FormControl(""), 
    carImage  :new FormControl(""),
    regNo  :new FormControl("")
  })

  ngOnInit(): void {
    debugger;
    this.getCars();
  }

  addNew(){
    this.carForm = new FormGroup({
      carId: new FormControl(0),
      brand  : new FormControl(""),
      model :  new FormControl(""),
      year   :  new FormControl(""),
      color   :  new FormControl(""),
      dailyRate : new FormControl(""), 
      carImage  :new FormControl(""),
      regNo  :new FormControl("")
    })
  
  }

  getCars() {
    debugger;
    this.carService.getAllCars().subscribe((res: any) => {
      this.carList = res.data;

    }, (error: any) => {

    })
  }
  OnSaveCar() {
    debugger;
    const formValue = this.carForm.value;
    this .carService.createCar(formValue).subscribe((res:any)=>{
        if(res.result){
          alert("Record Creation Success");
          this.getCars();
        }else{
          alert(res.message)
        }
    })
  }
  onDelete(id:number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      this.carService.deleteCar(id).subscribe((res:any)=>{
        if(res.result){
          alert("Record Delete Sucess");
          this.getCars();
        } else{
          alert(res.message)
        }
      })
    }
  }


  onEdit(data : any) {
    this.carForm = new FormGroup({
      carId: new FormControl(data.carId),
      brand  : new FormControl(data.brand ),
      model :  new FormControl(data.model),
      year   :  new FormControl(data.year),
      color   :  new FormControl(data.color),
      dailyRate : new FormControl(data.dailyRate), 
      carImage  :new FormControl(data.carImage),
      regNo  :new FormControl(data.regNo)
    }) 
     

  } 
  onUpdateCar() {
    const formValue = this.carForm.value;
    this.carService.updateCar(FormValue).subscribe((res:any)=>{
      if(res.result){
        alert("Record Update Sucess");
        this.getCars();
      } else{
        alert(res.message)
      }
    })
  } 

}
