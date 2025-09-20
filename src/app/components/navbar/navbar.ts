import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, NgbDropdownModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit, OnDestroy {
  protected isNavbarCollapsed = true;
  protected currentLanguage = 'pt'; 
  protected isScrolled = false;

  constructor(private i18nService: I18nService, private router: Router) {}

  ngOnInit() {
    this.checkScroll();
    // Sincronizar com o idioma atual do serviço
    this.currentLanguage = this.i18nService.getCurrentLanguage();
    
    // Escutar mudanças de idioma
    this.i18nService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.i18nService.setLanguage(lang);
    
    // Navegar para a URL com o prefixo de idioma usando Router
    const currentUrl = this.router.url;
    let newUrl = '';
    
    if (lang === 'pt') {
      // Para português, remover prefixo de idioma se existir
      newUrl = currentUrl.replace(/^\/[a-z]{2}/, '') || '/';
    } else {
      // Para outros idiomas, adicionar prefixo
      const pathWithoutLang = currentUrl.replace(/^\/[a-z]{2}/, '') || '/';
      newUrl = `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    }
    
    this.router.navigateByUrl(newUrl);
    console.log(`Language changed to ${lang}, navigating to: ${newUrl}`);
  }

  // Método para obter traduções
  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  getCurrentFlag(): string {
    const flags = {
      'pt': '/flags/brazil.svg',
      'en': '/flags/usa.svg',
      'es': '/flags/spain.svg'
    };
    return flags[this.currentLanguage as keyof typeof flags] || flags['pt'];
  }

  getCurrentLanguageLabel(): string {
    const labels = {
      'pt': 'PT',
      'en': 'EN',
      'es': 'ES'
    };
    return labels[this.currentLanguage as keyof typeof labels] || 'PT';
  }
}
