import { Injectable } from '@angular/core';
import {Foods} from 'src/app/shared/models/food'
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag:string ):Foods[]{
    return tag=='All'? 
    this.getAll(): this.getAll().filter(food=> food.tags?.includes(tag))
    /*
    if(tag=='All')
      return this.getAll();
      else
      return this.getAll().filter(food=> food.tags?.includes(tag))
    */
  }
  getAllTag():Tag[]{
    return[
      {name:'All', count: 11},
      {name:'Fastfood', count:10},
      {name:'Burger', count:1},
      {name:'Sandwich', count:1},
      {name:'Lunch', count:10},
      {name:'Pizza', count:1},
      {name:'Chicken', count:6},
      {name:'Soup', count:2},
      {name:'Thai', count:2},
      {name:'Spicy', count:1},
      {name:'Fry', count:3},
      {name:'Kabab', count:1},
      {name:'Juice', count:1},
      {name:'Shrimp', count:1},
      {name:'Crispy', count:1},
      {name:'BBQ', count:1},

    ];
  }
  getAll():Foods[]
  {
    return[
      {
        id:1,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Germany'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags:['All', 'Fastfood', 'Burger', 'Lunch'],
      },
      {
        id:2,
        name: 'Sandwich',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['England'],
        star: 4,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags:['All','Fastfood', 'Sandwich', 'Lunch'],
      },
      {
        id:3,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        star: 4,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags:['All','Fastfood', 'Pizza', 'Lunch'],
      },
      {
        id:4,
        name: 'Thai Chicken Soup',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Thailand'],
        star: 5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags:['All','Fastfood', 'Chicken', 'Soup', 'Thai', 'Lunch'],
      },
      {
        id:5,
        name: ' Spicy Chicken Fry',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Bangladesh'],
        star: 3.5,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags:['All','Fastfood', 'Chicken', 'Spicy', 'Fry', 'Lunch'],
      },
      {
        id:6,
        name: 'Normal Chicken Fry',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Bangladesh'],
        star: 5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags:['All','Fastfood', 'Chicken', 'Fry', 'Lunch'],
      },
      {
        id:7,
        name: 'Chicken Kabab',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['India'],
        star: 5,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags:['All','Fastfood', 'Chicken', 'Kabab', 'Lunch'],
      },
      {
        id:8,
        name: 'Juice',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Bangladesh'],
        star: 5,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags:['All', 'Juice'],
      },
      {
        id:9,
        name: 'Chicken BBQ',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['USA'],
        star: 5,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags:['All','Fastfood', 'Chicken', 'BBQ', 'Lunch'],
      },
      {
        id:10,
        name: 'Thai Shrimp Soup',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Thailand'],
        star: 3.5,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags:['All','Fastfood', 'Lunch', 'Shrimp', 'Soup', 'Thai'],
      },
      {
        id:11,
        name: 'Crispy Chicken Fry ',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['China'],
        star: 3.5,
        imageUrl: '/assets/images/foods/food-11.jpg',
        tags:['All','Fastfood', 'Crispy', 'Chicken', 'Fry', 'Lunch'],
      },
    ]
  }
}
