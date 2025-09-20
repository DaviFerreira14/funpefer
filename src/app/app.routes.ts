import { Routes } from '@angular/router';
import { LanguageGuard } from './guards/language.guard';

export const routes: Routes = [
  // Rotas padrão (português) sem prefixo - DEVEM VIR PRIMEIRO
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  },
  {
    path: 'es',
    canActivate: [LanguageGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
      },
      {
        path: 'about',
        loadComponent: () => import('./components/about/about').then(m => m.About)
      },
      {
        path: 'action',
        loadComponent: () => import('./components/action/action').then(m => m.ActionComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent)
      }
    ]
  },
  {
    path: 'sobre',
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },
  {
    path: 'acao',
    loadComponent: () => import('./components/action/action').then(m => m.ActionComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent)
  },
  // Rotas em inglês sem prefixo para compatibilidade
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },
  {
    path: 'action',
    loadComponent: () => import('./components/action/action').then(m => m.ActionComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent)
  },
  // Rotas com prefixo de idioma específico (pt/en) - DEVEM VIR DEPOIS
  {
    path: 'pt',
    canActivate: [LanguageGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
      },
      {
        path: 'sobre',
        loadComponent: () => import('./components/about/about').then(m => m.About)
      },
      {
        path: 'acao',
        loadComponent: () => import('./components/action/action').then(m => m.ActionComponent)
      },
      {
        path: 'contato',
        loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent)
      }
    ]
  },
  {
    path: 'en',
    canActivate: [LanguageGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
      },
      {
        path: 'about',
        loadComponent: () => import('./components/about/about').then(m => m.About)
      },
      {
        path: 'action',
        loadComponent: () => import('./components/action/action').then(m => m.ActionComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
