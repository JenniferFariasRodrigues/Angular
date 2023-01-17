// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Product } from '../product.model';
import { ProductCrudComponent } from "../../../views/product-crud/product-crud.component";
import { ProductService } from "../product.service";

// import { ProductService } from './../product.service';
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { Product } from "../product.model";
import { identity } from "rxjs";
@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  //  propLegal = "qualquer";
  product: Product;

  // products! : Product[];
  // product: Product | undefined;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readByID(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso.");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
