import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Product } from '../product.model';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
//  propLegal = "qualquer";
  product: Product ={
  name: '',
  price: 1.45
  }
  constructor(private productService: ProductService,
    private router :Router) { }
    
  ngOnInit(): void {
  }
  createProduct(): void {
    this.productService.create(this.product).subscribe(()=>{ 
    this.productService.showMessage('Produto criado!');
    this.router.navigate(['/products']);

    } );
  

  }

  cancel(): void {
    this.router.navigate(['/products']);

  }

  // fazerAlgo(): void {
  //   console.log('Fazendo algo!');
  // }
}
