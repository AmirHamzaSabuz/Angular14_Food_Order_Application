import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]
  {
    return[
      '/assets/food-1.jpg',
      '/assets/food-2.webp',
      '/assets/food-3.webp',
      '/assets/food-4.jpg',
      '/assets/food-5.jpg',
      '/assets/food-6.jpg',
      '/assets/food-7.jpg',
      '/assets/food-8.jpg',

    ]
  }
}
