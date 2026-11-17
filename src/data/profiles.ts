export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
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
  company?: string;
  github?: string;
  store?: string;
  cover: string;
  images: ProjectImage[];
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
    "Senior Software Engineer com experiência em arquitetura e desenvolvimento de aplicações mobile e web para ambientes operacionais críticos. Especialista em React Native, Expo e TypeScript, com atuação em React, APIs REST e backend. Liderança técnica, modernização de legados, performance, offline-first, CI/CD e AI-assisted software engineering.",

  tagline:
    "Arquitetura e engenharia de produtos digitais para operações críticas.",

  openToWork:
    "Aberto a oportunidades remotas ou híbridas com times de engenharia.",

  metrics: [
    { value: "7k+", label: "Usuários em plataformas SSP (MOP)" },
    { value: "−65%", label: "Tempo em fluxos críticos" },
    { value: "−30%", label: "Tempo de render (New Architecture)" },
    { value: "UFBA", label: "Mestrado em andamento" },
  ],

  education: [
    {
      institution: "UFBA – Universidade Federal da Bahia",
      degree: "Mestrado em Engenharia de Software",
      field: "Engenharia de Software",
      period: "jul/2025 – 2027",
      status: "Cursando",
      research: "Arquitetura de Sistemas e Engenharia de Software Contemporânea",
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
        "Liderança técnica e evolução arquitetural de apps mobile e web de segurança pública — em especial o MOP (operações de campo) e o App190 (pedido de socorro em tempo real pelo cidadão).",
      activities: [
        "Defini padrões, modularização, code review e decisões técnicas para o time.",
        "Arquitetura com React Native, Expo, React e TypeScript — Clean Architecture, SOLID e feature-based.",
        "Adotei React Native New Architecture (Fabric/TurboModules), Hermes e JSI; −30% no tempo de renderização em fluxos críticos.",
        "Offline-first com TanStack Query e MMKV para operação com conectividade limitada.",
        "Evoluí o MOP (missões de campo) e o App190 (SOS / urgência cidadã, incl. medida protetiva e motoristas de app).",
        "CI/CD com GitHub Actions, Fastlane e Expo EAS — releases na App Store e Google Play.",
        "Apliquei OpenAI Codex e IA generativa em análise de codebase, refatoração, code review e workflows com agents/skills.",
      ],
    },
    {
      company: "Secretaria da Segurança Pública da Bahia (SSP-BA)",
      role: "Software Engineer",
      type: "Tempo integral",
      period: "jun/2022 – mai/2023",
      location: "Salvador, Bahia · Presencial",
      summary:
        "Desenvolvimento e sustentação de aplicações web e mobile (Sentinela, SGM, MOP, Hydra) com Vue, React Native, JavaScript/TypeScript e APIs REST.",
      activities: [
        "Evoluí Sentinela e SGM em Vue, além de MOP e Hydra, para segurança pública e processos administrativos.",
        "Modernizei módulos legados com Clean Architecture, SOLID e modularização.",
        "Otimizei estado, integrações REST, fluxos assíncronos e performance.",
        "Participei do ciclo completo: requisitos, análise, desenvolvimento, review, testes e sustentação.",
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
        "React Native + Expo + TypeScript, Clean Architecture, offline-first com TanStack Query e MMKV, New Architecture (Fabric/TurboModules) e CI/CD com EAS/Fastlane — incluindo jornadas de RIP com mapa, leitura e exportação.",
      impact:
        "Na prática: mais produtividade (abordagens e verificações), respaldo operacional com policiamento orientado a dados e maior segurança do policial com acesso rápido à informação. Também −65% no carregamento de fluxos críticos e −30% no tempo de renderização.",
      highlights: [
        "Informação e comunicação nas mãos do policial em campo",
        "RIP — local do fato, visualização e geração de PDF/resumo",
        "Offline-first com TanStack Query e MMKV",
        "New Architecture, Hermes, JSI e CI/CD (EAS / Fastlane)",
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
        "Garantir acionamento rápido e confiável em cenários de urgência, com fluxos sensíveis (medida protetiva integrada ao TJ, SOS para motoristas), seleção precisa de local e baixa margem para falha.",
      solution:
        "App em React Native + TypeScript com jornadas de SOS, mapa para local do fato, countdown de envio automático e integrações com o ecossistema da segurança pública.",
      impact:
        "Validou um canal digital de pedido de socorro em tempo real e especializações de SOS (medida protetiva e motoristas de app). Apesar do ciclo curto em produção, fortaleceu a base técnica de produtos de emergência no contexto SSP-BA / PRODEB.",
      highlights: [
        "Pedido de socorro em tempo real ao cidadão",
        "SOS Mulher com validação de medida protetiva (TJ)",
        "SOS para motoristas de aplicativos",
        "Envio automático em segundos quando não é possível detalhar",
      ],
      tech: ["React Native", "TypeScript", "Expo", "CI/CD"],
      confidential: false,
      featured: true,
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
      name: "Sentinela — Inteligência e Monitoramento",
      period: "2021 – 2023",
      description:
        "Sistema web para consulta e monitoramento de veículos e pessoas, integrando proprietários, restrições e movimentações de redes de câmeras.",
      story:
        "Desenvolvido no contexto da SSP-BA, o Sentinela centraliza consultas e monitoramento operacional com dados de restrições e câmeras — apoiando decisões em tempo quase real.",
      challenge:
        "Integrar múltiplas fontes (pessoas, veículos, restrições, câmeras) com interface clara para uso operacional.",
      solution:
        "Frontend em Vue consumindo APIs REST internas, com foco em usabilidade e confiabilidade das consultas.",
      impact:
        "Ferramenta de monitoramento usada em processos de inteligência e segurança pública.",
      highlights: [
        "Consultas de veículos e pessoas",
        "Integração com redes de câmeras",
        "Stack Vue + REST APIs",
      ],
      tech: ["Vue", "JavaScript", "REST APIs"],
      confidential: false,
      featured: false,
      company: "SSP-BA",
      cover: "/projects/sentinela-cover.jpg",
      images: [
        {
          src: "/projects/sentinela-cover.jpg",
          alt: "Ilustração conceitual do Sentinela",
          caption: "Monitoramento e inteligência — conceito visual.",
        },
      ],
      icon: "web",
    },
    {
      slug: "sgm",
      name: "SGM — Gestão de Manifestações",
      period: "2021 – 2023",
      description:
        "Sistema web para registro, acompanhamento e gestão de manifestações e processos de ouvidoria.",
      story:
        "O SGM nasceu no contexto institucional da SSP-BA para organizar o ciclo de manifestações cidadãs e demandas de ouvidoria: cadastro, consulta com filtros (período, natureza, canal, envolvido), acompanhamento de status/prazo e gestão do fluxo até a conclusão. Atuei no desenvolvimento e evolução frontend — login institucional, listagens e telas de controle — alinhando a interface às regras de negócio e aos processos administrativos internos.",
      challenge:
        "Dar clareza a um fluxo administrativo com múltiplos status, prazos, papéis e histórico — sem perder usabilidade para equipes de atendimento e ouvidoria.",
      solution:
        "Aplicação web em Vue integrada a APIs REST, com autenticação por matrícula, consulta avançada e painéis de acompanhamento e controle.",
      impact:
        "Centralizou o acompanhamento de ouvidoria e manifestações, reduzindo atrito operacional e aumentando a rastreabilidade dos processos.",
      highlights: [
        "Consulta e cadastro de manifestações",
        "Acompanhamento com status e prazo",
        "Stack Vue · login institucional SSP-BA",
      ],
      tech: ["Vue", "JavaScript", "REST APIs"],
      confidential: false,
      featured: true,
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
      name: "Hydra",
      period: "2021 – 2023",
      description:
        "Sistema para gestão e contabilização de carga horária de servidores e suporte ao cálculo de horas extraordinárias.",
      story:
        "O Hydra apoia a gestão de jornada na SSP-BA: contabilização de carga horária de servidores e processos ligados a horas extraordinárias. Participei do desenvolvimento e sustentação da solução, com foco em regras de negócio de ponto/horas e confiabilidade dos dados exibidos às áreas administrativas.",
      challenge:
        "Traduzir regras complexas de carga horária e extras em uma interface confiável, auditável e fácil de operar no dia a dia institucional.",
      solution:
        "Sistema web com React/TypeScript (e integrações REST), orientado a consulta, consolidação e acompanhamento de horas.",
      impact:
        "Apoiou processos administrativos de jornada e horas extras com maior rastreabilidade e menos retrabalho manual.",
      highlights: [
        "Contabilização de carga horária",
        "Suporte a horas extraordinárias",
        "Fluxos administrativos institucionais",
      ],
      tech: ["React", "TypeScript", "REST APIs", "JavaScript"],
      confidential: false,
      featured: false,
      company: "SSP-BA",
      cover: "/projects/hydra-cover.jpg",
      images: [
        {
          src: "/projects/hydra-cover.jpg",
          alt: "Ilustração conceitual do Hydra",
          caption: "Gestão de carga horária — conceito visual.",
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
      "AI-assisted Dev",
      "Agentic Workflows",
      "Context Engineering",
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
