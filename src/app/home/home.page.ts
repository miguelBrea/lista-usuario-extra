import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //esta variable sirve para controlar los valores de los rangos
  //de los inputs
  rangoMin = 18;
  rangoMax = 100;
  //3 valores posibles todo(3), male(2), female(1), por defecto todo
  optionGender = 3;

  constructor(public userService: UsersService){
  }

  ngOnInit(){}

  getMan(){
    this.optionGender = 1;
  }
  getWoman(){
    this.optionGender = 2;
  }
  getAll(){
    this.optionGender = 3;
  }

  mostrar(){
    console.log('Min: '+ this.rangoMin + ', Max: ' + this.rangoMax);
  }
}
