export type DomainName = "Physical" | "Mental" | "Emotional" | "Spiritual"

export interface Domain {
  name: DomainName
  color: string
  tagline: string
  overview: string
  keyAreas: string[]
  whyItMatters: string
  programs: { name: string; to: string }[]
  image: string
}

export const PARTNER_URL = "/partner-with-us-ahe-pakistan/"

export const domainColor: Record<DomainName, string> = {
  Physical: "#0B6E4F",
  Mental: "#1F3C88",
  Emotional: "#8C3A44",
  Spiritual: "#C6A84E",
}

export const domains: Domain[] = [
  {
    name: "Physical",
    color: "#0B6E4F",
    tagline: "Strong bodies carry strong minds.",
    overview:
      "Structured outdoor and athletic programming that builds endurance, discipline, and respect for the body. From high-altitude winter sport to wilderness survival, students learn that physical capability is earned through consistent practice.",
    keyAreas: ["Outdoor expeditions and camps", "Winter and endurance sport", "Survival and self-reliance skills", "Health, nutrition, and rest habits"],
    whyItMatters:
      "Physical confidence is the foundation the other domains stand on. A student who has crossed a glacier or completed a survival course approaches the classroom differently.",
    programs: [
      { name: "Snow Olympiad", to: "/programs/snow-olympiad/" },
      { name: "GB Survivor", to: "/programs/gb-survivor/" },
    ],
    image: "/images/domain-physical.jpg",
  },
  {
    name: "Mental",
    color: "#1F3C88",
    tagline: "Rigour, curiosity, and the courage to compete.",
    overview:
      "Academic enrichment that treats young Pakistanis as capable of world-class intellectual performance. Competitive science, structured problem-solving, and the study habits that sustain both.",
    keyAreas: ["Competitive science and Olympiad training", "Critical thinking and inquiry", "Study systems and deep work", "STEM exposure beyond the syllabus"],
    whyItMatters:
      "Talent is evenly distributed; opportunity is not. Mental development programming closes that gap with rigour, not shortcuts.",
    programs: [{ name: "The Little Scientist", to: "/programs/the-little-scientist/" }],
    image: "/images/domain-mental.jpg",
  },
  {
    name: "Emotional",
    color: "#8C3A44",
    tagline: "Confidence, communication, and character.",
    overview:
      "Deliberate practice in the skills schools rarely teach: speaking with confidence, listening with attention, handling setbacks, and working in teams. Emotional development runs as a thread through every AHE program.",
    keyAreas: ["Public speaking and communication", "Confidence and self-expression", "Teamwork and conflict navigation", "Resilience and self-regulation"],
    whyItMatters:
      "A brilliant student who cannot speak in a room, or recover from a failure, is not yet prepared for life. Emotional capability turns potential into contribution.",
    programs: [{ name: "Emotional Development", to: "/programs/emotional-development/" }],
    image: "/images/domain-emotional.jpg",
  },
  {
    name: "Spiritual",
    color: "#C6A84E",
    tagline: "Purpose, reflection, and inner steadiness.",
    overview:
      "Quiet, reflective programming — often outdoors, often at night under open sky — that gives students room to ask who they are and what they are for. Grounded, respectful, and never performative.",
    keyAreas: ["Reflection and journaling practice", "Purpose and values work", "Service and gratitude", "Stillness and attention"],
    whyItMatters:
      "Direction outlasts motivation. Students who know why they are learning keep going long after external rewards fade.",
    programs: [{ name: "Jugnoo Camp", to: "/programs/jugnoo-camp/" }],
    image: "/images/domain-spiritual.jpg",
  },
]

export interface Program {
  slug: string
  name: string
  short: string
  domains: DomainName[]
  accent: string
  overview: string
  gains: string[]
  cta: string
  inDropdown: boolean
  note?: string
  image?: string
}

export const programs: Program[] = [
  {
    slug: "physical-development",
    name: "Physical Development",
    short: "Outdoor expeditions, winter sport, and survival programming that build disciplined, capable bodies.",
    domains: ["Physical"],
    accent: "#0B6E4F",
    overview:
      "AHE's Physical Development track takes students out of the classroom and into Gilgit-Baltistan's mountains, snowfields, and valleys. Flagship programs include the Snow Olympiad and GB Survivor — structured, supervised, and progressively challenging.",
    gains: [
      "Endurance, strength, and outdoor competence",
      "Discipline built through training cycles, not lectures",
      "Safety, first-aid, and risk-judgement fundamentals",
      "The quiet confidence of finishing something hard",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "mental-development",
    name: "Mental Development",
    short: "Academic rigour and competitive science that treat young minds as capable of excellence.",
    domains: ["Mental"],
    accent: "#1F3C88",
    overview:
      "The Mental Development track centres on The Little Scientist — AHE's elite science Olympiad — supported by inquiry-based enrichment that goes beyond the syllabus and builds durable study systems.",
    gains: [
      "Structured problem-solving under pressure",
      "Olympiad-level scientific reasoning",
      "Study habits that survive exam season",
      "Exposure to STEM paths and mentors",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "emotional-development",
    name: "Emotional Development",
    short: "Confidence and communication programming — learning to speak, listen, recover, and lead.",
    domains: ["Emotional"],
    accent: "#8C3A44",
    overview:
      "Emotional Development runs as a deliberate strand across AHE programming: public speaking, teamwork, resilience, and self-regulation, practised in real settings rather than taught from slides.",
    gains: [
      "Public speaking and confident self-expression",
      "Listening, empathy, and team skills",
      "Composure under setback and pressure",
      "Habits of honest self-reflection",
    ],
    cta: "Register Interest",
    inDropdown: true,
    note: "A dedicated named program for this domain is in development — current emotional-development work is embedded across all AHE camps and Olympiads.",
  },
  {
    slug: "spiritual-development",
    name: "Spiritual Development",
    short: "Reflective, purpose-centred programming anchored by Jugnoo Camp.",
    domains: ["Spiritual"],
    accent: "#C6A84E",
    overview:
      "The Spiritual Development track gives students structured room for reflection, purpose, and service — anchored by Jugnoo Camp, AHE's flagship residential experience.",
    gains: [
      "A personal sense of purpose and direction",
      "Reflection and journaling practice",
      "Gratitude and service orientation",
      "Steadiness that outlasts motivation",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "the-little-scientist",
    name: "The Little Scientist",
    short: "AHE's elite science Olympiad — rigorous, competitive, and prestigious.",
    domains: ["Mental"],
    accent: "#3FA7D6",
    overview:
      "The Little Scientist is AHE Pakistan's flagship academic competition: a multi-stage science Olympiad that identifies and develops exceptional young scientific minds. Selection is competitive, standards are high, and finalists earn recognition that follows them.",
    gains: [
      "Olympiad-standard scientific reasoning",
      "Multi-stage competitive experience",
      "Recognition, medals, and formal certification",
      "A community of high-performing peers",
    ],
    cta: "Enter the Olympiad",
    inDropdown: true,
    image: "/images/program-little-scientist.jpg",
  },
  {
    slug: "youth-leadership",
    name: "Youth Leadership",
    short: "Training young people to organise, decide, and take responsibility for others.",
    domains: ["Emotional", "Mental"],
    accent: "#1F3C88",
    overview:
      "Youth Leadership develops the students who will run tomorrow's programs: planning, delegation, public responsibility, and the ethics of leading well. Senior participants co-lead AHE camps under mentorship.",
    gains: [
      "Real leadership roles inside live programs",
      "Planning and decision-making practice",
      "Mentorship from AHE program leads",
      "A pathway from participant to trainer",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "51-freelancers-program",
    name: "51 Freelancers Program",
    short: "Digital-economy skills that turn talent into income — 51 trained freelancers at a time.",
    domains: ["Mental", "Emotional"],
    accent: "#0B6E4F",
    overview:
      "The 51 Freelancers Program trains cohorts of young people in marketable digital skills — writing, design, development, and client work — with the explicit goal of each cohort member earning independently online.",
    gains: [
      "A marketable digital skill, taught to working standard",
      "Client communication and professional conduct",
      "Portfolio and platform-profile development",
      "A cohort network of working peers",
    ],
    cta: "Apply to the Next Cohort",
    inDropdown: true,
    image: "/images/program-51-freelancers.jpg",
  },
  {
    slug: "snow-olympiad",
    name: "Snow Olympiad",
    short: "Winter sport competition in the high valleys of Gilgit-Baltistan.",
    domains: ["Physical"],
    accent: "#0B6E4F",
    overview:
      "The Snow Olympiad brings structured winter athletic competition to students in Gilgit-Baltistan — events, training, and ceremony that treat mountain winter as an arena rather than an obstacle.",
    gains: [
      "Winter-sport skills and cold-weather competence",
      "Competitive experience with real stakes",
      "Team identity and district pride",
      "Fitness built through a full training season",
    ],
    cta: "Register Interest",
    inDropdown: false,
    image: "/images/program-snow-olympiad.jpg",
  },
  {
    slug: "gb-survivor",
    name: "GB Survivor",
    short: "A wilderness survival challenge that tests preparation, judgement, and grit.",
    domains: ["Physical"],
    accent: "#0B6E4F",
    overview:
      "GB Survivor is AHE's supervised wilderness challenge: navigation, shelter, cooking, first aid, and team problem-solving in the outdoors of Gilgit-Baltistan, with safety staff throughout.",
    gains: [
      "Practical survival and self-reliance skills",
      "Risk judgement and calm decision-making",
      "Team interdependence under real conditions",
      "First-aid and safety fundamentals",
    ],
    cta: "Register Interest",
    inDropdown: false,
    image: "/images/program-gb-survivor.jpg",
  },
  {
    slug: "jugnoo-camp",
    name: "Jugnoo Camp",
    short: "AHE's flagship residential camp — one experience spanning all four domains.",
    domains: ["Physical", "Mental", "Emotional", "Spiritual"],
    accent: "#C6A84E",
    overview:
      "Jugnoo Camp is AHE Pakistan's flagship residential experience. Days move through physical challenge, structured learning, and team practice; evenings close with reflection under open sky. It is the one program deliberately designed to span all four domains — Physical, Mental, Emotional, and Spiritual — in a single arc.",
    gains: [
      "A complete four-domain experience in one camp",
      "Friendships formed through shared challenge",
      "Reflection and purpose work, done well",
      "The memory students describe as 'the turning point'",
    ],
    cta: "Register Interest",
    inDropdown: false,
    image: "/images/program-jugnoo-camp.jpg",
  },
]

export const dropdownPrograms = programs.filter((p) => p.inDropdown)

export const homePreviewSlugs = [
  "the-little-scientist",
  "snow-olympiad",
  "gb-survivor",
  "jugnoo-camp",
  "51-freelancers-program",
]

export const stats = [
  { value: 500, suffix: "+", label: "Students Engaged" },
  { value: 5, suffix: "+", label: "Major Programs Delivered" },
  { value: 3, suffix: "+", label: "Districts Reached" },
  { value: 0, suffix: "", label: "Growing Female Participation", text: "Growing" },
]

export const stories = [
  {
    name: "Areeba, 15",
    program: "The Little Scientist",
    quote:
      "I had never competed in anything before. Standing on that stage with a medal — my parents still talk about it.",
    domain: "Mental" as DomainName,
  },
  {
    name: "Danish, 17",
    program: "GB Survivor",
    quote:
      "Three days outdoors taught me more about myself than three years of classes. I stopped being afraid of hard things.",
    domain: "Physical" as DomainName,
  },
  {
    name: "Mahnoor, 16",
    program: "Jugnoo Camp",
    quote:
      "The night reflections changed how I think about my future. I came home with a direction, not just memories.",
    domain: "Spiritual" as DomainName,
  },
  {
    name: "Hassan, 19",
    program: "51 Freelancers Program",
    quote: "I earned my first income online two months after the cohort ended. That changed what my family believes is possible.",
    domain: "Mental" as DomainName,
  },
  {
    name: "Fatima, 14",
    program: "Snow Olympiad",
    quote: "Girls from my village had never joined a winter competition. Now my younger sister is training for next year.",
    domain: "Physical" as DomainName,
  },
  {
    name: "Ali, 16",
    program: "Youth Leadership",
    quote: "Last year I was a camper. This year I helped run the camp. AHE trusted me with responsibility before anyone else did.",
    domain: "Emotional" as DomainName,
  },
]

export const reports = [
  {
    year: "2024",
    title: "Annual Report 2024",
    summary: "Program expansion to a third district, the second Snow Olympiad, and the first full 51 Freelancers cohort.",
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    summary: "The Little Scientist scales to multi-district selection; Jugnoo Camp runs its largest residential cohort.",
  },
  {
    year: "2022",
    title: "Annual Report 2022",
    summary: "Foundation years consolidated: governance, safeguarding policy, and the four-domain program framework.",
  },
]

export const blogPosts = [
  {
    title: "Why We Built a Science Olympiad for the Mountains",
    date: "12 May 2026",
    domain: "Mental" as DomainName,
    excerpt:
      "Talent in Gilgit-Baltistan was never in short supply — structured competition was. The Little Scientist exists to close that gap.",
  },
  {
    title: "What Students Tell Us After Jugnoo Camp",
    date: "28 March 2026",
    domain: "Spiritual" as DomainName,
    excerpt:
      "We asked one question at the end of camp: what changed? The answers were quieter, and deeper, than we expected.",
  },
  {
    title: "Cold Is a Teacher: Notes from the Snow Olympiad",
    date: "9 February 2026",
    domain: "Physical" as DomainName,
    excerpt:
      "Winter closes schools across the north. For two weeks, we turn it into an arena instead.",
  },
  {
    title: "Teaching Confidence Like a Skill, Not a Trait",
    date: "17 December 2025",
    domain: "Emotional" as DomainName,
    excerpt:
      "Confidence isn't a personality type. It's a set of reps — and our programs are built around getting students those reps.",
  },
]
