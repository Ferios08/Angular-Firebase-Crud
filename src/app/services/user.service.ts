import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: AngularFirestore,
  ) { }


  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }




  createUser(user) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("users")
        .add(user)
        .then(res => { }, err => reject(err));
    });
  }
  updateUser(user: User) {
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }


  deleteUser(user) {

    this.firestore
      .collection("users")
      .doc(user.payload.doc.id)
      .delete();
  }


  genID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
