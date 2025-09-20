import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy, AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initScrollRevealAnimations();
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initScrollRevealAnimations(): void {
    // Configuração do Intersection Observer para animações de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Opcional: parar de observar o elemento após a animação
          this.observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todos os elementos com data-scroll-reveal
    const elementsToReveal = document.querySelectorAll('[data-scroll-reveal]');
    elementsToReveal.forEach(element => {
      this.observer.observe(element);
    });

    // Animação especial para estatísticas com contador
    this.animateCounters();
  }

  private animateCounters(): void {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach((counter: any) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000; // 2 segundos
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      // Iniciar animação quando o elemento estiver visível
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      counterObserver.observe(counter);
    });
  }

  // Método para scroll suave para seções
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Método para abrir links externos
  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
