import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Fournit le service à l'ensemble de l'application
})
export class ProductService {
  private sacs = [
    {
      id: 1,
      name: 'Sac Wayuu multicolore',
      description: 'Un sac artisanal avec des motifs traditionnels colorés.',
      image:
        'https://i.etsystatic.com/23065645/r/il/6ae51f/3688994406/il_1080xN.3688994406_fypt.jpg',
      price: 75,
    },
    {
      id: 2,
      name: 'Sac Wayuu bleu',
      description:
        'Un sac élégant avec des nuances de bleu et des motifs géométriques.',
      image: 'https://voglio.fr/1058-large_default/sac-mochila-wayuu-bleu.jpg',
      price: 80,
    },
    {
      id: 3,
      name: 'Sac Wayuu jaune et orange',
      description: 'Un sac vibrant avec des motifs inspirés du soleil.',
      image: 'https://gypsy-you.fr/wp-content/uploads/2019/11/IMG_0898.jpg',
      price: 90,
    },
  ];

  private bracelets = [
    {
      id: 1,
      name: 'Bracelet Perles Multicolores',
      description: 'Un bracelet vibrant avec des motifs traditionnels.',
      image:
        'https://i.etsystatic.com/17134460/r/il/60a044/2503359098/il_1080xN.2503359098_t8pm.jpg',
      price: 25,
    },
    {
      id: 2,
      name: 'Bracelet Traditionnel',
      description: 'Un bracelet artisanal avec des détails géométriques.',
      image:
        'https://i.etsystatic.com/37141176/r/il/218751/5407600639/il_570xN.5407600639_f1ho.jpg',
      price: 30,
    },
    {
      id: 3,
      name: 'Bracelet Tressé Rouge',
      description: 'Un bracelet chic et élégant avec des couleurs vives.',
      image: 'https://i.ebayimg.com/images/g/eIcAAOSwnnVhGXBU/s-l400.jpg',
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
