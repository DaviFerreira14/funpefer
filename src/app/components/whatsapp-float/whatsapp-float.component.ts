import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsappFloatComponent {
  // Número do WhatsApp da fundação (formato internacional)
  private whatsappNumber = '5571988782294';
  
  // Mensagem padrão que será enviada
  private defaultMessage = 'Olá! Gostaria de saber mais sobre a Fundação Péricles Fernandes.';

  openWhatsApp() {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  }
}