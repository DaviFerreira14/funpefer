import { Injectable } from '@angular/core';
import { emailConfig } from './email.config';

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneArea?: string;
  phoneNumber?: string;
  topic: string;
  howDidYouFind?: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  async sendContactEmail(data: ContactPayload): Promise<{ ok: boolean; message?: string }> {
    if (!emailConfig.endpoint) {
      return { ok: false, message: 'Endpoint de envio não configurado.' };
    }

    // Para compatibilidade com Formspree, utilizamos FormData
    const formData = new FormData();
    formData.append('first_name', data.firstName);
    formData.append('last_name', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', `${data.phoneArea || ''} ${data.phoneNumber || ''}`.trim());
    formData.append('topic', data.topic);
    formData.append('how', data.howDidYouFind || '');
    formData.append('message', data.message);
    // Recomenda-se configurar o destinatário no painel do Formspree.
    // Ainda assim, enviamos 'to' caso seja útil em alguma automação.
    formData.append('to', emailConfig.to);
    // Define Reply-To para facilitar respostas diretas.
    formData.append('_replyto', data.email);
    // Assunto do e-mail que você verá ao receber a mensagem.
    formData.append('_subject', `Contato - Funpefer: ${data.topic || 'Mensagem'}`);

    try {
      const res = await fetch(emailConfig.endpoint, {
        method: 'POST',
        headers: {
          // Não defina Content-Type manualmente para FormData
          'Accept': 'application/json'
        },
        body: formData
      });

      if (!res.ok) {
        let message = 'Falha ao enviar.';
        try {
          const data = await res.json();
          message = data?.error || message;
        } catch {
          const text = await res.text();
          message = text || message;
        }
        return { ok: false, message };
      }

      return { ok: true };
    } catch (err: any) {
      return { ok: false, message: err?.message || 'Erro de rede.' };
    }
  }
}