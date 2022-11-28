import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public productList = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis. Perferendis placeat doloribus, praesentium mollitia iure dicta voluptate vel quasi?',
      image: 'https://picsum.photos/300/300?random=1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis. Perferendis placeat doloribus, praesentium mollitia iure dicta voluptate vel quasi?',
      image: 'https://picsum.photos/300/300?random=2'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis. Perferendis placeat doloribus, praesentium mollitia iure dicta voluptate vel quasi?',
      image: 'https://picsum.photos/300/300?random=3'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis. Perferendis placeat doloribus, praesentium mollitia iure dicta voluptate vel quasi?',
      image: 'https://picsum.photos/300/300?random=4'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis. Perferendis placeat doloribus, praesentium mollitia iure dicta voluptate vel quasi?',
      image: 'https://picsum.photos/300/300?random=5'
    },
    {
      id: 6,
      name: 'Product 6',
      price: 600,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis. Perferendis placeat doloribus, praesentium mollitia iure dicta voluptate vel quasi?',
      image: 'https://picsum.photos/300/300?random=6'
    },
  ]
}
