import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  protected currentYear: number;
  currentLanguage = 'pt';

  constructor(private i18nService: I18nService) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    // Sincronizar com o idioma atual do serviço
    this.currentLanguage = this.i18nService.getCurrentLanguage();
    
    // Escutar mudanças de idioma
    this.i18nService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  getHomeUrl(): string {
    if (this.currentLanguage === 'pt') {
      return '/';
    } else if (this.currentLanguage === 'es') {
      return '/es';
    } else {
      return `/${this.currentLanguage}`;
    }
  }

  getAboutUrl(): string {
    if (this.currentLanguage === 'pt') {
      return '/sobre';
    } else if (this.currentLanguage === 'es') {
      return '/es/about';
    } else {
      return `/${this.currentLanguage}/about`;
    }
  }

  getActionUrl(): string {
    if (this.currentLanguage === 'pt') {
      return '/acao';
    } else if (this.currentLanguage === 'es') {
      return '/es/action';
    } else {
      return `/${this.currentLanguage}/action`;
    }
  }

  getContactUrl(): string {
    if (this.currentLanguage === 'pt') {
      return '/contato';
    } else if (this.currentLanguage === 'es') {
      return '/es/contact';
    } else {
      return `/${this.currentLanguage}/contact`;
    }
  }
}
