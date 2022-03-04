import { ViaCepApiService } from './../../services/via-cep-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss'],
})
export class FormContatoComponent implements OnInit {
  constructor(private cepService: ViaCepApiService) {}

  ngOnInit(): void {
    this.getViaCep('89023240');
  }

  getViaCep(cep: string) {
    this.cepService.getCep(cep).subscribe((response) => {
      console.log(response);
    });
  }
}
