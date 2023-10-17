import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor() {}
  nom: string="";
  prenom: string="";
  email: string="";
  motDePasse: string="";
  confirmationMotDePasse: string="";


ngOnInit() {
}
signup() {}



}
