export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  period: string;
  description: string;
  story: string;
  challenge: string;
  solution: string;
  impact: string;
  highlights: string[];
  tech: string[];
  confidential: boolean;
  featured: boolean;
  /** strong = prints/métricas; supporting = atuação real, evidência visual limitada */
  evidence: "strong" | "supporting";
  company?: string;
  github?: string;
  store?: string;
  cover: string;
  images: ProjectImage[];
  metrics?: ProjectMetric[];
  icon: "mobile" | "vision" | "web" | "iot";
};

export const profile = {
  name: "Douglas Lopes",
  fullName: "Douglas Lopes Rodrigues dos Santos",
  role: "Senior Software Engineer",
  headline:
    "Mobile & Full Stack · React Native, Expo, React, TypeScript · Architecture & Technical Leadership",
  location: "Salvador, Bahia, Brasil",
  availability: "Híbrido · Remoto",
  phone: "(71) 99184-5687",
  email: "pchialoopes@gmail.com",
  github: "https://github.com/pchi4",
  linkedin: "https://linkedin.com/in/douglas-loopes",
  resume: "/curriculo-douglas-lopes.pdf",

  summary:
    "Senior Software Engineer com experiência em arquitetura e desenvolvimento de aplicações mobile e web para ambientes operacionais críticos. Especialista em React Native, Expo e TypeScript, com atuação em React, APIs REST e backend. Liderança técnica em time de 4, modernização de legados, performance, offline-first, releases nativos e AI-assisted software engineering.",

  /** Frase de posicionamento — o gancho memorável da primeira dobra */
  positioning:
    "Software Engineer para operações que não podem falhar.",

  tagline:
    "Full stack com liderança técnica no MOP (SSP-BA): mobile, web e arquitetura — 7 mil+ usuários, offline-first e −65% em fluxos críticos.",

  stackLine: "React Native · React · TypeScript · Node",

  conversationSubject: "Vamos falar de produto crítico",

  openToWork:
    "Aberto a oportunidades remotas ou híbridas com times de engenharia.",

  /** Alvo de carreira — o que o recrutador precisa encaixar rápido */
  seeking:
    "Times de produto mission-critical · React Native / React / TypeScript · remoto ou híbrido · liderança técnica próxima do código.",

  practice: [
    {
      title: "Liderança em time enxuto",
      text: "Time de 4 engenheiros (incluindo eu): padrões, modularização, code review e decisões técnicas no dia a dia do MOP e do App190.",
    },
    {
      title: "Release por sprint + hot-fix",
      text: "Pacote de mudanças por sprint, com hot-fix quando necessário. Versionamento semântico (major / minor / patch), scripts de clean build e leitura de arquivos de ambiente — builds manuais no Xcode (iOS) e com Gradle no VS Code (Android).",
    },
    {
      title: "Integrações mission-critical",
      text: "Produtos com baixo margem de falha: MOP (campo, custódia, RIP) e App190 (SOS com validação de medida protetiva junto ao TJ) — confiabilidade acima de feature theater.",
    },
    {
      title: "AI na rotina de engenharia",
      text: "Agentes adequados ao nosso fluxo, conexões MCP e AI com agents em chat — análise de codebase, refatoração e aceleração de entrega com critério.",
    },
  ],

  metrics: [
    { value: "7k+", label: "Usuários em operação (MOP)" },
    { value: "−65%", label: "Tempo em fluxos críticos" },
    { value: "−30%", label: "Render com New Architecture" },
    { value: "4", label: "Engenheiros no time (incl. eu)" },
  ],

  education: [
    {
      institution: "UFBA – Universidade Federal da Bahia",
      degree: "Mestrado em Engenharia de Software",
      field: "Engenharia de Software",
      period: "jul/2025 – 2027",
      status: "Cursando",
      research: "Arquitetura de Sistemas e Engenharia de Software Contemporânea",
      bridge:
        "A pesquisa alimenta o que já pratico em produção: arquitetura evolutiva, confiabilidade e sistemas que sustentam operação crítica — o mesmo eixo do MOP e dos produtos SSP/PRODEB.",
    },
    {
      institution: "Universidade Cidade de São Paulo (Unicid)",
      degree: "CST em Análise e Desenvolvimento de Sistemas",
      field: "Análise e Desenvolvimento de Sistemas",
      period: "mai/2019 – jun/2022",
      status: "Concluído",
    },
  ],

  experience: [
    {
      company: "PRODEB – Companhia de Processamento de Dados do Estado da Bahia",
      role: "Senior Software Engineer",
      type: "Tempo integral",
      period: "jun/2023 – atual",
      location: "Salvador, Bahia · Presencial",
      summary:
        "Liderança técnica em time de 4 engenheiros e evolução arquitetural de apps mobile e web de segurança pública — em especial o MOP (operações de campo) e o App190 (pedido de socorro em tempo real pelo cidadão).",
      activities: [
        "Liderei tecnicamente um time de 4 (incluindo eu): padrões, modularização, code review e decisões de arquitetura.",
        "Arquitetura com React Native, Expo, React e TypeScript — Clean Architecture, SOLID e feature-based.",
        "Adotei React Native New Architecture (Fabric/TurboModules), Hermes e JSI; −30% no tempo de renderização em fluxos críticos.",
        "Offline-first com TanStack Query e MMKV para operação com conectividade limitada.",
        "Evoluí o MOP (missões de campo, custódia, RIP) e o App190 (SOS cidadão — incl. validação de medida protetiva com o TJ e SOS para motoristas de app).",
        "Publicação em pacote por sprint (e hot-fix quando preciso), com versionamento semântico (major / minor / patch): clean build, leitura de arquivos de ambiente e builds manuais no Xcode e com Gradle no VS Code para artefatos de store.",
        "AI-assisted engineering: agentes alinhados à rotina do time, conexões MCP e agents em chat para análise de codebase, refatoração e aceleração de entrega.",
      ],
    },
    {
      company: "Secretaria da Segurança Pública da Bahia (SSP-BA)",
      role: "Software Engineer",
      type: "Tempo integral",
      period: "jun/2022 – mai/2023",
      location: "Salvador, Bahia · Presencial",
      summary:
        "Desenvolvimento e sustentação de aplicações web e mobile na SSP-BA — trio web SGM (ouvidoria), Hydra (escalas) e Sentinela (câmeras), além de MOP — com Vue/Nuxt, React Native, TypeScript e APIs REST.",
      activities: [
        "Evoluí o trio web institucional: SGM (Nuxt 3 / Vue Query), Hydra (React / React Query) e Sentinela (Vue / Meteor), além do MOP.",
        "Modernizei módulos legados com Clean Architecture, SOLID e modularização.",
        "Otimizei estado, integrações REST, fluxos assíncronos e performance.",
        "Participei do ciclo completo: requisitos, análise, desenvolvimento, review, testes (incl. Cypress no SGM) e sustentação.",
      ],
    },
    {
      company: "Secretaria da Segurança Pública da Bahia (SSP-BA)",
      role: "Software Engineering Intern",
      type: "Estágio",
      period: "mai/2021 – mai/2022",
      location: "Salvador, Bahia · Presencial",
      summary:
        "Base prática em desenvolvimento e manutenção de sistemas institucionais web/mobile.",
      activities: [
        "Implementei e mantive funcionalidades com JavaScript, React e integrações REST.",
        "Identifiquei e corrigi falhas em aplicações existentes.",
        "Participei da análise de demandas e regras de negócio.",
      ],
    },
  ],

  projects: [
    {
      slug: "mop",
      name: "MOP — Mobilidade em Operações Policiais",
      period: "jun/2023 – atual",
      description:
        "Plataforma mobile e web para operações de campo, registro de vestígios e consultas operacionais em tempo real — liderança técnica e arquitetura.",
      story:
        "O MOP é uma solução integrada que coloca informação e comunicação nas mãos do policial em campo. O objetivo principal é equipar o efetivo com ferramentas digitais para aumentar agilidade, precisão e segurança nas operações diárias — com registro de vestígios, consultas em tempo real, fluxos de custódia e o módulo de RIP (Relatório de Investigação Preliminar), com coleta de local no mapa, visualização segura e geração de PDF/resumo. Atuei na liderança arquitetural e na evolução contínua — do desenho de fluxos à publicação nas stores, com mais de 7 mil usuários em operação.",
      challenge:
        "Usabilidade e confiabilidade em campo, redes instáveis, sincronização sensível, alta disponibilidade e fluxos documentais (RIP) com localização precisa.",
      solution:
        "React Native + Expo + TypeScript, Clean Architecture, offline-first com TanStack Query e MMKV, New Architecture (Fabric/TurboModules) e pipeline de release com builds manuais (Xcode / Gradle) — incluindo jornadas de RIP com mapa, leitura e exportação.",
      impact:
        "Na prática: mais produtividade (abordagens e verificações), respaldo operacional com policiamento orientado a dados e maior segurança do policial com acesso rápido à informação. Também −65% no carregamento de fluxos críticos e −30% no tempo de renderização — com releases em pacote por sprint, hot-fix quando necessário e builds manuais (Xcode / Gradle).",
      highlights: [
        "Informação e comunicação nas mãos do policial em campo",
        "RIP — local do fato, visualização e geração de PDF/resumo",
        "Offline-first com TanStack Query e MMKV",
        "Release: pacote por sprint + hot-fix · builds manuais Xcode/Gradle",
      ],
      metrics: [
        { value: "7k+", label: "Usuários em operação" },
        { value: "−65%", label: "Fluxos críticos" },
        { value: "−30%", label: "Tempo de render" },
      ],
      tech: [
        "React Native",
        "Expo",
        "React",
        "TypeScript",
        "TanStack Query",
        "MMKV",
      ],
      confidential: false,
      featured: true,
      evidence: "strong",
      company: "PRODEB / SSP-BA",
      store:
        "https://play.google.com/store/apps/details?id=com.ssp.mop",
      cover: "/projects/mop-home.png",
      images: [
        {
          src: "/projects/mop-home.png",
          alt: "Tela inicial do MOP — consultas e módulos",
          caption: "Home — status online, consultas recentes e módulos.",
          orientation: "portrait",
        },
        {
          src: "/projects/mop-vestigios.png",
          alt: "Tela Meus Vestígios do MOP",
          caption: "Custódia — gestão de vestígios sob responsabilidade.",
          orientation: "portrait",
        },
        {
          src: "/projects/mop-transferencia.png",
          alt: "Tela de Transferência de custódia do MOP",
          caption: "Transferência — cadeia de custódia e movimentação.",
          orientation: "portrait",
        },
        {
          src: "/projects/mop-rip-local.png",
          alt: "MOP — Visualizar RIP, dados do local no mapa",
          caption:
            "RIP — dados do local com mapa e localização selecionada.",
          orientation: "portrait",
        },
        {
          src: "/projects/mop-rip-acoes.png",
          alt: "MOP — ações do RIP: visualizar, PDF e resumo",
          caption:
            "RIP — visualizar, gerar relatório PDF e resumo para redes.",
          orientation: "portrait",
        },
        {
          src: "/projects/mop-solucao.jpg",
          alt: "Material do MOP — A Solução: o que é e objetivo principal",
          caption:
            "A solução — informação em campo e objetivo de agilidade, precisão e segurança.",
          orientation: "landscape",
        },
        {
          src: "/projects/mop-pratica.jpg",
          alt: "Material do MOP — na prática: produtividade, respaldo e segurança",
          caption:
            "Na prática — produtividade, policiamento orientado a dados e segurança do policial.",
          orientation: "landscape",
        },
      ],
      icon: "mobile",
    },
    {
      slug: "app190",
      name: "App190",
      period: "2023 – 2024",
      description:
        "App de urgência para o cidadão acionar as forças de segurança e pedir socorro em tempo real — com fluxos de SOS para medida protetiva e para motoristas de aplicativo.",
      story:
        "O App190 nasceu para aproximar o cidadão das forças de segurança em situações de emergência: um pedido de socorro em tempo real, direto pelo celular — com locais favoritos, discagem rápida (190, 192, 193) e registro de ocorrência. A ideia evoluiu para cobrir contextos específicos de risco. No SOS Mulher, após login a aplicação validava informações junto ao Tribunal de Justiça; havendo medida protetiva, o botão de emergência para a Central 190 era exibido. No acionamento, o cidadão podia detalhar o tipo de ocorrência (agressão, ameaça, assédio) ou, se não conseguisse, o pedido era enviado automaticamente em poucos segundos como violência contra a mulher. Havia também o SOS voltado a motoristas de aplicativos. Atuei na evolução técnica (arquitetura, performance, confiabilidade e integrações). O conceito seguiu amadurecendo, mas o app ficou pouco tempo em produção — ainda assim, um aprendizado intenso sobre produtos mission-critical com latência, segurança e responsabilidade social.",
      challenge:
        "Garantir acionamento rápido e confiável em cenários de urgência, com fluxos sensíveis (medida protetiva integrada ao TJ, SOS para motoristas), seleção precisa de local e baixa margem para falha — integração crítica em que latência ou erro tem custo humano.",
      solution:
        "App em React Native + TypeScript com jornadas de SOS, mapa para local do fato, countdown de envio automático e integração com o ecossistema da segurança pública (incl. validação de medida protetiva junto ao Tribunal de Justiça).",
      impact:
        "Validou um canal digital de pedido de socorro em tempo real e especializações de SOS (medida protetiva e motoristas de app). Apesar do ciclo curto em produção, fortaleceu a base técnica de produtos de emergência no contexto SSP-BA / PRODEB.",
      highlights: [
        "Pedido de socorro em tempo real ao cidadão",
        "Integração crítica: SOS Mulher com validação de medida protetiva (TJ)",
        "SOS para motoristas de aplicativos",
        "Envio automático em segundos quando não é possível detalhar",
      ],
      tech: ["React Native", "TypeScript", "Expo", "CI/CD"],
      confidential: false,
      featured: true,
      evidence: "strong",
      company: "PRODEB / SSP-BA",
      cover: "/projects/app190-home.png",
      images: [
        {
          src: "/projects/app190-home.png",
          alt: "Home do App190 — emergência e registrar 190",
          caption:
            "Home — locais favoritos, 190/192/193, SOS Motorista e Registrar 190.",
          orientation: "portrait",
        },
        {
          src: "/projects/app190-local.png",
          alt: "Seleção do local do fato no App190",
          caption: "Mapa — seleção do local do fato para o pedido de socorro.",
          orientation: "portrait",
        },
        {
          src: "/projects/app190-sos-mulher.jpg",
          alt: "Fluxo Botão de Emergência / SOS Mulher do App190",
          caption:
            "SOS Mulher — medida protetiva, detalhamento e countdown de envio.",
          orientation: "landscape",
        },
      ],
      icon: "mobile",
    },
    {
      slug: "sentinela",
      name: "Sentinela — Monitoramento de Veículos e Câmeras",
      period: "2021 – 2023",
      description:
        "Sistema web da SSP-BA para consulta de veículos, alertas de restrição, rastreamento e passagem em redes de câmeras (Salvador, Lauro de Freitas e CBN), integrado ao Cortex/Sentry.",
      story:
        "O Sentinela é a ferramenta operacional da SSP-BA (SCTI) para monitorar passagem de veículos em câmeras e cruzar isso com restrições, proprietário/possuidor e movimentações. Atuei na evolução e sustentação do frontend: login por matrícula com termo de uso; home com KPIs de alertas e histórico de consultas; consulta simples e detalhada de veículo; alertas de restrição em tempo quase real; batedor e movimentações por período; rastreamento individual e em grupo (com notificação via Telegram); módulos CICOM (alerta temporário, ocorrência e whitelist); e relatório de câmeras de Salvador em mapa. Papéis (admin, NI, CICOM, suporte) controlam o menu e as permissões de cada fluxo.",
      challenge:
        "Unificar Cortex/Sentry, restrições, OCR de câmeras e fluxos CICOM numa UI operacional clara — com perfis distintos e dados sensíveis de segurança pública.",
      solution:
        "SPA em Vue 2 + Vuetify sobre Meteor/Mongo, Vuex e APIs REST (Cortex/Sentry, MJSP, PPE), com publicações reativas, mapas (Google Maps) e exportação PDF onde o fluxo operacional pedia.",
      impact:
        "Centralizou consulta, alerta e rastreamento de veículos para inteligência e operação diária — da placa ao mapa de câmeras — com auditoria de consultas e controle por perfil.",
      highlights: [
        "Consulta simples/detalhada: veículo, restrições, proprietário e movimentações",
        "Alertas de restrição + rastreamento (individual, grupo e Telegram)",
        "CICOM: alerta temporário, ocorrência e veículos desconsiderados",
        "Mapa de câmeras Salvador e KPIs de incidência na home",
      ],
      tech: [
        "Vue 2",
        "Vuetify",
        "Meteor",
        "Vuex",
        "MongoDB",
        "REST (Cortex/Sentry)",
        "Google Maps",
      ],
      confidential: false,
      featured: false,
      evidence: "supporting",
      company: "SSP-BA",
      cover: "/projects/sentinela-cover.jpg",
      images: [
        {
          src: "/projects/sentinela-cover.jpg",
          alt: "Ilustração conceitual do Sentinela",
          caption:
            "Contexto visual — prints de produto pendentes (ambiente intranet).",
        },
      ],
      icon: "web",
    },
    {
      slug: "sgm",
      name: "SGM — Gestão de Manifestações",
      period: "2021 – 2023",
      description:
        "Sistema web da SSP-BA para o ciclo completo de manifestações de ouvidoria: cadastro, classificação/ciência, acompanhamento, histórico e relatórios — com papéis distintos por equipe.",
      story:
        "O SGM é o fluxo operacional de ouvidoria da SSP-BA. A manifestação entra pelo cadastro em etapas (TAG, dados, envolvidos, detalhes da manifestação), passa por consulta com filtros (período, Nº SGM, status, Disque Denúncia etc.), classificação e ciência, e segue para acompanhamento e controle até conclusão — com histórico e relatórios. Atuei no frontend Nuxt 3 / Vue 3: login por matrícula, middleware de auth por perfil (atendente, coordenadores, ouvidor, admin), notificações, upload de arquivos e telas de consulta/acompanhamento alinhadas às regras internas.",
      challenge:
        "Orquestrar um ciclo com muitos status, prazos e papéis (atendimento → classificação → controle → ouvidoria) sem perder clareza nem vazar rotas entre perfis.",
      solution:
        "SPA em Nuxt 3 + Vue 3 + Vuetify 3, Pinia e TanStack Vue Query sobre API REST (JWT em cookie), com rotas e menu filtrados por role e geração de relatório (pdfmake).",
      impact:
        "Centralizou cadastro, acompanhamento e rastreabilidade das manifestações — menos atrito entre atendimento, controle e ouvidoria.",
      highlights: [
        "Ciclo: cadastro → consulta → classificar/ciência → acompanhamento → histórico",
        "Papéis: atendente, coordenadores, ouvidor, admin e estatística",
        "Consulta com filtros (Nº SGM, TAG, status, canal, período)",
        "Nuxt 3 · Vue Query · Pinia · Vuetify 3",
      ],
      tech: [
        "Nuxt 3",
        "Vue 3",
        "TypeScript",
        "Vuetify 3",
        "Pinia",
        "TanStack Vue Query",
        "Axios",
        "pdfmake",
        "Cypress",
      ],
      confidential: false,
      featured: false,
      evidence: "strong",
      company: "SSP-BA",
      cover: "/projects/sgm-consulta.png",
      images: [
        {
          src: "/projects/sgm-login.png",
          alt: "Tela de login do SGM",
          caption: "Login — autenticação por matrícula na SSP-BA.",
          orientation: "landscape",
        },
        {
          src: "/projects/sgm-consulta.png",
          alt: "Consulta de Manifestação no SGM",
          caption:
            "Consulta — filtros, busca e listagem de manifestações.",
          orientation: "landscape",
        },
        {
          src: "/projects/sgm-acompanhamento.png",
          alt: "Acompanhamento e Controle de Manifestação no SGM",
          caption:
            "Acompanhamento — status, prazo e controle das manifestações.",
          orientation: "landscape",
        },
      ],
      icon: "web",
    },
    {
      slug: "hydra",
      name: "Hydra — Escalas e Carga Horária",
      period: "2021 – 2023",
      description:
        "Sistema web da SSP-BA para cadastro e autorização de escalas, delimitar carga horária, justificativas e gestão de servidores — com relatórios em PDF.",
      story:
        "O Hydra organiza a jornada dos servidores da SSP-BA: o servidor/gestor cadastra escalas por mês/ano com períodos e justificativas; o gestor/admin delimita carga horária, autoriza escalas e acompanha horas registradas × restantes × trabalhadas. Há cadastro/consulta de servidores, administração de unidade/setor/cargo, cadastro de justificativas e relatório geral exportável em PDF. Atuei no frontend React (Ant Design + React Query + REST): fluxos de escala, autorização, carga horária e refatoração de módulos administrativos para hooks/queries — com papéis admin, gestor, user e suporte controlando o menu.",
      challenge:
        "Traduzir regras de jornada (limites, autorização, justificativas e papéis) numa UI confiável e operável no dia a dia institucional — sem quebrar o fluxo de quem cadastra e de quem aprova.",
      solution:
        "SPA em React 17 + Ant Design consumindo API REST (JWT), com React Query para cache/invalidação nos fluxos de escala e admin, e geração de PDF (@react-pdf) nos relatórios.",
      impact:
        "Centralizou escala, carga horária e autorização num único fluxo web — menos planilha manual e mais rastreabilidade para gestores e suporte SGTO.",
      highlights: [
        "Escala: cadastrar, consultar, autorizar e delimitar carga horária",
        "Justificativas + relatório geral em PDF",
        "Servidores e admin (unidade, setor, cargo) por perfil",
        "React Query e hooks nos módulos de escala e administração",
      ],
      tech: [
        "React 17",
        "Ant Design",
        "React Query",
        "Axios",
        "REST APIs",
        "react-pdf",
      ],
      confidential: false,
      featured: false,
      evidence: "supporting",
      company: "SSP-BA",
      cover: "/projects/hydra-cover.jpg",
      images: [
        {
          src: "/projects/hydra-cover.jpg",
          alt: "Ilustração conceitual do Hydra",
          caption:
            "Contexto visual — prints de produto pendentes (ambiente institucional).",
        },
      ],
      icon: "web",
    },
    {
      slug: "edge-vision",
      name: "Edge Vision",
      period: "out/2025 – nov/2025",
      description:
        "MVP de detecção de anomalias em vídeo com Edge AI e TensorFlow Lite — inferência on-device, sem depender da nuvem.",
      story:
        "Projeto/MVP explorando visão computacional na borda: detectar eventos críticos no dispositivo, priorizando latência, privacidade e operação offline.",
      challenge:
        "Inferência em tempo real em hardware limitado, com pipeline de vídeo estável.",
      solution:
        "Flutter + TensorFlow Lite e serviços locais para orquestração on-device.",
      impact:
        "Prova de conceito de anomaly detection na borda, reutilizável para monitoramento local.",
      highlights: [
        "Inferência on-device com TFLite",
        "Privacidade e baixa latência",
      ],
      tech: ["Flutter", "Dart", "TensorFlow Lite", "Node.js"],
      github: "https://github.com/pchi4/device-iot-edg",
      confidential: false,
      featured: false,
      evidence: "supporting",
      company: "UFBA",
      cover: "/projects/edge-vision-cover.jpg",
      images: [
        {
          src: "/projects/edge-vision-cover.jpg",
          alt: "Ilustração conceitual do Edge Vision",
          caption: "Visão computacional na borda — conceito visual do MVP.",
        },
        {
          src: "/projects/edge-vision.png",
          alt: "Captura / mockup do Edge Vision",
          caption: "Interface e fluxo do MVP embarcado.",
        },
      ],
      icon: "vision",
    },
  ] as Project[],

  skills: {
    mobile: [
      "React Native",
      "Expo",
      "New Architecture",
      "Hermes",
      "TanStack Query",
      "MMKV",
    ],
    frontend: [
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "Design Systems",
    ],
    architecture: [
      "Clean Architecture",
      "SOLID",
      "Offline-First",
      "Feature-based",
      "REST APIs",
    ],
    backend: ["Node.js", "NestJS", "GraphQL", "PostgreSQL", "MySQL", "Docker"],
    delivery: [
      "GitHub Actions",
      "Expo EAS",
      "Fastlane",
      "Jest",
      "Detox",
      "Sentry",
    ],
    ai: [
      "OpenAI Codex",
      "Custom Agents",
      "MCP Connections",
      "Agents in Chat",
      "AI-assisted Dev",
    ],
  },

  certifications: [
    {
      name: "Arquitetura de Software & Design de Sistemas Modernos",
      org: "Udemy",
      issued: "jan/2026",
      code: "UC-05028679-d483-4bb1-a452-ed4c121b4608",
      focus: ["Clean Architecture", "Escalabilidade", "System Design"],
      url: "https://www.udemy.com/certificate/UC-05028679-d483-4bb1-a452-ed4c121b4608/",
    },
    {
      name: "Desenvolvedor Full Stack React e Node.js (MERN)",
      org: "Udemy",
      issued: "dez/2025",
      code: "UC-eaaa2b176-e6a0-415b-bd1f-dc19d5d3e860",
      focus: ["React", "Node.js", "Redux"],
      url: "https://www.udemy.com/certificate/UC-eaaa2b176-e6a0-415b-bd1f-dc19d5d3e860/",
    },
    {
      name: "Flutter: Desenvolva Apps para Android e iOS",
      org: "Udemy",
      issued: "2024",
      code: "UC-5a726df7-7a63-4147-a334-776ef660e402",
      focus: ["Flutter", "Dart", "Mobile"],
      url: "https://www.udemy.com/certificate/UC-5a726df7-7a63-4147-a334-776ef660e402/",
    },
    {
      name: "React Native: Desenvolva Apps Nativos para Android e iOS",
      org: "Udemy",
      issued: "2024",
      code: "UC-363948bc-5cc2-463b-8b02-0f8e28f93148",
      focus: ["React Native", "iOS", "Android"],
      url: "https://www.udemy.com/certificate/UC-363948bc-5cc2-463b-8b02-0f8e28f93148/",
    },
  ],

  languagesSpoken: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário-avançado" },
  ],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return profile.projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return profile.projects.filter((p) => p.featured);
}

export function getOtherProjects(): Project[] {
  return profile.projects.filter((p) => !p.featured);
}
