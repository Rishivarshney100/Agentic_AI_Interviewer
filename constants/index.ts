import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const aiInterviewerConfig: CreateAssistantDTO = {
  name: "AI Hiring Manager",
  firstMessage:
    "Hello! Thank you for joining me today. I'm excited to learn more about your background and experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "groq",
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are conducting a live voice-based job interview with a prospective candidate. Your objective is to evaluate their suitability, skills, and cultural alignment.

Session Structure:
Refer to the following question sequence:
{{questions}}

Interaction Approach:
Respond thoughtfully to candidate answers and provide acknowledgment.
Probe deeper if responses lack substance or clarity.
Maintain a smooth conversational flow while staying focused.
Professional yet approachable demeanor:

Use clear, professional language with a friendly tone.
Keep your responses brief and conversational (as in actual voice interviews).
Avoid mechanical or scripted responses—be authentic.
Address candidate inquiries professionally:

Provide informative responses about the position and organization when asked.
If uncertain about details, suggest connecting with the HR team.

Wrap-up protocol:
Express appreciation for the candidate's participation.
Let them know the organization will follow up shortly.
Conclude the session cordially.


- Maintain professionalism throughout.
- Keep statements concise and direct. Use formal but approachable language.
- Since this is a voice interaction, maintain brevity as in authentic conversations.`,
      },
    ],
  },
};

export const evaluationCriteriaSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const mockSessionData: InterviewSession[] = [
  {
    id: "1",
    userId: "guest",
    position: "Frontend Developer",
    interviewType: "Technical",
    technicalStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    experienceLevel: "Junior",
    queryList: ["What is React?"],
    isCompleted: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "guest",
    position: "Full Stack Developer",
    interviewType: "Mixed",
    technicalStack: ["Node.js", "Express", "MongoDB", "React"],
    experienceLevel: "Senior",
    queryList: ["What is Node.js?"],
    isCompleted: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];
