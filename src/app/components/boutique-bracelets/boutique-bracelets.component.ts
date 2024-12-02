import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductService } from '../../services/product.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-boutique-bracelets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './boutique-bracelets.component.html',
  styleUrls: ['./boutique-bracelets.component.css'],
})
export class BoutiqueBraceletsComponent implements OnInit {
  bracelets: any[] = [];
  showPopup = false; // Pour gérer l'état d'affichage du popup
  selectedProduct: any = null; // Produit sélectionné pour la notation
  newRating = { rating: 0, comment: '', username: '' }; // Ajout de la propriété username
  hoverRatingValue = 0; // Valeur temporaire pour le survol

  constructor(
    private productService: ProductService,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.bracelets = this.productService.getBracelets(); // Charge les bracelets
  }

  // Ajouter un bracelet au panier
  addToCart(bracelet: any): void {
    console.log('Bracelet ajouté au panier :', bracelet);
  }

  // Ouvrir le popup de notation
  openRatingPopup(bracelet: any): void {
    this.selectedProduct = bracelet; // Enregistre le bracelet sélectionné
    this.showPopup = true; // Affiche le popup
    this.newRating = { rating: 0, comment: '', username: '' }; // Réinitialise les champs de notation
  }

  // Fermer le popup
  closePopup(): void {
    this.showPopup = false; // Masque le popup
    this.selectedProduct = null; // Réinitialise le produit sélectionné
  }

  // Soumettre une notation
  submitRating(): void {
    const commentData = {
      productId: this.selectedProduct.id, // Identifiant du produit
      productName: this.selectedProduct.name, // Nom du produit
      username: this.newRating.username || 'Anonyme', // Nom d'utilisateur (par défaut : 'Anonyme')
      rating: this.newRating.rating, // Note
      comment: this.newRating.comment, // Commentaire
    };

    this.commentsService.addComment(commentData).subscribe(() => {
      alert('Votre commentaire a été ajouté !');
      this.closePopup(); // Ferme le popup après soumission
    });
  }

  // Définit la note en cliquant sur une étoile
  setRating(value: number): void {
    this.newRating.rating = value;
  }

  // Survol des étoiles pour un effet visuel
  hoverRating(value: number): void {
    this.hoverRatingValue = value;
  }
}
