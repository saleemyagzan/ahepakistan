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

export interface BlogSection {
  heading?: string
  paragraphs: string[]
  /** Internal links surfaced under the section — real <Link> elements, not prose text. */
  links?: { label: string; to: string }[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  domain: DomainName
  excerpt: string
  /** SEO meta description — under 160 chars, may differ slightly from the on-page excerpt. */
  metaDescription: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-holistic-education-guide-pakistan",
    title: "What Is Holistic Education? A Complete Guide for Parents and Educators in Pakistan",
    date: "13 July 2026",
    domain: "Mental",
    excerpt:
      "Holistic education develops the whole young person, not just exam results. Here's what that actually means, and what it looks like in practice in Pakistan.",
    metaDescription:
      "A practical guide to holistic education in Pakistan: what it means, why it matters, and how AHE Pakistan builds it across four domains — Physical, Mental, Emotional, and Spiritual.",
    sections: [
      {
        paragraphs: [
          "Ask most parents in Pakistan what a good education looks like, and the answer usually comes down to marks: board results, entrance test scores, a seat in a good university program. It's an understandable answer — those things open doors. But a growing number of educators, psychologists, and parents are asking a harder question: what happens to a student who scores well but has never faced real physical hardship, never learned to sit with a difficult emotion, or never had to think for themselves outside a syllabus?",
          "That question is the starting point for holistic education. It isn't a rejection of academic rigour — it's an insistence that academic rigour alone isn't enough.",
        ],
      },
      {
        heading: "What \"holistic education\" actually means",
        paragraphs: [
          "Holistic education is an approach that deliberately develops a young person across multiple dimensions of growth — not just intellectual, but physical, emotional, and spiritual — treating them as interconnected rather than separate. The word gets used loosely, so it's worth being precise: holistic education is not extracurricular activities bolted onto a normal school day. It's a framework where every dimension of development is planned, delivered, and measured with the same seriousness as academics.",
          "At AHE Pakistan, we organize that framework into four domains: Physical, Mental, Emotional, and Spiritual. Each one addresses a different kind of capability a young person needs, and — critically — each one reinforces the others.",
        ],
      },
      {
        heading: "The four domains, briefly",
        paragraphs: [
          "Physical development builds discipline, stamina, and resilience through real challenge — outdoor expeditions, winter sport, and survival training rather than gym-class routine. Mental development builds structured thinking: logical reasoning, problem-solving under pressure, and academic clarity, tested through competitive platforms like a math Olympiad rather than rote memorization. Emotional development builds the self-awareness, confidence, and communication skills that schools rarely teach directly but every workplace and relationship demands. And Spiritual development — often the most misunderstood domain — builds purpose and values: not religious instruction, but the reflective capacity to know why you're doing what you're doing.",
        ],
        links: [{ label: "See the full framework on Our Domains", to: "/our-domains/" }],
      },
      {
        heading: "Why this matters more in Pakistan, not less",
        paragraphs: [
          "Pakistan's schooling system, like many exam-driven systems, rewards memorization. That's not a controversial claim — it's a design feature. Employers, universities, and communities consistently report a gap between graduates who can pass exams and graduates who can exercise judgement, initiative, and resilience under real conditions. That gap is exactly what holistic education is built to close.",
          "The case is sharper still in underserved districts. In much of Gilgit-Baltistan, for example, extraordinary young people simply never encounter structured competition, mentorship, or outdoor challenge — not because they lack ability, but because the infrastructure for it doesn't reach them. Holistic education, done properly, isn't a luxury add-on for well-resourced schools. It's an equity intervention.",
        ],
      },
      {
        heading: "What it looks like in practice",
        paragraphs: [
          "In practice, holistic education means a young person's week might include a structured math competition (The Little Scientist), a winter athletic program (the Snow Olympiad), a wilderness survival course (GB Survivor), and — bringing all four domains together in one residential experience — Jugnoo Camp, where physical challenge, structured learning, team practice, and evening reflection under open sky all happen inside a single arc.",
          "It also means treating digital-economy skills as part of holistic development, not separate from it — which is why our 51 Freelancers Program exists: a 40-day structured training that turns a marketable skill into real income, combining mental rigor with the emotional confidence of client work.",
        ],
        links: [{ label: "See all current programs", to: "/programs/" }],
      },
      {
        heading: "How to tell if a program is genuinely holistic",
        paragraphs: [
          "Three questions cut through most of the marketing language: Does the program have a written framework connecting each activity to a specific developmental outcome, or is it a collection of fun events? Does the organization publish outcomes and reports, or only testimonials? And does it reach students who wouldn't otherwise have access, or only those who can already afford enrichment?",
          "AHE Pakistan is a registered non-profit (SECP-incorporated, 13 December 2020), and we publish our incorporation certificate and annual reports publicly — because if we're asking students to meet standards, we should hold ourselves to them first.",
        ],
      },
      {
        heading: "Getting involved",
        paragraphs: [
          "If you're a parent or educator exploring holistic education for the first time, start with the four-domain framework, then see it in action across our current programs. And if you're a school, corporate, or organization interested in bringing structured youth development to your community, here's how that partnership works.",
        ],
        links: [
          { label: "Explore Our Domains", to: "/our-domains/" },
          { label: "Explore Programs", to: "/programs/" },
          { label: "Partner With AHE Pakistan", to: PARTNER_URL },
        ],
      },
    ],
  },
  {
    slug: "why-we-built-a-math-competition-for-the-mountains",
    title: "Why We Built a Math Competition for the Mountains",
    date: "12 May 2026",
    domain: "Mental",
    excerpt:
      "Most students memorize formulas but cannot apply them. The Little Scientist exists to close that gap, one quiz round at a time.",
    metaDescription:
      "The Little Scientist is AHE Pakistan's Grades 6-8 math competition, built to develop logical reasoning and problem-solving in students across Gilgit-Baltistan.",
    sections: [
      {
        paragraphs: [
          "Most students memorize formulas but cannot apply them. That single sentence is the reason The Little Scientist exists — a structured math quiz competition for Grades 6–8 students across government, private, and AKES schools, built to develop logical reasoning, speed, and clarity rather than recall.",
          "Competition structure is deliberately simple: individual participation, multiple quiz rounds, logical reasoning challenges, and time-based problem solving. No group projects to hide inside, no formula sheets to lean on. Just a student and a problem.",
        ],
      },
      {
        heading: "Why a competition, not a class",
        paragraphs: [
          "Classroom instruction is necessary but rarely sufficient to build confidence under pressure. A competition adds two ingredients a classroom can't: real stakes, and a stage. Students who place well remember it for years — not because of the medal, but because of what it proves to them about their own capability.",
        ],
        links: [{ label: "See who can participate", to: "/programs/the-little-scientist/" }],
      },
    ],
  },
  {
    slug: "what-students-tell-us-after-jugnoo-camp",
    title: "What Students Tell Us After Jugnoo Camp",
    date: "28 March 2026",
    domain: "Spiritual",
    excerpt:
      "We asked one question at the end of camp: what changed? The answers were quieter, and deeper, than we expected.",
    metaDescription:
      "Jugnoo Camp is AHE Pakistan's flagship residential experience spanning all four development domains. Here's what students say changed for them.",
    sections: [
      {
        paragraphs: [
          "We asked one question at the end of camp: what changed? The answers were quieter, and deeper, than we expected — fewer stories about the zipline, more about the evening reflections under open sky.",
          "Jugnoo Camp is the one AHE program deliberately designed to span all four domains — Physical, Mental, Emotional, and Spiritual — in a single residential arc. Days move through physical challenge and structured learning; evenings close with reflection, not lectures.",
        ],
      },
      {
        heading: "Why the name",
        paragraphs: [
          "Jugnoo means firefly — a small, deliberate point of light in the dark. It's an apt name for a camp built around quiet moments as much as loud ones.",
        ],
        links: [{ label: "Full program details", to: "/programs/jugnoo-camp/" }],
      },
    ],
  },
  {
    slug: "cold-is-a-teacher-notes-from-the-snow-olympiad",
    title: "Cold Is a Teacher: Notes from the Snow Olympiad",
    date: "9 February 2026",
    domain: "Physical",
    excerpt:
      "Winter closes schools across the north. For two weeks, we turn it into an arena instead.",
    metaDescription:
      "The Snow Olympiad brings structured winter athletic competition to students in Gilgit-Baltistan, turning the region's hardest season into an arena.",
    sections: [
      {
        paragraphs: [
          "Winter closes schools across the north. For two weeks, we turn it into an arena instead. The Snow Olympiad brings structured winter athletic competition to students in Gilgit-Baltistan — events, training, and ceremony that treat mountain winter as an opportunity rather than an obstacle.",
          "Cold, it turns out, is a patient teacher. It doesn't negotiate, and neither does a training schedule built around it. Students who complete a full season report a kind of discipline that's hard to manufacture in a warm classroom.",
        ],
      },
      {
        heading: "More than a sports day",
        paragraphs: [
          "The Snow Olympiad sits in our Physical development domain alongside GB Survivor — both built to develop endurance, teamwork, and outdoor competence through real conditions rather than simulations.",
        ],
        links: [{ label: "Snow Olympiad program details", to: "/programs/snow-olympiad/" }],
      },
    ],
  },
  {
    slug: "teaching-confidence-like-a-skill-not-a-trait",
    title: "Teaching Confidence Like a Skill, Not a Trait",
    date: "17 December 2025",
    domain: "Emotional",
    excerpt:
      "Confidence isn't a personality type. It's a set of reps — and our programs are built around getting students those reps.",
    metaDescription:
      "AHE Pakistan treats confidence as a trainable skill, not a fixed trait — built through public speaking, teamwork, and structured practice across every program.",
    sections: [
      {
        paragraphs: [
          "Confidence isn't a personality type. It's a set of reps — and our programs are built around getting students those reps, deliberately and repeatedly, rather than hoping confidence shows up on its own.",
          "Emotional Development runs as a thread through every AHE program rather than existing as a single standalone course: public speaking inside The Little Scientist's competition stage, teamwork inside GB Survivor's outdoor challenges, composure inside the Snow Olympiad's competitive pressure.",
        ],
      },
      {
        heading: "Why treat it as a skill",
        paragraphs: [
          "Skills can be practiced. Traits feel fixed. Students who are told \"just be more confident\" rarely improve — students who are given a structured setting to speak, fail, and try again, reliably do. That's the whole design principle behind our Emotional Development track.",
        ],
        links: [{ label: "See the Emotional Development track", to: "/programs/emotional-development/" }],
      },
    ],
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
