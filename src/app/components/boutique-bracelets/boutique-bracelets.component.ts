import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-boutique-bracelets',
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule
  templateUrl: './boutique-bracelets.component.html',
  styleUrls: ['./boutique-bracelets.component.css'],
})
export class BoutiqueBraceletsComponent implements OnInit {
  bracelets: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.bracelets = this.productService.getBracelets();
  }

  addToCart(bracelet: any): void {
    console.log('Produit ajouté au panier :', bracelet);
  }
}
