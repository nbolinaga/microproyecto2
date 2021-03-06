import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Reserva } from '../interfaces/reserva';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private reservaCollection: AngularFirestoreCollection<Reserva>;
  constructor(private firestore: AngularFirestore) {
    this.reservaCollection = this.firestore.collection<Reserva>('reservas');
  }

  getAllReservas(): Observable<Reserva[]> {
    return this.reservaCollection.snapshotChanges().pipe(
      map(posts => {
        return posts.map(post => ({
          pelicula_id: posts.payload.doc.pelicula_id,
          ...posts.payload.doc.data()
        }));
      })
    );
  }
}
