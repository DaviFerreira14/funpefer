import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [language: string]: Translation;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = new BehaviorSubject<string>('pt');
  public currentLanguage$ = this.currentLanguage.asObservable();
  private translations: Translations = {
    pt: {
      'navbar.home': 'Início',
      'navbar.about': 'Sobre',
      'navbar.action': 'Ações Sociais',
      'navbar.contact': 'Contato',
      
      // Home page translations
      'home.hero.title': 'FUNDAÇÃO PÉRICLES FERNANDES',
      'home.hero.subtitle': 'Transformando vidas há mais de 25 anos através do amor, educação e cidadania',
      'home.hero.knowHistory': 'Conheça Nossa História',
      'home.hero.seeActions': 'Veja Nossas Ações',
      'home.hero.videoTitle': 'Vídeo da Fundação Péricles Fernandes',
      
      'home.mission.title': 'Nossa Missão',
      'home.mission.description': 'Promover o desenvolvimento integral de crianças, adolescentes e jovens em situação de vulnerabilidade social, oferecendo oportunidades de educação, cultura, esporte e cidadania.',
      'home.mission.beneficiaries': 'Beneficiários Atendidos',
      'home.mission.years': 'Anos de Atuação',
      'home.mission.projects': 'Projetos Ativos',
      
      'home.activities.title': 'Nossas Atividades',
      'home.activities.capoeira': 'Capoeira',
      'home.activities.capoeiraDesc': 'Arte, cultura e disciplina para todas as idades',
      'home.activities.theater': 'Teatro',
      'home.activities.theaterDesc': 'Expressão artística e desenvolvimento pessoal',
      'home.activities.music': 'Música',
      'home.activities.musicDesc': 'Harmonia que transforma e inspira',
      'home.activities.food': 'Alimentação',
      'home.activities.foodDesc': 'Nutrição e cuidado com a comunidade',
      'home.activities.sports': 'Esportes',
      'home.activities.sportsDesc': 'Saúde, disciplina e trabalho em equipe',
      
      'home.impact.title': 'Nosso Impacto',
      'home.impact.description': 'Através de nossos programas, conseguimos transformar a realidade de centenas de famílias, oferecendo esperança e oportunidades para um futuro melhor.',
      'home.impact.education': 'Educação de qualidade para todos',
      'home.impact.culture': 'Preservação da cultura local',
      'home.impact.citizenship': 'Formação para a cidadania',
      'home.impact.opportunities': 'Criação de oportunidades',
      
      'home.cta.title': 'Faça Parte da Nossa História',
      'home.cta.description': 'Sua contribuição pode transformar vidas. Junte-se a nós nessa missão de amor e esperança.',
      'home.cta.donate': 'Faça uma Doação',
      'home.cta.volunteer': 'Seja Voluntário',
      
      // About page translations
      'about.hero.title': 'PÉRICLES FERNANDES FOUNDATION',
      'about.hero.subtitle': 'Cuidar não é carregar, é caminhar junto!',
      'about.hero.logoAlt': 'Logo Fundação Péricles Fernandes',
      
      'about.introduction.welcome': 'Sejam todos muito bem-vindos! Meu nome é Péricles Fernandes, tenho 75 anos, sou aposentado, humanista, amante da vida, dos animais e das pessoas. Com orgulho, presido a Fundação Péricles Fernandes, uma entidade sem fins lucrativos e reconhecida como de utilidade pública pela Lei Municipal 501/96.',
      'about.introduction.history': 'Atuamos há mais de 25 anos com o compromisso de promover dignidade, educação e cidadania em nossa comunidade. A Fundação está localizada na Rodovia BA-093, Km 11, na região de Palmares, município de Simões Filho (BA).',
      'about.introduction.imageAlt': 'Péricles Fernandes',
      'about.introduction.imageCaption': 'Péricles Fernandes - Presidente da Fundação',
      
      'about.story.arrival': 'Cheguei a Palmares em 1984, onde, na época, mantinha uma churrascaria à beira da rodovia. Foi ali que testemunhei uma triste realidade: crianças, idosos e animais sendo atropelados ao tentar atravessar a pista para chegar à escola do outro lado. Ao questionar os funcionários sobre aquelas tragédias, ouvi algo que jamais esqueci: "As crianças vão à escola acompanhadas por seus avós e os cachorros vão junto. E, muitas vezes, um dos três acaba atropelado."',
      'about.story.decision': 'Diante disso, me perguntei: por que não construir uma escola aqui mesmo, na comunidade? Apesar da negativa inicial das autoridades municipais, decidi agir. Construí com recursos próprios a escola que viria a transformar a vida de muitas famílias.',
      'about.story.imageAlt': 'Estudos na Fundação',
      
      'about.school.inauguration': 'A inauguração foi uma verdadeira celebração! Hoje, essa escola é a Escola Municipal Zumbi dos Palmares, onde filhos e filhas dos primeiros alunos já estão matriculados. No início, cedi o prédio gratuitamente, enquanto a prefeitura fornecia professores, funcionários e material escolar. Essa foi apenas a primeira de muitas ações.',
      'about.school.leadership': 'Sem nenhuma pretensão política, me tornei uma liderança comunitária, movido apenas pelo desejo de ajudar. Com o apoio de voluntários e parceiros, desenvolvemos inúmeros projetos sociais, como:',
      'about.school.imageAlt': 'Educação na Fundação',
      
      'about.projects.basicBaskets': 'Doação de cestas básicas e peixes na Semana Santa',
      'about.projects.inssSupport': 'Acompanhamento de idosos e cidadãos ao INSS para aposentadoria',
      'about.projects.healthTransport': 'Transporte para tratamento de saúde, inclusive para hemofílicos',
      'about.projects.sportsGroups': 'Criação de times de futebol e grupos de capoeira',
      'about.projects.culturalEvents': 'Realização de festas populares, corridas de argolinhas e eventos culturais',
      'about.projects.courses': 'Oferta de cursos de doces, salgados, reforço escolar e alfabetização de jovens e adultos (EJA, Mova Brasil)',
      'about.projects.daycare': 'Construção de uma creche para 40 crianças em tempo integral, com cinco refeições diárias',
      'about.projects.imageAlt': 'Eventos Comunitários',
      
      'about.philosophy.freire': 'Como dizia Paulo Freire: "Ninguém liberta ninguém, ninguém se liberta sozinho: os homens se libertam em comunhão." Tenho plena convicção de que nossa caminhada só tem sentido em comunidade.',
      'about.philosophy.dream': 'Por isso, compartilho com vocês mais um grande sonho: construir uma Casa de Repouso para Idosos, um espaço de amor, cuidado e respeito àqueles que tanto já fizeram por nós.',
      'about.philosophy.imageAlt': 'Alimentação na Creche',
      
      'about.callToAction.invitation': 'Convido você a fazer parte dessa missão. Sua colaboração, seja ela qual for, fará diferença. E, quando quiser, venha nos visitar. Queremos que veja, com seus próprios olhos, o impacto real da solidariedade.',
      'about.callToAction.thanks': 'Deus seja louvado. Muito obrigado a todos.',
      'about.callToAction.imageAlt': 'Ações Sociais',
      
      'about.signature.name': 'Péricles Fernandes',
      'about.signature.title': 'Presidente da Fundação Péricles Fernandes',
      'about.signature.cnpj': 'CNPJ: 85.476.900/0001-77',
      
      // Action page translations
      'action.hero.title': 'FUNDAÇÃO PÉRICLES FERNANDES EM AÇÃO',
      'action.hero.subtitle': 'Conheça todas as atividades e projetos que transformam vidas em nossa comunidade',
      
      'action.carousel.previous': 'Imagem anterior de',
      'action.carousel.next': 'Próxima imagem de',
      'action.carousel.goTo': 'Ir para imagem',
      'action.carousel.of': 'de',
      
      'action.cta.title': 'Faça Parte da Nossa Missão',
      'action.cta.description': 'Junte-se a nós e ajude a transformar vidas através de nossas ações sociais. Sua participação faz toda a diferença!',
      'action.cta.contact': 'Entre em Contato',
      'action.cta.learnMore': 'Saiba Mais',
      
      // Activities translations
      'activities.agriculture.title': 'Agricultura Sustentável',
      'activities.agriculture.description': 'Promovemos práticas agrícolas sustentáveis, ensinando técnicas de cultivo orgânico, compostagem e aproveitamento de recursos naturais. Nossos projetos incluem hortas comunitárias, oficinas de agricultura familiar e programas de segurança alimentar.',
      
      'activities.nutrition.title': 'Alimentação e Nutrição',
      'activities.nutrition.description': 'Desenvolvemos programas de educação nutricional, distribuição de alimentos e capacitação culinária. Trabalhamos para combater a fome e promover hábitos alimentares saudáveis em nossa comunidade.',
      
      'activities.capoeira.title': 'Capoeira e Cultura',
      'activities.capoeira.description': 'A capoeira é uma das nossas principais atividades culturais, promovendo a preservação da cultura afro-brasileira, disciplina, respeito e integração social. Oferecemos aulas para todas as idades.',
      
      'activities.theater.title': 'Teatro e Expressão',
      'activities.theater.description': 'Nossos grupos de teatro desenvolvem a criatividade, autoestima e habilidades de comunicação. Realizamos apresentações que abordam temas sociais importantes e promovem a reflexão comunitária.',
      
      'activities.cavalgada.title': 'Cavalgada Comunitária',
      'activities.cavalgada.description': 'Organizamos cavalgadas que fortalecem os laços comunitários e celebram nossas tradições locais. Estes eventos promovem a união e o orgulho da nossa comunidade.',
      
      'activities.bayern.title': 'Equipe Bayern',
      'activities.bayern.description': 'Nossa equipe esportiva Bayern desenvolve talentos no futebol, promovendo disciplina, trabalho em equipe e oportunidades para jovens da comunidade.',
      
      'activities.team.title': 'Nossa Equipe',
      'activities.team.description': 'Conheça os profissionais dedicados que fazem a diferença em nossa fundação, trabalhando incansavelmente para transformar vidas e fortalecer nossa comunidade.',
      
      'activities.education.title': 'Educação e Estudo',
      'activities.education.description': 'Oferecemos programas educacionais, reforço escolar e atividades de apoio ao aprendizado, garantindo que crianças e jovens tenham acesso a uma educação de qualidade.',
      
      'activities.events.title': 'Eventos Especiais',
      'activities.events.description': 'Realizamos diversos eventos ao longo do ano que celebram conquistas, promovem a integração e fortalecem os vínculos entre todos os participantes de nossos programas.',
      
      'activities.music.title': 'Música e Banda',
      'activities.music.description': 'Nossa banda musical desenvolve talentos artísticos e promove a cultura através da música, oferecendo oportunidades para jovens expressarem sua criatividade.',
      
      'activities.crafts.title': 'Artesanato',
      'activities.crafts.description': 'Oficinas de artesanato que desenvolvem habilidades manuais, criatividade e podem gerar renda para as famílias participantes.',
      
      'activities.singing.title': 'Canto e Música',
      'activities.singing.description': 'Aulas de canto que desenvolvem talentos vocais e promovem a autoestima através da expressão musical.',
      
      'activities.integration.title': 'Integração Social',
      'activities.integration.description': 'Atividades que promovem a integração entre diferentes grupos, fortalecendo laços sociais e construindo uma comunidade mais unida.',
      
      'activities.dialogue.title': 'Diálogo e Conversa',
      'activities.dialogue.description': 'Espaços de diálogo onde promovemos conversas construtivas sobre temas importantes para o desenvolvimento pessoal e social.',
      
      'activities.leisure.title': 'Atividades de Lazer',
      'activities.leisure.description': 'Proporcionamos momentos de lazer e diversão que contribuem para o bem-estar físico e mental de todos os participantes.',
      
      'activities.gifts.title': 'Distribuição de Presentes',
      'activities.gifts.description': 'Em datas especiais, realizamos a distribuição de presentes para crianças e famílias, espalhando alegria e carinho.',
      
      'activities.headquarters.title': 'Nossa Sede Histórica',
      'activities.headquarters.description': 'Conheça a história da nossa sede antiga, que representa as raízes e a evolução da Fundação Péricles Fernandes ao longo dos anos.',
      
      'activities.knitting.title': 'Tricô e Crochê',
      'activities.knitting.description': 'Oficinas de tricô e crochê que ensinam técnicas tradicionais, promovem a socialização e podem gerar renda complementar.',
      
      'activities.liveMusic.title': 'Música ao Vivo',
      'activities.liveMusic.description': 'Apresentações musicais que animam nossos eventos e celebram o talento local, criando momentos especiais de união.',
      
      'activities.kitchen.title': 'Cozinha Comunitária',
      'activities.kitchen.description': 'Nossa cozinha comunitária prepara refeições nutritivas e promove a segurança alimentar, sendo um espaço de cuidado e acolhimento.',
      
      'activities.meetings.title': 'Reuniões e Planejamento',
      'activities.meetings.description': 'Espaços de reunião onde planejamos nossas ações, discutimos projetos e fortalecemos a participação comunitária.',
      
      'activities.school.title': 'Educação Escolar',
      'activities.school.description': 'Apoiamos a educação formal através de parcerias com escolas locais, oferecendo suporte educacional e infraestrutura adequada.',
      
      // Contact page translations
      'contact.title': 'CONTATO',
      'contact.subtitle': 'Entre em contato conosco',
      'contact.firstName': 'Nome',
      'contact.lastName': 'Sobrenome',
      'contact.email': 'E-mail',
      'contact.phoneNumber': 'Telefone',
      'contact.phoneArea': 'Área',
      'contact.topic': 'Tópico',
      'contact.howFound': 'Como nos encontrou?',
      'contact.message': 'Feedback / Comentários',
      'contact.messagePlaceholder': 'Digite sua mensagem aqui...',
      'contact.charactersRemaining': 'Máximo de 3000 caracteres permitidos. Atualmente inserindo',
      'contact.submit': 'Enviar',
      
      // Contact form options
      'contact.topic.select': 'Selecione um tópico',
      'contact.topic.general': 'Informações Gerais',
      'contact.topic.donation': 'Doações',
      'contact.topic.volunteer': 'Voluntariado',
      'contact.topic.partnerships': 'Parcerias',
      'contact.topic.events': 'Eventos',
      'contact.topic.others': 'Outros',
      
      'contact.howFound.select': 'Selecione uma opção',
      'contact.howFound.google': 'Google',
      'contact.howFound.facebook': 'Facebook',
      'contact.howFound.instagram': 'Instagram',
      'contact.howFound.friends': 'Amigos/Família',
      'contact.howFound.events': 'Eventos',
      'contact.howFound.others': 'Outros',
      
      // Donation button translations
      'donate.button': 'DOE',
      'donate.modal.title': 'Doe',
      'donate.modal.subtitle': 'e faça parte da nossa causa',
      'donate.modal.pixTitle': 'Doação via PIX',
      'donate.modal.pixKey': 'Chave PIX (CNPJ):',
      'donate.modal.copyButton': 'Copiar chave PIX',
      'donate.modal.copied': 'Copiado!',
      'donate.modal.beneficiary': 'Beneficiário: Fundação Péricles Fernandes',
      'donate.modal.cnpj': 'CNPJ: 00.854.769/0001-77',
      'donate.modal.bank': 'Banco: Pag Bank (290)',
      'donate.modal.qrTitle': 'QR Code para Doação',
      'donate.modal.qrInstruction': 'Escaneie o QR Code com seu aplicativo bancário para fazer a doação',
      'donate.modal.questionsTitle': 'Dúvidas sobre doações?',
      'donate.modal.vaquinhaTitle': 'Vaquinha Online',
      'donate.modal.vaquinhaDescription': 'Participe da nossa campanha de arrecadação online e ajude a construir um lar com amor e dignidade para nossos idosos.',
      'donate.modal.vaquinhaButton': 'Acessar Vaquinha Online',
      
      // Footer translations
      'footer.foundation.name': 'Fundação Pericles Fernandes',
      'footer.foundation.motto': 'Cuidar não é carregar, é caminhar junto!',
      'footer.quickLinks.title': 'Links Rápidos',
      'footer.quickLinks.home': 'Home',
      'footer.quickLinks.about': 'Sobre',
      'footer.quickLinks.action': 'Funpefer em Ação',
      'footer.quickLinks.contact': 'Contato',
      'footer.contact.title': 'Contato',
      'footer.contact.address': 'Endereço: Rodovia BA093 km 11 número 210, CEP: 43700-000 - Simoes Filho/BA',
      'footer.contact.phone': 'Telefone: 71 98878-2294',
      'footer.contact.email': 'Email: contato@funpefer.org',
      'footer.developedBy': 'Desenvolvido por',
      'footer.copyright': 'Fundação Pericles Fernandes. Todos os direitos reservados.'
    },
    en: {
      'navbar.home': 'Home',
      'navbar.about': 'About',
      'navbar.action': 'Social Actions',
      'navbar.contact': 'Contact',
      
      // Home page translations
      'home.hero.title': 'PÉRICLES FERNANDES FOUNDATION',
      'home.hero.subtitle': 'Transforming lives for over 25 years through love, education and citizenship',
      'home.hero.knowHistory': 'Know Our History',
      'home.hero.seeActions': 'See Our Actions',
      'home.hero.videoTitle': 'Péricles Fernandes Foundation Video',
      
      'home.mission.title': 'Our Mission',
      'home.mission.description': 'To promote the integral development of children, adolescents and young people in situations of social vulnerability, offering opportunities for education, culture, sports and citizenship.',
      'home.mission.beneficiaries': 'Beneficiaries Served',
      'home.mission.years': 'Years of Operation',
      'home.mission.projects': 'Active Projects',
      
      'home.activities.title': 'Our Activities',
      'home.activities.capoeira': 'Capoeira',
      'home.activities.capoeiraDesc': 'Art, culture and discipline for all ages',
      'home.activities.theater': 'Theater',
      'home.activities.theaterDesc': 'Artistic expression and personal development',
      'home.activities.music': 'Music',
      'home.activities.musicDesc': 'Harmony that transforms and inspires',
      'home.activities.food': 'Food',
      'home.activities.foodDesc': 'Nutrition and community care',
      'home.activities.sports': 'Sports',
      'home.activities.sportsDesc': 'Health, discipline and teamwork',
      
      'home.impact.title': 'Our Impact',
      'home.impact.description': 'Through our programs, we manage to transform the reality of hundreds of families, offering hope and opportunities for a better future.',
      'home.impact.education': 'Quality education for all',
      'home.impact.culture': 'Preservation of local culture',
      'home.impact.citizenship': 'Citizenship formation',
      'home.impact.opportunities': 'Creating opportunities',
      
      'home.cta.title': 'Be Part of Our Story',
      'home.cta.description': 'Your contribution can transform lives. Join us in this mission of love and hope.',
      'home.cta.donate': 'Make a Donation',
      'home.cta.volunteer': 'Be a Volunteer',
      
      // About page translations
      'about.hero.title': 'PÉRICLES FERNANDES FOUNDATION',
      'about.hero.subtitle': 'Caring is not carrying, it\'s walking together!',
      'about.hero.logoAlt': 'Péricles Fernandes Foundation Logo',
      
      'about.introduction.welcome': 'Welcome everyone! My name is Péricles Fernandes, I am 75 years old, retired, humanist, lover of life, animals and people. With pride, I preside over the Péricles Fernandes Foundation, a non-profit entity recognized as of public utility by Municipal Law 501/96.',
      'about.introduction.history': 'We have been operating for over 25 years with the commitment to promote dignity, education and citizenship in our community. The Foundation is located on Highway BA-093, Km 11, in the Palmares region, municipality of Simões Filho (BA).',
      'about.introduction.imageAlt': 'Péricles Fernandes',
      'about.introduction.imageCaption': 'Péricles Fernandes - Foundation President',
      
      'about.story.arrival': 'I arrived in Palmares in 1984, where, at the time, I maintained a barbecue restaurant by the roadside. It was there that I witnessed a sad reality: children, elderly people and animals being run over while trying to cross the road to get to school on the other side. When I questioned employees about those tragedies, I heard something I never forgot: "Children go to school accompanied by their grandparents and dogs go along. And often one of the three ends up being run over."',
      'about.story.decision': 'Faced with this, I asked myself: why not build a school right here in the community? Despite the initial refusal from municipal authorities, I decided to act. I built with my own resources the school that would transform the lives of many families.',
      'about.story.imageAlt': 'Studies at the Foundation',
      
      'about.school.inauguration': 'The inauguration was a true celebration! Today, this school is the Zumbi dos Palmares Municipal School, where children of the first students are already enrolled. Initially, I provided the building for free, while the city hall provided teachers, staff and school supplies. This was just the first of many actions.',
      'about.school.leadership': 'Without any political pretension, I became a community leader, driven only by the desire to help. With the support of volunteers and partners, we developed numerous social projects, such as:',
      'about.school.imageAlt': 'Education at the Foundation',
      
      'about.projects.basicBaskets': 'Donation of basic food baskets and fish during Easter Week',
      'about.projects.inssSupport': 'Accompanying elderly and citizens to INSS for retirement',
      'about.projects.healthTransport': 'Transportation for health treatment, including for hemophiliacs',
      'about.projects.sportsGroups': 'Creation of soccer teams and capoeira groups',
      'about.projects.culturalEvents': 'Holding popular festivals, ring races and cultural events',
      'about.projects.courses': 'Offering courses in sweets, snacks, school reinforcement and youth and adult literacy (EJA, Mova Brasil)',
      'about.projects.daycare': 'Construction of a daycare for 40 children full-time, with five daily meals',
      'about.projects.imageAlt': 'Community Events',
      
      'about.philosophy.freire': 'As Paulo Freire said: "No one liberates anyone, no one liberates themselves alone: men liberate themselves in communion." I have full conviction that our journey only makes sense in community.',
      'about.philosophy.dream': 'Therefore, I share with you another great dream: to build a Nursing Home for the Elderly, a space of love, care and respect for those who have already done so much for us.',
      'about.philosophy.imageAlt': 'Daycare Feeding',
      
      'about.callToAction.invitation': 'I invite you to be part of this mission. Your collaboration, whatever it may be, will make a difference. And, whenever you want, come visit us. We want you to see, with your own eyes, the real impact of solidarity.',
      'about.callToAction.thanks': 'God be praised. Thank you all very much.',
      'about.callToAction.imageAlt': 'Social Actions',
      
      'about.signature.name': 'Péricles Fernandes',
      'about.signature.title': 'President of Péricles Fernandes Foundation',
      'about.signature.cnpj': 'CNPJ: 85.476.900/0001-77',
      
      // Action page translations
      'action.hero.title': 'PÉRICLES FERNANDES FOUNDATION IN ACTION',
      'action.hero.subtitle': 'Discover all the activities and projects that transform lives in our community',
      
      'action.carousel.previous': 'Previous image of',
      'action.carousel.next': 'Next image of',
      'action.carousel.goTo': 'Go to image',
      'action.carousel.of': 'of',
      
      'action.cta.title': 'Be Part of Our Mission',
      'action.cta.description': 'Join us and help transform lives through our social actions. Your participation makes all the difference!',
      'action.cta.contact': 'Get in Touch',
      'action.cta.learnMore': 'Learn More',
      
      // Activities translations
      'activities.agriculture.title': 'Sustainable Agriculture',
      'activities.agriculture.description': 'We promote sustainable agricultural practices, teaching organic farming techniques, composting, and natural resource utilization. Our projects include community gardens, family farming workshops, and food security programs.',
      
      'activities.nutrition.title': 'Food and Nutrition',
      'activities.nutrition.description': 'We develop nutritional education programs, food distribution, and culinary training. We work to combat hunger and promote healthy eating habits in our community.',
      
      'activities.capoeira.title': 'Capoeira and Culture',
      'activities.capoeira.description': 'Capoeira is one of our main cultural activities, promoting the preservation of Afro-Brazilian culture, discipline, respect, and social integration. We offer classes for all ages.',
      
      'activities.theater.title': 'Theater and Expression',
      'activities.theater.description': 'Our theater groups develop creativity, self-esteem, and communication skills. We perform presentations that address important social themes and promote community reflection.',
      
      'activities.cavalgada.title': 'Community Horseback Riding',
      'activities.cavalgada.description': 'We organize horseback rides that strengthen community bonds and celebrate our local traditions. These events promote unity and pride in our community.',
      
      'activities.bayern.title': 'Bayern Team',
      'activities.bayern.description': 'Our Bayern sports team develops football talents, promoting discipline, teamwork, and opportunities for young people in the community.',
      
      'activities.team.title': 'Our Team',
      'activities.team.description': 'Meet the dedicated professionals who make a difference in our foundation, working tirelessly to transform lives and strengthen our community.',
      
      'activities.education.title': 'Education and Study',
      'activities.education.description': 'We offer educational programs, tutoring, and learning support activities, ensuring that children and youth have access to quality education.',
      
      'activities.events.title': 'Special Events',
      'activities.events.description': 'We hold various events throughout the year that celebrate achievements, promote integration, and strengthen bonds among all participants in our programs.',
      
      'activities.music.title': 'Music and Band',
      'activities.music.description': 'Our musical band develops artistic talents and promotes culture through music, offering opportunities for young people to express their creativity.',
      
      'activities.crafts.title': 'Handicrafts',
      'activities.crafts.description': 'Handicraft workshops that develop manual skills, creativity, and can generate income for participating families.',
      
      'activities.singing.title': 'Singing and Music',
      'activities.singing.description': 'Singing lessons that develop vocal talents and promote self-esteem through musical expression.',
      
      'activities.integration.title': 'Social Integration',
      'activities.integration.description': 'Activities that promote integration between different groups, strengthening social bonds and building a more united community.',
      
      'activities.dialogue.title': 'Dialogue and Conversation',
      'activities.dialogue.description': 'Dialogue spaces where we promote constructive conversations about important topics for personal and social development.',
      
      'activities.leisure.title': 'Leisure Activities',
      'activities.leisure.description': 'We provide moments of leisure and fun that contribute to the physical and mental well-being of all participants.',
      
      'activities.gifts.title': 'Gift Distribution',
      'activities.gifts.description': 'On special dates, we distribute gifts to children and families, spreading joy and affection.',
      
      'activities.headquarters.title': 'Our Historic Headquarters',
      'activities.headquarters.description': 'Learn about the history of our old headquarters, which represents the roots and evolution of the Péricles Fernandes Foundation over the years.',
      
      'activities.knitting.title': 'Knitting and Crochet',
      'activities.knitting.description': 'Knitting and crochet workshops that teach traditional techniques, promote socialization, and can generate supplementary income.',
      
      'activities.liveMusic.title': 'Live Music',
      'activities.liveMusic.description': 'Musical performances that enliven our events and celebrate local talent, creating special moments of unity.',
      
      'activities.kitchen.title': 'Community Kitchen',
      'activities.kitchen.description': 'Our community kitchen prepares nutritious meals and promotes food security, being a space of care and welcome.',
      
      'activities.meetings.title': 'Meetings and Planning',
      'activities.meetings.description': 'Meeting spaces where we plan our actions, discuss projects, and strengthen community participation.',
      
      'activities.school.title': 'School Education',
      'activities.school.description': 'We support formal education through partnerships with local schools, offering educational support and adequate infrastructure.',
      
      // Contact page translations
      'contact.title': 'CONTACT',
      'contact.subtitle': 'Get in touch with us',
      'contact.firstName': 'First Name',
      'contact.lastName': 'Last Name',
      'contact.email': 'Email',
      'contact.phoneNumber': 'Phone',
      'contact.phoneArea': 'Area',
      'contact.topic': 'Topic',
      'contact.howFound': 'How did you find us?',
      'contact.message': 'Feedback / Comments',
      'contact.messagePlaceholder': 'Type your message here...',
      'contact.charactersRemaining': 'Maximum 3000 characters allowed. Currently typing',
      'contact.submit': 'Submit',
      
      // Contact form options
      'contact.topic.select': 'Select a topic',
      'contact.topic.general': 'General Information',
      'contact.topic.donation': 'Donations',
      'contact.topic.volunteer': 'Volunteering',
      'contact.topic.partnerships': 'Partnerships',
      'contact.topic.events': 'Events',
      'contact.topic.others': 'Others',
      
      'contact.howFound.select': 'Select an option',
      'contact.howFound.google': 'Google',
      'contact.howFound.facebook': 'Facebook',
      'contact.howFound.instagram': 'Instagram',
      'contact.howFound.friends': 'Friends/Family',
      'contact.howFound.events': 'Events',
      'contact.howFound.others': 'Others',
      
      // Donation button translations
      'donate.button': 'DONATE',
      'donate.modal.title': 'Donate',
      'donate.modal.subtitle': 'and be part of our cause',
      'donate.modal.pixTitle': 'Donation via PIX',
      'donate.modal.pixKey': 'PIX Key (CNPJ):',
      'donate.modal.copyButton': 'Copy PIX key',
      'donate.modal.copied': 'Copied!',
      'donate.modal.beneficiary': 'Beneficiary: Péricles Fernandes Foundation',
      'donate.modal.cnpj': 'CNPJ: 00.854.769/0001-77',
      'donate.modal.bank': 'Bank: Pag Bank (290)',
      'donate.modal.qrTitle': 'QR Code for Donation',
      'donate.modal.qrInstruction': 'Scan the QR Code with your banking app to make the donation',
      'donate.modal.questionsTitle': 'Questions about donations?',
      'donate.modal.vaquinhaTitle': 'Online Fundraising',
      'donate.modal.vaquinhaDescription': 'Join our online fundraising campaign and help build a home with love and dignity for our elderly.',
      'donate.modal.vaquinhaButton': 'Access Online Fundraising',
      
      // Footer translations
      'footer.foundation.name': 'Péricles Fernandes Foundation',
      'footer.foundation.motto': 'Caring is not carrying, it\'s walking together!',
      'footer.quickLinks.title': 'Quick Links',
      'footer.quickLinks.home': 'Home',
      'footer.quickLinks.about': 'About',
      'footer.quickLinks.action': 'Social Actions',
      'footer.quickLinks.contact': 'Contact',
      'footer.contact.title': 'Contact',
      'footer.contact.address': 'Address: BA093 Highway km 11 number 210, ZIP: 43700-000 - Simoes Filho/BA',
      'footer.contact.phone': 'Phone: 71 98878-2294',
      'footer.contact.email': 'Email: contato@funpefer.org',
      'footer.developedBy': 'Developed by',
      'footer.copyright': 'Péricles Fernandes Foundation. All rights reserved.'
    },
    es: {
      'navbar.home': 'Inicio',
      'navbar.about': 'Acerca de',
      'navbar.action': 'Acciones Sociales',
      'navbar.contact': 'Contacto',
      
      // Home page translations
      'home.hero.title': 'FUNDACIÓN PÉRICLES FERNANDES',
      'home.hero.subtitle': 'Transformando vidas durante más de 25 años a través del amor, educación y ciudadanía',
      'home.hero.knowHistory': 'Conoce Nuestra Historia',
      'home.hero.seeActions': 'Ve Nuestras Acciones',
      'home.hero.videoTitle': 'Video de la Fundación Péricles Fernandes',
      
      'home.mission.title': 'Nuestra Misión',
      'home.mission.description': 'Promover el desarrollo integral de niños, adolescentes y jóvenes en situación de vulnerabilidad social, ofreciendo oportunidades de educación, cultura, deporte y ciudadanía.',
      'home.mission.beneficiaries': 'Beneficiarios Atendidos',
      'home.mission.years': 'Años de Operación',
      'home.mission.projects': 'Proyectos Activos',
      
      'home.activities.title': 'Nuestras Actividades',
      'home.activities.capoeira': 'Capoeira',
      'home.activities.capoeiraDesc': 'Arte, cultura y disciplina para todas las edades',
      'home.activities.theater': 'Teatro',
      'home.activities.theaterDesc': 'Expresión artística y desarrollo personal',
      'home.activities.music': 'Música',
      'home.activities.musicDesc': 'Armonía que transforma e inspira',
      'home.activities.food': 'Alimentación',
      'home.activities.foodDesc': 'Nutrición y cuidado de la comunidad',
      'home.activities.sports': 'Deportes',
      'home.activities.sportsDesc': 'Salud, disciplina y trabajo en equipo',
      
      'home.impact.title': 'Nuestro Impacto',
      'home.impact.description': 'A través de nuestros programas, logramos transformar la realidad de cientos de familias, ofreciendo esperanza y oportunidades para un futuro mejor.',
      'home.impact.education': 'Educación de calidad para todos',
      'home.impact.culture': 'Preservación de la cultura local',
      'home.impact.citizenship': 'Formación para la ciudadanía',
      'home.impact.opportunities': 'Creación de oportunidades',
      
      'home.cta.title': 'Forma Parte de Nuestra Historia',
      'home.cta.description': 'Tu contribución puede transformar vidas. Únete a nosotros en esta misión de amor y esperanza.',
      'home.cta.donate': 'Haz una Donación',
      'home.cta.volunteer': 'Sé Voluntario',
      
      // About page translations
      'about.hero.title': 'FUNDACIÓN PÉRICLES FERNANDES',
      'about.hero.subtitle': '¡Cuidar no es cargar, es caminar juntos!',
      'about.hero.logoAlt': 'Logo Fundación Péricles Fernandes',
      
      'about.introduction.welcome': '¡Sean todos muy bienvenidos! Mi nombre es Péricles Fernandes, tengo 75 años, soy jubilado, humanista, amante de la vida, los animales y las personas. Con orgullo, presido la Fundación Péricles Fernandes, una entidad sin fines de lucro reconocida como de utilidad pública por la Ley Municipal 501/96.',
      'about.introduction.history': 'Operamos desde hace más de 25 años con el compromiso de promover dignidad, educación y ciudadanía en nuestra comunidad. La Fundación está ubicada en la Carretera BA-093, Km 11, en la región de Palmares, municipio de Simões Filho (BA).',
      'about.introduction.imageAlt': 'Péricles Fernandes',
      'about.introduction.imageCaption': 'Péricles Fernandes - Presidente de la Fundación',
      
      'about.story.arrival': 'Llegué a Palmares en 1984, donde, en ese momento, mantenía un restaurante de parrilla al borde de la carretera. Fue allí donde presencié una triste realidad: niños, ancianos y animales siendo atropellados al intentar cruzar la carretera para llegar a la escuela del otro lado. Al cuestionar a los empleados sobre esas tragedias, escuché algo que nunca olvidé: "Los niños van a la escuela acompañados por sus abuelos y los perros van junto. Y, muchas veces, uno de los tres termina atropellado."',
      'about.story.decision': 'Ante eso, me pregunté: ¿por qué no construir una escuela aquí mismo, en la comunidad? A pesar de la negativa inicial de las autoridades municipales, decidí actuar. Construí con recursos propios la escuela que vendría a transformar la vida de muchas familias.',
      'about.story.imageAlt': 'Estudios en la Fundación',
      
      'about.school.inauguration': '¡La inauguración fue una verdadera celebración! Hoy, esa escuela es la Escuela Municipal Zumbi dos Palmares, donde hijos e hijas de los primeros alumnos ya están matriculados. Al principio, cedí el edificio gratuitamente, mientras la alcaldía proporcionaba profesores, funcionarios y material escolar. Esta fue solo la primera de muchas acciones.',
      'about.school.leadership': 'Sin ninguna pretensión política, me convertí en un líder comunitario, movido solo por el deseo de ayudar. Con el apoyo de voluntarios y socios, desarrollamos innumerables proyectos sociales, como:',
      'about.school.imageAlt': 'Educación en la Fundación',
      
      'about.projects.basicBaskets': 'Donación de cestas básicas y pescados en Semana Santa',
      'about.projects.inssSupport': 'Acompañamiento de ancianos y ciudadanos al INSS para jubilación',
      'about.projects.healthTransport': 'Transporte para tratamiento de salud, incluso para hemofílicos',
      'about.projects.sportsGroups': 'Creación de equipos de fútbol y grupos de capoeira',
      'about.projects.culturalEvents': 'Realización de fiestas populares, carreras de argollas y eventos culturales',
      'about.projects.courses': 'Oferta de cursos de dulces, salados, refuerzo escolar y alfabetización de jóvenes y adultos (EJA, Mova Brasil)',
      'about.projects.daycare': 'Construcción de una guardería para 40 niños en tiempo completo, con cinco comidas diarias',
      'about.projects.imageAlt': 'Eventos Comunitarios',
      
      'about.philosophy.freire': 'Como decía Paulo Freire: "Nadie libera a nadie, nadie se libera solo: los hombres se liberan en comunión." Tengo plena convicción de que nuestro camino solo tiene sentido en comunidad.',
      'about.philosophy.dream': 'Por eso, comparto con ustedes un gran sueño más: construir una Casa de Reposo para Ancianos, un espacio de amor, cuidado y respeto a aquellos que tanto ya hicieron por nosotros.',
      'about.philosophy.imageAlt': 'Alimentación en la Guardería',
      
      'about.callToAction.invitation': 'Te invito a formar parte de esta misión. Tu colaboración, sea cual sea, hará la diferencia. Y, cuando quieras, ven a visitarnos. Queremos que veas, con tus propios ojos, el impacto real de la solidaridad.',
      'about.callToAction.thanks': 'Dios sea alabado. Muchas gracias a todos.',
      'about.callToAction.imageAlt': 'Acciones Sociales',
      
      'about.signature.name': 'Péricles Fernandes',
      'about.signature.title': 'Presidente de la Fundación Péricles Fernandes',
      'about.signature.cnpj': 'CNPJ: 85.476.900/0001-77',
      
      // Action page translations
      'action.hero.title': 'FUNDACIÓN PÉRICLES FERNANDES EN ACCIÓN',
      'action.hero.subtitle': 'Conoce todas las actividades y proyectos que transforman vidas en nuestra comunidad',
      
      'action.carousel.previous': 'Imagen anterior de',
      'action.carousel.next': 'Siguiente imagen de',
      'action.carousel.goTo': 'Ir a imagen',
      'action.carousel.of': 'de',
      
      'action.cta.title': 'Forma Parte de Nuestra Misión',
      'action.cta.description': 'Únete a nosotros y ayuda a transformar vidas a través de nuestras acciones sociales. ¡Tu participación hace toda la diferencia!',
      'action.cta.contact': 'Ponte en Contacto',
      'action.cta.learnMore': 'Saber Más',
      
      // Activities translations
      'activities.agriculture.title': 'Agricultura Sostenible',
      'activities.agriculture.description': 'Promovemos prácticas agrícolas sostenibles, enseñando técnicas de cultivo orgánico, compostaje y aprovechamiento de recursos naturales. Nuestros proyectos incluyen huertos comunitarios, talleres de agricultura familiar y programas de seguridad alimentaria.',
      
      'activities.nutrition.title': 'Alimentación y Nutrición',
      'activities.nutrition.description': 'Desarrollamos programas de educación nutricional, distribución de alimentos y capacitación culinaria. Trabajamos para combatir el hambre y promover hábitos alimentarios saludables en nuestra comunidad.',
      
      'activities.capoeira.title': 'Capoeira y Cultura',
      'activities.capoeira.description': 'La capoeira es una de nuestras principales actividades culturales, promoviendo la preservación de la cultura afrobrasileña, disciplina, respeto e integración social. Ofrecemos clases para todas las edades.',
      
      'activities.theater.title': 'Teatro y Expresión',
      'activities.theater.description': 'Nuestros grupos de teatro desarrollan creatividad, autoestima y habilidades de comunicación. Realizamos presentaciones que abordan temas sociales importantes y promueven la reflexión comunitaria.',
      
      'activities.cavalgada.title': 'Cabalgata Comunitaria',
      'activities.cavalgada.description': 'Organizamos cabalgatas que fortalecen los lazos comunitarios y celebran nuestras tradiciones locales. Estos eventos promueven la unidad y el orgullo de nuestra comunidad.',
      
      'activities.bayern.title': 'Equipo Bayern',
      'activities.bayern.description': 'Nuestro equipo deportivo Bayern desarrolla talentos futbolísticos, promoviendo disciplina, trabajo en equipo y oportunidades para los jóvenes de la comunidad.',
      
      'activities.team.title': 'Nuestro Equipo',
      'activities.team.description': 'Conoce a los profesionales dedicados que hacen la diferencia en nuestra fundación, trabajando incansablemente para transformar vidas y fortalecer nuestra comunidad.',
      
      'activities.education.title': 'Educación y Estudio',
      'activities.education.description': 'Ofrecemos programas educativos, tutorías y actividades de apoyo al aprendizaje, asegurando que niños y jóvenes tengan acceso a educación de calidad.',
      
      'activities.events.title': 'Eventos Especiales',
      'activities.events.description': 'Realizamos diversos eventos a lo largo del año que celebran logros, promueven la integración y fortalecen los lazos entre todos los participantes de nuestros programas.',
      
      'activities.music.title': 'Música y Banda',
      'activities.music.description': 'Nuestra banda musical desarrolla talentos artísticos y promueve la cultura a través de la música, ofreciendo oportunidades para que los jóvenes expresen su creatividad.',
      
      'activities.crafts.title': 'Artesanías',
      'activities.crafts.description': 'Talleres de artesanías que desarrollan habilidades manuales, creatividad y pueden generar ingresos para las familias participantes.',
      
      'activities.singing.title': 'Canto y Música',
      'activities.singing.description': 'Clases de canto que desarrollan talentos vocales y promueven la autoestima a través de la expresión musical.',
      
      'activities.integration.title': 'Integración Social',
      'activities.integration.description': 'Actividades que promueven la integración entre diferentes grupos, fortaleciendo los lazos sociales y construyendo una comunidad más unida.',
      
      'activities.dialogue.title': 'Diálogo y Conversación',
      'activities.dialogue.description': 'Espacios de diálogo donde promovemos conversaciones constructivas sobre temas importantes para el desarrollo personal y social.',
      
      'activities.leisure.title': 'Actividades de Ocio',
      'activities.leisure.description': 'Proporcionamos momentos de ocio y diversión que contribuyen al bienestar físico y mental de todos los participantes.',
      
      'activities.gifts.title': 'Distribución de Regalos',
      'activities.gifts.description': 'En fechas especiales, distribuimos regalos a niños y familias, esparciendo alegría y cariño.',
      
      'activities.headquarters.title': 'Nuestra Sede Histórica',
      'activities.headquarters.description': 'Conoce la historia de nuestra antigua sede, que representa las raíces y evolución de la Fundación Péricles Fernandes a lo largo de los años.',
      
      'activities.knitting.title': 'Tejido y Crochet',
      'activities.knitting.description': 'Talleres de tejido y crochet que enseñan técnicas tradicionales, promueven la socialización y pueden generar ingresos complementarios.',
      
      'activities.liveMusic.title': 'Música en Vivo',
      'activities.liveMusic.description': 'Presentaciones musicales que animan nuestros eventos y celebran el talento local, creando momentos especiales de unidad.',
      
      'activities.kitchen.title': 'Cocina Comunitaria',
      'activities.kitchen.description': 'Nuestra cocina comunitaria prepara comidas nutritivas y promueve la seguridad alimentaria, siendo un espacio de cuidado y acogida.',
      
      'activities.meetings.title': 'Reuniones y Planificación',
      'activities.meetings.description': 'Espacios de reunión donde planificamos nuestras acciones, discutimos proyectos y fortalecemos la participación comunitaria.',
      
      'activities.school.title': 'Educación Escolar',
      'activities.school.description': 'Apoyamos la educación formal a través de alianzas con escuelas locales, ofreciendo apoyo educativo e infraestructura adecuada.',
      
      // Contact page translations
      'contact.title': 'CONTACTO',
      'contact.subtitle': 'Ponte en contacto con nosotros',
      'contact.firstName': 'Nombre',
      'contact.lastName': 'Apellido',
      'contact.email': 'Correo Electrónico',
      'contact.phoneNumber': 'Teléfono',
      'contact.phoneArea': 'Área',
      'contact.topic': 'Tema',
      'contact.howFound': '¿Cómo nos encontraste?',
      'contact.message': 'Comentarios / Sugerencias',
      'contact.messagePlaceholder': 'Escribe tu mensaje aquí...',
      'contact.charactersRemaining': 'Máximo 3000 caracteres permitidos. Actualmente escribiendo',
      'contact.submit': 'Enviar',
      
      // Contact topic options
      'contact.topic.select': 'Selecciona un tema',
      'contact.topic.general': 'Información General',
      'contact.topic.donation': 'Donaciones',
      'contact.topic.volunteer': 'Voluntariado',
      'contact.topic.partnerships': 'Alianzas',
      'contact.topic.events': 'Eventos',
      'contact.topic.others': 'Otros',
      
      'contact.howFound.select': 'Selecciona una opción',
      'contact.howFound.google': 'Google',
      'contact.howFound.facebook': 'Facebook',
      'contact.howFound.instagram': 'Instagram',
      'contact.howFound.friends': 'Amigos/Familia',
      'contact.howFound.events': 'Eventos',
      'contact.howFound.others': 'Otros',
      
      // Donation button translations
      'donate.button': 'DONAR',
      'donate.modal.title': 'Donar',
      'donate.modal.subtitle': 'y forma parte de nuestra causa',
      'donate.modal.pixTitle': 'Donación vía PIX',
      'donate.modal.pixKey': 'Clave PIX (CNPJ):',
      'donate.modal.copyButton': 'Copiar clave PIX',
      'donate.modal.copied': '¡Copiado!',
      'donate.modal.beneficiary': 'Beneficiario: Fundación Péricles Fernandes',
      'donate.modal.cnpj': 'CNPJ: 00.854.769/0001-77',
      'donate.modal.bank': 'Banco: Pag Bank (290)',
      'donate.modal.qrTitle': 'Código QR para Donación',
      'donate.modal.qrInstruction': 'Escanea el Código QR con tu aplicación bancaria para hacer la donación',
      'donate.modal.questionsTitle': '¿Dudas sobre donaciones?',
      'donate.modal.vaquinhaTitle': 'Recaudación Online',
      'donate.modal.vaquinhaDescription': 'Participa en nuestra campaña de recaudación online y ayuda a construir un hogar con amor y dignidad para nuestros ancianos.',
      'donate.modal.vaquinhaButton': 'Acceder a Recaudación Online',
      
      // Footer translations
      'footer.foundation.name': 'Fundación Péricles Fernandes',
      'footer.foundation.motto': '¡Cuidar no es cargar, es caminar juntos!',
      'footer.quickLinks.title': 'Enlaces Rápidos',
      'footer.quickLinks.home': 'Inicio',
      'footer.quickLinks.about': 'Acerca de',
      'footer.quickLinks.action': 'Acciones Sociales',
      'footer.quickLinks.contact': 'Contacto',
      'footer.contact.title': 'Contacto',
      'footer.contact.address': 'Dirección: Carretera BA093 km 11 número 210, CEP: 43700-000 - Simoes Filho/BA',
      'footer.contact.phone': 'Teléfono: 71 98878-2294',
      'footer.contact.email': 'Email: contato@funpefer.org',
      'footer.developedBy': 'Desarrollado por',
      'footer.copyright': 'Fundación Péricles Fernandes. Todos los derechos reservados.'
    }
  };

  setLanguage(lang: string) {
    if (this.translations[lang]) {
      this.currentLanguage.next(lang);
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  translate(key: string): string {
    const lang = this.currentLanguage.value;
    const langTranslations = this.translations[lang];
    const fallbackTranslations = this.translations['pt'];
    
    return langTranslations?.[key] || fallbackTranslations?.[key] || key;
  }
}