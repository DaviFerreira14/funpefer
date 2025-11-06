import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

interface ActivityGroup {
  titleKey: string;
  descriptionKey: string;
  images: string[];
  type: 'carousel' | 'single';
}

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action.html',
  styleUrls: ['./action.css']
})
export class ActionComponent implements OnInit, AfterViewInit, OnDestroy {
  currentLanguage = 'pt';

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    // Sincronizar com o idioma atual do serviço
    this.currentLanguage = this.i18nService.getCurrentLanguage();
    
    // Escutar mudanças de idioma
    this.i18nService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    // Inicializar slides dos carrosséis
    this.activities.forEach((activity, index) => {
      if (activity.type === 'carousel') {
        this.currentSlides[`activity-${index}`] = 0;
      }
    });
    this.startAutoSlide();
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
  protected activities: ActivityGroup[] = [
    {
      titleKey: 'activities.agriculture.title',
      descriptionKey: 'activities.agriculture.description',
      images: ['agricultura.png', 'agricultura2.png', 'agricultura3.png', 'agricultura4.png', 'agricultura5.png', 'agricultura6.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.nutrition.title',
      descriptionKey: 'activities.nutrition.description',
      images: ['alimentação.png', 'alimentação2.png', 'alimentação3.png', 'alimentação4.png', 'alimentação5.png', 'alimentação6.png', 'alimentação7.png', 'alimentação8.png', 'alimentação9.png', 'alimentação10.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.capoeira.title',
      descriptionKey: 'activities.capoeira.description',
      images: ['capoeira2.png', 'capoeira4.png', 'capoeira5.png', 'capoeira6.png', 'capoeira7.png', 'capoeira8.png', 'capoeira9.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.theater.title',
      descriptionKey: 'activities.theater.description',
      images: ['teatro.png', 'teatro2.png', 'teatro3.png', 'teatro4.png', 'teatro5.png', 'teatro6.png', 'teatro7.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.cavalgada.title',
      descriptionKey: 'activities.cavalgada.description',
      images: ['cavalgada.png', 'cavalgada2.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.bayern.title',
      descriptionKey: 'activities.bayern.description',
      images: ['eqpbayern.png', 'eqpbayern2.png', 'eqpbayern3.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.team.title',
      descriptionKey: 'activities.team.description',
      images: ['equipe.png', 'equipe2.png', 'banca.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.education.title',
      descriptionKey: 'activities.education.description',
      images: ['estudo.png', 'estudo2.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.events.title',
      descriptionKey: 'activities.events.description',
      images: ['evento3.png'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.crafts.title',
      descriptionKey: 'activities.crafts.description',
      images: ['artesanato.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.singing.title',
      descriptionKey: 'activities.singing.description',
      images: ['canto.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.integration.title',
      descriptionKey: 'activities.integration.description',
      images: ['caras.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.dialogue.title',
      descriptionKey: 'activities.dialogue.description',
      images: ['conversa.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.leisure.title',
      descriptionKey: 'activities.leisure.description',
      images: ['lazer.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.gifts.title',
      descriptionKey: 'activities.gifts.description',
      images: ['presentes.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.headquarters.title',
      descriptionKey: 'activities.headquarters.description',
      images: ['sede-antiga.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.knitting.title',
      descriptionKey: 'activities.knitting.description',
      images: ['trico.png'],
      type: 'single'
    },
    {
      titleKey: 'activities.kitchen.title',
      descriptionKey: 'activities.kitchen.description',
      images: ['cozinha.jpg'],
      type: 'single'
    },
    {
      titleKey: 'activities.meetings.title',
      descriptionKey: 'activities.meetings.description',
      images: ['reunião.jpg', 'reuniao.jpg'],
      type: 'carousel'
    },
    {
      titleKey: 'activities.school.title',
      descriptionKey: 'activities.school.description',
      images: ['escola.jpg'],
      type: 'single'
    }
  ];

  protected currentSlides: { [key: string]: number } = {};

  private autoSlideIntervals: any[] = [];

  private startAutoSlide() {
    this.activities.forEach((activity, index) => {
      if (activity.type === 'carousel') {
        const intervalId = setInterval(() => {
          this.nextSlide(`activity-${index}`, activity.images.length);
        }, 3000);
        this.autoSlideIntervals.push(intervalId);
      }
    });
  }

  private stopAutoSlide() {
    this.autoSlideIntervals.forEach(intervalId => {
      clearInterval(intervalId);
    });
    this.autoSlideIntervals = [];
  }

  ngAfterViewInit(): void {
    this.initScrollRevealAnimations();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(activityKey: string, totalImages: number): void {
    this.currentSlides[activityKey] = (this.currentSlides[activityKey] + 1) % totalImages;
  }

  prevSlide(activityKey: string, totalImages: number): void {
    this.currentSlides[activityKey] = this.currentSlides[activityKey] === 0 
      ? totalImages - 1 
      : this.currentSlides[activityKey] - 1;
  }

  goToSlide(activityKey: string, slideIndex: number): void {
    this.currentSlides[activityKey] = slideIndex;
  }

  private initScrollRevealAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('[data-scroll-reveal]');
    elementsToReveal.forEach(element => {
      observer.observe(element);
    });
  }
}
