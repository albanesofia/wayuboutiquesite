import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private apiUrl = 'http://localhost:3000/api/comments'; // Backend URL

  constructor(private http: HttpClient) {}

  // Ajouter un commentaire
  addComment(comment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, comment);
  }

  // Récupérer tous les commentaires
  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
