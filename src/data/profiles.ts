export const profile = {
  name: "Douglas Lopes Rodrigues dos Santos",
  role: "Engenheiro de Software Mobile e Frontend",
  location: "Salvador - BA",
  phone: "(71) 99184-5687",
  email: "pchialoopes@gmail.com",
  github: "https://github.com/pchi4",
  linkedin: "https://linkedin.com/in/douglas-loopes",

  summary: `
Engenheiro de Software com experiência em desenvolvimento mobile e frontend, atuando na
criação de aplicações escaláveis, performáticas e orientadas a boas práticas de engenharia.
Forte experiência com React Native, Flutter e arquiteturas modernas voltadas à experiência do
usuário, qualidade de código e continuidade de entrega.
`,

  education: [
    {
      institution: "UNICID – Universidade Cidade de São Paulo",
      degree: "CST em Análise e Desenvolvimento de Sistemas",
      status: "Concluído",
    },
    {
      institution: "UFBA – Universidade Federal da Bahia",
      degree: "Mestrado em Engenharia de Software",
      status: "Cursando",
      research:
        "Arquitetura de Sistemas e Engenharia de Software Contemporânea",
    },
  ],

  experience: [
    {
      company: "PRODEB – Companhia de Processamento de Dados da Bahia",
      role: "Consultor",
      period: "jun/2023 – atual",
      activities: [
        "Manutenção e evolução de aplicações mobile em produção",
        "Liderança técnica de equipes mobile utilizando React Native e Flutter.",
        "Publicação e gerenciamento de versões (Play Console e App Store)",
        "Automação de deploy, CI/CD e padronização de código",
      ],
    },
    {
      company: "SSP-BA - Secretaria da Segurança Pública da Bahia",
      role: "Desenvolvedor Front-End",
      period: "2021 – 2023",
      activities: [
        "Desenvolvimento de funcionalidades mobile híbridas e nativas",
        "Refatoração de módulos",
        "Correção de bugs e tratamento de exceções",
        "Trabalho colaborativo com times multidisciplinares",
      ],
    },
  ],

  projects: [
    {
      name: "Edge Vision",
      description:
        "Sistema IoT para monitoramento e processamento de dados em borda integrado a dispositivos físicos.",
      tech: ["Flutter", "Dart", "HTTP", "MQTT"],
      github: "https://github.com/pchi4/device-iot-edg",
    },
    {
      name: "Caffeine Army Challenger",
      description:
        "Aplicação full stack para consulta de dados empresariais via CNPJ com arquitetura modular e containers.",
      tech: ["React.js", "Nest.js", "Docker", "MySQL"],
      github: "https://github.com/pchi4/caffeinearmy-infra",
    },
    {
      name: "IoT Edge Simulator",
      description:
        "Simulador de dispositivos IoT com processamento de borda, coleta via MQTT e visualização de dados em tempo real via Grafana.",
      tech: ["Docker", "Python", "MQTT", "Grafana"],
      github: "https://github.com/pchi4/simulator-iot-edge",
    },
  ],

  skills: {
    mobile: ["React Native", "Flutter", "iOS", "Android"],
    frontend: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Firebase",
      "MongoDB",
    ],
    devops: ["Docker", "CI/CD", "Firebase"],
    tools: ["Git", "MySQL", "Scrum", "SOLID", "Clean Architecture", "DDD"],
    languages: ["TypeScript", "JavaScript", "Dart", "Python"],
    innovation: ["TensorFlow", "LLM", "MQTT", "Grafana"],
  },

  certifications: [
    {
      name: "Flutter: Desenvolva Apps para Android e iOS",
      org: "Udemy",
      code: "UC-5a726df7-7a63-4147-a334-776ef660e402",
    },
    {
      name: "React Native: Desenvolva Apps Nativos",
      org: "Udemy",
      code: "UC-363948bc-5cc2-463b-8b02-0f8e28f93148",
    },
    {
      name: "Aquitetura de Software & Design de Sistemas Modernos",
      org: "Udemy",
      code: "UC-05028679-d483-4bb1-a452-ed4c121b4608",
    },
    {
      name: "Desenvolvedor Full Stack React e Node.js (MERN)",
      org: "Udemy",
      code: "UC-05028679-d483-4bb1-a452-ed4c121b4608",
    },
  ],

  languagesSpoken: [
    {
      name: "Inglês",
      level: "Intermediário-avançado",
    },
  ],
};
