import { Injectable } from '@angular/core';
import {Foods} from 'src/app/shared/models/food'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]
  {
    return[
      {
        id:1,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:2,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:3,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:4,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:5,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:6,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:7,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:8,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags:['Fastfood', 'Burger', 'Lunch'],
      }


    ]
  }
}
