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
    tagline: "Discipline, stamina, and resilience — built, not assumed.",
    overview:
      "Physical strength is the foundation of discipline. Without it, consistency and resilience weaken. AHE focuses on structured physical development to build endurance, teamwork, and real-world capability through camps, challenge-based activities, sports, and outdoor experiences.",
    keyAreas: ["Fitness and endurance training", "Outdoor survival challenges", "Team coordination and discipline", "Physical resilience under pressure"],
    whyItMatters:
      "Students who develop physical discipline show improved focus, confidence, and performance in other areas of life.",
    programs: [
      { name: "Snow Olympiad", to: "/programs/snow-olympiad/" },
      { name: "GB Survivor", to: "/programs/gb-survivor/" },
    ],
    image: "/images/domain-physical.jpg",
  },
  {
    name: "Mental",
    color: "#1F3C88",
    tagline: "Structured thinking that holds up under pressure.",
    overview:
      "Mental clarity is the ability to think, analyze, and decide effectively. AHE builds structured thinking through academic and problem-solving activities — most students memorize formulas but cannot apply them, which is exactly the gap this domain closes.",
    keyAreas: ["Logical reasoning", "Analytical thinking", "Problem-solving under time pressure", "Academic clarity"],
    whyItMatters:
      "Students trained in structured thinking perform better academically and make better decisions in real life.",
    programs: [{ name: "The Little Scientist", to: "/programs/the-little-scientist/" }],
    image: "/images/domain-mental.jpg",
  },
  {
    name: "Emotional",
    color: "#8C3A44",
    tagline: "The strength schools rarely teach.",
    overview:
      "Emotional strength is often ignored but critical. Without it, students struggle with stress, communication, and confidence — capacities AHE builds deliberately rather than leaving to chance.",
    keyAreas: ["Self-awareness", "Confidence building", "Communication skills", "Stress management"],
    whyItMatters:
      "Emotionally stable individuals perform better in teams, leadership roles, and personal life.",
    programs: [{ name: "Emotional Development", to: "/programs/emotional-development/" }],
    image: "/images/domain-emotional.jpg",
  },
  {
    name: "Spiritual",
    color: "#C6A84E",
    tagline: "Purpose that outlasts motivation.",
    overview:
      "Spiritual development builds purpose and direction. It is not about theory — it is about alignment between actions and values, practiced through reflection under open sky rather than lectures.",
    keyAreas: ["Values and ethics", "Discipline and responsibility", "Purpose-driven thinking", "Respect and awareness"],
    whyItMatters: "Students with strong values make better long-term decisions.",
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
    short: "Discipline, stamina, coordination, and resilience — treated as preparation for life, not play.",
    domains: ["Physical"],
    accent: "#0B6E4F",
    overview:
      "Physical development builds discipline, stamina, coordination, and resilience. At AHE, physical growth is not treated as play — it is treated as preparation for life, delivered through camps, challenge-based activities, sports, and outdoor experiences where students learn by doing.",
    gains: [
      "Endurance and physical resilience under pressure",
      "Discipline built through training, not lectures",
      "Team coordination and leadership under pressure",
      "Outdoor adaptability and body-mind coordination",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "mental-development",
    name: "Mental Development",
    short: "Structured thinking, logical reasoning, and academic clarity — anchored by The Little Scientist.",
    domains: ["Mental"],
    accent: "#1F3C88",
    overview:
      "The Mental Development track centres on The Little Scientist, AHE's flagship academic competition, supported by structured problem-solving activities that build logical reasoning and analytical thinking beyond the syllabus.",
    gains: [
      "Logical reasoning and analytical thinking",
      "Problem-solving under time pressure",
      "Academic clarity that carries into the classroom",
      "Confidence built through competitive practice",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "emotional-development",
    name: "Emotional Development",
    short: "Self-awareness, confidence, and communication — the strength schools rarely teach.",
    domains: ["Emotional"],
    accent: "#8C3A44",
    overview:
      "Emotional Development runs as a deliberate strand across AHE programming: self-awareness, confidence building, communication skills, and stress management, practised in real settings rather than taught from slides.",
    gains: [
      "Self-awareness and confidence building",
      "Communication skills that transfer to any room",
      "Stress management under real pressure",
      "Habits of honest self-reflection",
    ],
    cta: "Register Interest",
    inDropdown: true,
    note: "A dedicated named program for this domain is in development — current emotional-development work is embedded across all AHE camps and competitions.",
  },
  {
    slug: "spiritual-development",
    name: "Spiritual Development",
    short: "Values, purpose, and direction — anchored by Jugnoo Camp.",
    domains: ["Spiritual"],
    accent: "#C6A84E",
    overview:
      "The Spiritual Development track gives students structured room for values, purpose, and direction — anchored by Jugnoo Camp, AHE's flagship residential experience.",
    gains: [
      "A personal sense of purpose and direction",
      "Values and ethics put into practice",
      "Discipline and responsibility, self-owned",
      "Steadiness that outlasts motivation",
    ],
    cta: "Register Interest",
    inDropdown: true,
  },
  {
    slug: "the-little-scientist",
    name: "The Little Scientist",
    short: "A structured math competition for Grades 6–8 — logic, speed, and clarity under pressure.",
    domains: ["Mental"],
    accent: "#3FA7D6",
    overview:
      "Most students memorize formulas but cannot apply them — leading to weak problem-solving skills and low confidence. The Little Scientist is a structured student quiz competition designed to develop logical reasoning, speed, and clarity, open to students from Grades 6–8 across government, private, and AKES schools.",
    gains: [
      "Independent learning skills",
      "Strong mathematical thinking",
      "Faster problem-solving under time pressure",
      "Confidence under pressure, tested on stage",
    ],
    cta: "Register for The Little Scientist",
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
    short: "A 40-day structured training to build real digital skills and income opportunities.",
    domains: ["Mental", "Emotional"],
    accent: "#0B6E4F",
    overview:
      "The 51 Freelancers Program is a 40-day structured training that builds real digital skills and income opportunities — writing, design, development, and client work — with the explicit goal of each cohort member earning independently online.",
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
    short: "An outdoor survival program that builds adaptability and leadership.",
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
    short: "AHE's flagship holistic camp — one experience spanning all four domains.",
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

/** Real testimonials, from ahepakistan.org/impact-stories/. Names only — no fabricated ages/grades. */
export const stories = [
  {
    name: "Imad Ullah",
    program: "The Little Scientist",
    quote: "I gained confidence in solving problems without fear. This program changed how I think.",
    domain: "Mental" as DomainName,
  },
  {
    name: "Shehzad Karim",
    program: "Snow Olympiad",
    quote: "I learned discipline and teamwork. It was more than a competition.",
    domain: "Physical" as DomainName,
  },
  {
    name: "Hameed Ullah Baig",
    program: "51 Freelancers Program",
    quote: "This training helped me start earning online. It gave me direction.",
    domain: "Mental" as DomainName,
  },
]

/**
 * Only the SECP certificate is confirmed live (public/documents/). Annual
 * report PDFs (2024/2025/2026, per ahepakistan.org/annual-reports/) have not
 * been supplied yet — download buttons are disabled until AHE shares them.
 */
export const reports = [
  { year: "2026", title: "Annual Report 2026", summary: "Pending — will be published once finalized.", available: false },
  { year: "2025", title: "Annual Report 2025", summary: "Pending — will be published once finalized.", available: false },
  { year: "2024", title: "Annual Report 2024", summary: "Pending — will be published once finalized.", available: false },
]

export const blogPosts = [
  {
    title: "Why We Built a Math Competition for the Mountains",
    date: "12 May 2026",
    domain: "Mental" as DomainName,
    excerpt:
      "Most students memorize formulas but cannot apply them. The Little Scientist exists to close that gap, one quiz round at a time.",
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

/** Real social profile URLs. Empty string = not yet supplied; icon renders but is visually muted until filled in. */
export interface SocialLink {
  platform: "Facebook" | "Instagram" | "LinkedIn" | "YouTube" | "Twitter"
  url: string
}

export const socialLinks: SocialLink[] = [
  { platform: "Facebook", url: "" },
  { platform: "Instagram", url: "" },
  { platform: "LinkedIn", url: "" },
  { platform: "YouTube", url: "" },
]

/** Site credit — matches the pattern already live on ahepakistan.org's footer. */
export const siteCredit = {
  name: "Saleem Yagzan",
  linkedin: "https://www.linkedin.com/in/salimyagzan/",
  upwork: "https://www.upwork.com/freelancers/~01a4701679c71ba500",
}
