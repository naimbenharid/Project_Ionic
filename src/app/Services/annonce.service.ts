import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }
  addAnnonce(annonce:Annonce){
    return this.http.post("",annonce)
  }
  getAllAnnonces(){
    return this.http.get("")

    }
    getAnonnce(idDocum: string) {
      return this.http.get<Annonce>(`${idDocum}.json`);
    }
    deleteAnnonce(idDocum: string){
      return this.http.delete(`/${idDocum}.json`)
    }
  }
