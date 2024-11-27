import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-boutique-sacs',
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule
  templateUrl: './boutique-sacs.component.html',
  styleUrls: ['./boutique-sacs.component.css'],
})
export class BoutiqueSacsComponent implements OnInit {
  sacs: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sacs = this.productService.getSacs();
  }

  addToCart(sac: any): void {
    console.log('Produit ajouté au panier :', sac);
  }
}
