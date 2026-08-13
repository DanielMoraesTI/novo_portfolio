export const profile = {
  name: "Daniel Moraes",
  role: "Advogado em transição para Tecnologia",
  tagline:
    "15+ anos a resolver problemas com as leis. Agora a resolvê-los com código.",
  bio: "Profissional da área jurídica com mais de 15 anos de experiência em contextos públicos e privados, no Brasil e em Portugal, com forte atuação nas áreas administrativa, jurídica (contencioso e preventivo) e de atendimento institucional. Atualmente em transição de carreira para o setor das tecnologias de informação, a consolidar um novo percurso em desenvolvimento, redes, dados ou suporte técnico — a aliar a experiência profissional adquirida à criação de soluções tecnológicas eficientes e inovadoras.",
  quote: "Não sou Ateniense nem Grego, mas sim um cidadão do mundo.",
  quoteAuthor: "Sócrates",
  location: "Lisboa, Portugal",
  avatar: "/assets/images/rosto_sol.jpeg",
  email: "adv.danielfm@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/daniel-fernandes-de-moraes-8118b3204",
  github: "https://github.com/DanielMoraesTI",
};

export const highlights = [
  { label: "Anos de experiência profissional", value: "15+" },
  { label: "Cursos e certificações concluídos", value: "30+" },
  { label: "Países de atuação", value: "2" },
  { label: "Nova carreira em construção", value: "1" },
];

export const academicEducation = [
  {
    title: "Bacharelado em Direito",
    place: "Universidade Salgado de Oliveira",
    period: "2003 — 2007",
  },
  {
    title: "Pós-graduação em Direito Processual Civil",
    place: "Universidade Unianhanguera — Uniderp",
    period: "2010 — 2012",
  },
  {
    title: "Engenharia Elétrica, Eletrónica e Comunicações",
    place: "Universidade Federal de Goiás (UFG)",
    period: "2001 — 2002",
    note: "Não concluído",
  },
];

export const techEducation = [
  {
    title: "CS50 — Introdução à Ciência da Computação (Harvard)",
    place: "Fundação Estudar",
    period: "Dez 2023",
  },
  {
    title: "Direito do Trabalho — Formação Modular Certificada (25h)",
    place: "CENFIM",
    period: "2023",
  },
  {
    title: "Plano de Marketing — Formação Modular Certificada (50h)",
    place: "Centro de Emprego e Formação Profissional de Lisboa",
    period: "2023",
  },
];

// O que está a acontecer agora — em destaque na homepage.
export const currentActivity = {
  kind: "Estágio",
  title: "Estágio em Desenvolvimento Frontend",
  place: "Faculdade de Ciências da Universidade de Lisboa",
  period: "13 Jul 2026 — 13 Out 2026",
  description:
    "Depois de concluir a parte teórica do Programa UPskill, a pôr tudo em prática: 3 meses de estágio na área de TI Frontend, em contexto real de equipa técnica.",
};

// Programa concluído que originou o estágio acima.
export const completedProgram = {
  title: "Frontend JavaScript + IA",
  place: "Programa UPskill — Digital Skills & Jobs · Faculdade de Ciências da Universidade de Lisboa",
  period: "Nov 2025 — Jul 2026",
  modules: [
    "Fundamentos da Computação e Introdução à Programação",
    "Fundamentos de Programação Web",
    "JavaScript + TypeScript",
    "Introdução a Bases de Dados",
    "Backend: Node.js e APIs",
    "Frontend: React & Next.js",
    "Introdução a GenAI & GenAI no Browser",
    "Projeto Final",
  ],
};

// Próximo curso a começar — adicionar dados quando arrancar.
export const upcomingCourse = {
  title: "Carreira",
  place: "Alura",
  status: "A começar em breve",
};

export type CertificationGroup = {
  title: string;
  provider: string;
  count: number;
  description: string;
  courses: { title: string; date: string }[];
};

export const certifications: CertificationGroup[] = [
  {
    title: "Lógica de Programação & JavaScript",
    provider: "Alura",
    count: 6,
    description:
      "Do jogo Pong à criação de páginas dinâmicas — bases sólidas de lógica e JS.",
    courses: [
      { title: "Lógica de programação: explore funções e listas", date: "Mai 2026" },
      { title: "Lógica de programação: mergulhe em programação com JavaScript", date: "Abr 2024" },
      { title: "Lógica de programação: laços e listas com JavaScript", date: "Fev 2023" },
      { title: "Lógica de programação: comece em lógica com o jogo Pong e JavaScript", date: "Fev 2023" },
      { title: "JavaScript para Web: crie páginas dinâmicas", date: "Mai 2023" },
      { title: "Formação: a partir do zero, iniciante em programação", date: "Mai 2023" },
    ],
  },
  {
    title: "HTML & CSS",
    provider: "Alura",
    count: 5,
    description:
      "Estrutura, Flexbox, responsividade e publicação de projetos do zero.",
    courses: [
      { title: "HTML e CSS: praticando HTML/CSS", date: "Out 2023" },
      { title: "HTML e CSS: trabalhando com responsividade e publicação de projetos", date: "Mai 2023" },
      { title: "HTML e CSS: cabeçalho, footer e variáveis CSS", date: "Abr 2023" },
      { title: "HTML e CSS: classes, posicionamento e Flexbox", date: "Mar 2023" },
      { title: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags", date: "Mar 2023" },
    ],
  },
  {
    title: "Imersões Práticas",
    provider: "Alura",
    count: 5,
    description: "Front-end, Front-end com IA, Back-end, Dados com Python e IA.",
    courses: [
      { title: "Imersão IA", date: "Jun 2026" },
      { title: "Imersão Front-End com IA", date: "Jun 2026" },
      { title: "Imersão Dados com Python", date: "Ago 2025" },
      { title: "Imersão Dev Back-End", date: "Jan 2025" },
      { title: "Imersão Front-End", date: "Fev 2024" },
    ],
  },
  {
    title: "Modelagem de Dados",
    provider: "Alura",
    count: 4,
    description: "Entidades, atributos, relacionamentos e modelo lógico.",
    courses: [
      { title: "Trilha: modelagem de dados", date: "Mai 2026" },
      { title: "Modelagem de dados", date: "Abr 2026" },
      { title: "Modelagem de dados: desenvolvendo o modelo lógico", date: "Mar 2026" },
      { title: "Modelagem de dados: identificando entidades, atributos, relacionamentos", date: "Mar 2026" },
    ],
  },
  {
    title: "PHP",
    provider: "Alura",
    count: 4,
    description: "Orientação a objetos, interfaces, namespaces e traits.",
    courses: [
      { title: "PHP: use interfaces, namespaces, traits e exceções", date: "Jul 2026" },
      { title: "PHP: conheça a programação orientada a objetos", date: "Jul 2026" },
      { title: "PHP: evolua seu conhecimento e organize seu código", date: "Jul 2026" },
      { title: "PHP: criando sua aplicação", date: "Jul 2026" },
    ],
  },
  {
    title: "Fundamentos & Ferramentas",
    provider: "Alura",
    count: 4,
    description: "Git & GitHub, Linux, arquitetura de computadores e aprender a aprender.",
    courses: [
      { title: "Git e GitHub: repositório, commit e versões", date: "Mai 2023" },
      { title: "Linux I: conhecendo e utilizando o terminal", date: "Mar 2023" },
      { title: "Arquitetura de computadores: por trás de como seu programa funciona", date: "Mar 2023" },
      { title: "Aprender a aprender: técnicas para seu autodesenvolvimento", date: "Out 2023" },
    ],
  },
];

export const studyTopics = [
  {
    title: "HTML",
    description: "Estrutura semântica e acessível para a web.",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    image: "/assets/images/html.png",
  },
  {
    title: "JavaScript",
    description: "Lógica, interatividade e programação orientada a eventos.",
    href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript",
    image: "/assets/images/javascript.png",
  },
  {
    title: "CSS",
    description: "Design responsivo, layout e identidade visual.",
    href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content",
    image: "/assets/images/css.png",
  },
];

export const hobbies = [
  {
    title: "Jogos eletrônicos",
    description: "A estratégia de uma boa partida também treina a mente para resolver problemas.",
    type: "video" as const,
    src: "/assets/videos/d1631b50-c6a7-421a-a732-72d3bc033e6f.mp4",
  },
  {
    title: "Cozinhar",
    description: "Receitas são só algoritmos deliciosos — ordem de passos, precisão e um resultado final.",
    type: "iframe" as const,
    src: "https://www.youtube.com/embed/CaF_rN98Uw0?si=beXH1FxTCS9hF4yI",
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "NOS (RH+) e MEO",
    role: "Gestor de Cliente Corporate | Gestor Comercial",
    location: "Lisboa, Portugal",
    period: "2023 — 2025",
    points: [
      "Atendimento institucional a clientes empresariais e entidades públicas (Agrupamentos Escolares – Escola Digital, AutoEuropa, Grupo SONAE, entre outros).",
      "Resolução de problemas técnicos e apoio a processos administrativos internos.",
      "Adequação de contratos e pacotes de serviços, bem como comercialização de produtos e soluções digitais.",
      "Interação constante com equipas de suporte técnico e ferramentas digitais internas.",
    ],
  },
  {
    company: "Fernandes de Moraes Advocacia e Consultoria Jurídica",
    role: "Advogado — prática autónoma",
    location: "Goiânia, Brasil",
    period: "Abr 2009 — atualidade",
    current: true,
    points: [
      "Elaboração de petições e pareceres, realização de audiências e sustentações orais nas áreas cível, trabalhista e demais necessárias.",
      "Atuação em parceria com escritórios de advocacia dos interiores do Estado de Goiás e de outros Estados.",
      "Gestão autónoma da atividade profissional, com foco em eficiência e cumprimento de prazos.",
    ],
  },
  {
    company: "Carvalho & Moraes Advogados Associados",
    role: "Advogado associado — prática autónoma",
    location: "Goiânia, Brasil",
    period: "Abr 2010 — Abr 2013",
    points: [
      "Elaboração de petições e pareceres jurídicos.",
      "Realização de audiências e sustentações orais nas áreas cível, trabalhista e demais necessárias.",
      "Atuação em parceria societária, com divisão de processos e responsabilidades entre os associados.",
    ],
  },
  {
    company: "Agência Goiana de Regulação, Controle e Fiscalização de Serviços Públicos (AGR)",
    role: "Advogado de empresa",
    location: "Goiânia, Brasil",
    period: "Abr 2009 — Abr 2010",
    points: [
      "Elaboração de petições, pareceres e atos pertinentes à administração pública (memorandos, resoluções, despachos, mandados de segurança).",
      "Realização de audiências e sustentações orais em representação da agência reguladora.",
      "Atuação jurídica junto a organismo público de regulação, controlo e fiscalização de serviços.",
    ],
  },
  {
    company: "AGEPEL — Agência Goiana de Cultura Pedro Ludovico Teixeira",
    role: "Estagiário jurídico",
    location: "Goiânia, Brasil",
    period: "Mar 2006 — Jan 2008",
    points: [
      "Assessoria jurídica à Diretoria de Ação Cultural do Estado de Goiás.",
      "Elaboração de pareceres e elaboração/revisão de contratos de locação de teatros públicos (Teatro Goiânia, Martim Cerere, Centro Cultural Oscar Niemeyer, Teatro de Porangatu).",
      "Análise de projetos participantes em eventos culturais (FICA, Canto da Primavera, entre outros).",
    ],
  },
  {
    company: "Ministério Público do Estado de Goiás",
    role: "Estagiário jurídico",
    location: "Goiânia, Brasil",
    period: "Jan 2006 — Jun 2006",
    points: [
      "Atendimento ao público com foco na resolução de litígios e mediação de acordos supervisionados, sobretudo na área de família.",
      "Assessoria jurídica no atendimento realizado no Bairro Vitória III, Goiânia.",
    ],
  },
  {
    company: "PB Construções e Comércio LTDA — Centro de Convenções de Goiânia",
    role: "Auxiliar administrativa e financeira",
    location: "Goiânia, Brasil",
    period: "Mar 2003 — Out 2005",
    points: [
      "Responsável pelo recebimento e administração dos serviços de locação de espaços do Centro de Cultura e Convenções de Goiânia.",
      "Gestão do Teatro Rio Vermelho e dos eventos ali realizados.",
      "Funções administrativas e financeiras de apoio à operação do centro de convenções.",
    ],
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "/assets/icons/linkedin-svgrepo-com.svg",
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: "/assets/icons/github-color-svgrepo-com.svg",
  },
  {
    label: "E-mail",
    href: `mailto:${profile.email}`,
    icon: "/assets/icons/mail-svgrepo-com.svg",
  },
  {
    label: "WhatsApp",
    href: "/contacto",
    icon: "/assets/icons/whatsapp-svgrepo-com.svg",
  },
];

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contacto", href: "/contacto" },
];
