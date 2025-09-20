import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
  currentLanguage = 'pt';
  
  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    // Sincronizar com o idioma atual do serviço
    this.currentLanguage = this.i18nService.getCurrentLanguage();
    
    // Escutar mudanças de idioma
    this.i18nService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngAfterViewInit() {
    // Configurar animações de scroll reveal
    this.setupScrollReveal();
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
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

  private setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observar todos os elementos com data-scroll-reveal
    const elementsToReveal = document.querySelectorAll('[data-scroll-reveal]');
    elementsToReveal.forEach(element => {
      observer.observe(element);
    });
  }
}
