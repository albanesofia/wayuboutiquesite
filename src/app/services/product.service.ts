import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Fournit le service à l'ensemble de l'application
})
export class ProductService {
  private sacs = [
    {
      id: 1,
      name: 'Sac Wayuu blanc',
      description:
        'Un sac artisanal avec des motifs traditionnels colorés blancs et bleus.',
      image: 'assets/images/sac-blanc.jpg', // Chemin local
      price: 75,
    },
    {
      id: 2,
      name: 'Sac Wayuu bleu',
      description:
        'Un sac élégant avec des nuances de bleu et des motifs géométriques.',
      image: 'assets/images/sac-bleu.webp',
      price: 80,
    },
    {
      id: 3,
      name: 'Sac Wayuu jaune',
      description:
        'Un sac élégant avec des nuances de bleu et des motifs géométriques.',
      image: 'assets/images/sac-jaune.webp',
      price: 80,
    },
    {
      id: 4,
      name: 'Sac Wayuu rose',
      description:
        'Un sac élégant avec des nuances de bleu et des motifs géométriques.',
      image: 'assets/images/sac-rose.jpeg',
      price: 80,
    },
    {
      id: 5,
      name: 'Sac Wayuu rouge',
      description: 'Un sac vibrant avec des motifs inspirés du soleil.',
      image: 'assets/images/sac-rouge.jpg',
      price: 90,
    },
  ];

  private bracelets = [
    {
      id: 1,
      name: 'Bracelet Perles Multicolores',
      description: 'Un bracelet vibrant avec des motifs traditionnels.',
      image: 'assets/images/bracelet-bleu.jpg',
      price: 25,
    },
    {
      id: 2,
      name: 'Bracelet Perles Multicolores',
      description: 'Un bracelet vibrant avec des motifs traditionnels.',
      image: 'assets/images/bracelet-marron.avif',
      price: 25,
    },
    {
      id: 3,
      name: 'Bracelet Traditionnel',
      description: 'Un bracelet artisanal avec des détails géométriques.',
      image: 'assets/images/bracelet-orange.jpg',
      price: 30,
    },
    {
      id: 3,
      name: 'Bracelet Tressé Rose',
      description: 'Un bracelet chic et élégant avec des couleurs vives.',
      image: 'assets/images/bracelet-rose.jpg',
      price: 20,
    },
  ];

  // Méthodes pour récupérer les produits
  getSacs() {
    return this.sacs;
  }

  getBracelets() {
    return this.bracelets;
  }
}
