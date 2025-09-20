import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { I18nService } from '../services/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  
  constructor(
    private i18nService: I18nService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const lang = route.params['lang'];
    
    // Se há um parâmetro de idioma na rota
    if (lang) {
      // Verificar se é um idioma suportado
      const supportedLanguages = ['pt', 'en'];
      
      if (supportedLanguages.includes(lang)) {
        // Definir o idioma no serviço
        this.i18nService.setLanguage(lang);
        return true;
      } else {
        // Redirecionar para a rota padrão se o idioma não for suportado
        this.router.navigate(['/']);
        return false;
      }
    }
    
    // Se não há parâmetro de idioma, usar o idioma padrão
    return true;
  }
}