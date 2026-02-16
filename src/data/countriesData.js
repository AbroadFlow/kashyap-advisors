import italyImg from "@/assets/italy.avif";
import ukImg from "@/assets/uk.avif";
import georgiaImg from "@/assets/georgia.avif";
import maltaImg from "@/assets/malta.avif";
import netherlandImg from "@/assets/netherlands.webp";
import germanyImg from "@/assets/germany.avif";
import cyprusImg from "@/assets/cyprus.avif";

import cyprusFlag from "@/assets/flags/cy.webp";
import germanyFlag from "@/assets/flags/de.webp";
import ukFlag from "@/assets/flags/gb.webp";
import georgiaFlag from "@/assets/flags/ge.webp";
import italyFlag from "@/assets/flags/it.webp";
import maltaFlag from "@/assets/flags/mt.webp";
import netherlandFlag from "@/assets/flags/nl.webp";

export const countriesData = {
  
  italy: {
    name: "Italy",
    flag: italyFlag,
    tagline: "Experience Renaissance and Innovation",
    image: italyImg,
    description:
      "Italy offers a unique blend of world-class education, rich cultural heritage, and affordable living costs. Study in the heart of Europe with access to some of the oldest and most prestigious universities in the world.",
    highlights: [
      "World-renowned universities",
      "Rich cultural heritage",
      "Affordable tuition fees",
      "Post-study work opportunities",
    ],
    stats: {
      universities: "95+",
      cost: "€0/year",
      duration: "3-5 years",
      scholarships: "Available",
      students: "200,000+ International",
      language: "Italian/English",
    },
    topUniversities: [
      "University of Bologna",
      "Sapienza University of Rome",
      "Politecnico di Milano",
      "University of Padua",
    ],
    popularCourses: [
      "Architecture & Design",
      "Fashion & Arts",
      "Engineering",
      "Business Administration",
      "Medicine",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "Previous qualification certificates",
      "CV / Resume",
      "Statement of Purpose (SOP)",
      "English proficiency certificate",
      "Bank statements",
      "Health insurance",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 55% in high school",
        "IELTS 5.5+",
        "Relevant academic background",
      ],
      postgraduate: [
        "Bachelor degree with minimum 55%",
        "IELTS 6.0+",
        "Relevant subject specialization",
      ],
    },

    color: "from-green-500 to-red-500",
    bgColor: "bg-green-50",
  },

  malta: {
    name: "Malta",
    flag: maltaFlag,
    tagline: "Island Paradise Meets Quality Education",
    image: maltaImg,
    description:
      "Malta is an English-speaking Mediterranean island nation offering EU-recognized degrees, beautiful climate, and a growing tech and business ecosystem. Perfect for international students seeking island life with European opportunities.",
    highlights: [
      "English-taught programs",
      "EU member benefits",
      "Beautiful island lifestyle",
      "Growing tech hub",
    ],
    stats: {
      universities: "12+",
      cost: "€0/year",
      duration: "3-4 years",
      scholarships: "Merit-based",
      students: "15,000+ International",
      language: "English/Maltese",
    },
    topUniversities: [
      "University of Malta",
      "Malta College of Arts, Science and Technology",
      "American University of Malta",
    ],
    popularCourses: [
      "Information Technology",
      "Gaming & iGaming",
      "Business & Finance",
      "Tourism & Hospitality",
      "Maritime Studies",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "Previous qualification certificates",
      "CV / Resume",
      "Statement of Purpose (SOP)",
      "English proficiency certificate",
      "Bank statements",
      "Health insurance",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 55% in high school",
        "IELTS 5.5+",
        "Relevant academic background",
      ],
      postgraduate: [
        "Bachelor degree with minimum 55%",
        "IELTS 6.0+",
        "Relevant subject specialization",
      ],
    },

    color: "from-blue-500 to-yellow-500",
    bgColor: "bg-blue-50",
  },

  georgia: {
    name: "Georgia",
    flag: georgiaFlag,
    tagline: "Where East Meets West",
    image: georgiaImg,
    description:
      "Georgia is emerging as a top destination for international students with its very affordable tuition fees, no entrance exams, and strategic location between Europe and Asia. Experience ancient culture with modern education.",
    highlights: [
      "No entrance exams",
      "Very affordable education",
      "Strategic location",
      "Growing economy",
    ],
    stats: {
      universities: "25+",
      cost: "$0/year",
      duration: "4-6 years",
      scholarships: "Government funded",
      students: "25,000+ International",
      language: "Georgian/English",
    },
    topUniversities: [
      "Tbilisi State University",
      "Ilia State University",
      "Georgian Technical University",
      "Caucasus University",
    ],
    popularCourses: [
      "Medicine",
      "Dentistry",
      "Engineering",
      "Business Administration",
      "International Relations",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "High school certificate / Bachelor degree",
      "CV",
      "Passport-size photos",
      "Medical fitness certificate",
      "Bank statements",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 50% in high school",
        "No entrance exam",
        "English basic proficiency",
      ],
      postgraduate: [
        "Bachelor degree",
        "No entrance exam",
        "Basic English proficiency",
      ],
    },

    color: "from-red-500 to-blue-500",
    bgColor: "bg-purple-50",
  },

  uk: {
    name: "UK",
    flag: ukFlag,
    tagline: "Home to world-leading universities",
    image: ukImg,
    description:
      "The United Kingdom is home to some of the world's most prestigious universities with centuries of academic excellence. Study in a multicultural environment with globally recognized degrees and excellent post-study work opportunities.",
    highlights: [
      "Globally recognized degrees",
      "Vibrant multicultural environment",
      "Strong career prospects",
      "Wide range of scholarships",
    ],
    stats: {
      universities: "160+",
      cost: "£10,000+/year",
      duration: "3-4 years",
      scholarships: "Various options",
      students: "500,000+ International",
      language: "English",
    },
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "London School of Economics",
    ],
    popularCourses: [
      "Business & Management",
      "Engineering",
      "Computer Science",
      "Law",
      "Arts & Humanities",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "Previous qualification certificates",
      "Statement of Purpose (SOP)",
      "Two recommendation letters",
      "CV / Resume",
      "IELTS / TOEFL certificate",
      "CAS letter",
      "Bank statements",
      "TB test certificate",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 60–70% in high school",
        "IELTS 6.0+",
        "Strong academic background",
      ],
      postgraduate: [
        "Bachelor degree with minimum 60%",
        "IELTS 6.5+",
        "Relevant academic discipline",
      ],
    },

    color: "from-blue-800 to-red-400",
    bgColor: "bg-gray-50",
  },
  
  netherlands: {
    name: "Netherlands",
    flag: netherlandFlag,
    tagline: "Innovative education in the heart of Europe",
    image: netherlandImg,
    description:
      "The Netherlands offers world-class education with a focus on innovation and international collaboration. Study in English-taught programs at top-ranked universities in one of Europe's most livable countries.",
    highlights: [
      "Top-ranked research universities",
      "Wide range of English-taught programs",
      "Highly innovative education system",
      "Excellent post-study work opportunities",
    ],
    stats: {
      universities: "50+",
      cost: "€6,000+/year",
      duration: "3-4 years",
      scholarships: "Holland Scholarship & others",
      students: "120,000+ International",
      language: "English/Dutch",
    },
    topUniversities: [
      "University of Amsterdam",
      "Delft University of Technology",
      "Leiden University",
      "Utrecht University",
    ],
    popularCourses: [
      "Engineering",
      "Business & Economics",
      "Computer Science",
      "International Relations",
      "Sustainable Development",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "Previous qualification certificates",
      "Statement of Purpose",
      "CV / Resume",
      "English proficiency certificate",
      "Recommendation letters",
      "Portfolio (for design courses)",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 60% in high school",
        "IELTS 6.0+",
        "Strong math & analytical background",
      ],
      postgraduate: [
        "Bachelor degree with minimum 60%",
        "IELTS 6.5+",
        "Relevant subject background",
      ],
    },

    color: "from-red-500 to-blue-500",
    bgColor: "bg-red-50",
  },

  germany: {
    name: "Germany",
    flag: germanyFlag,
    tagline: "World-class education with affordable tuition",
    image: germanyImg,
    description:
      "Germany is renowned for tuition-free education at public universities, strong engineering programs, and excellent industry connections. Study in the heart of Europe's strongest economy.",
    highlights: [
      "No tuition fees in public universities",
      "Top-ranked engineering & tech programs",
      "Strong industry connections",
      "18-month post-study work visa",
    ],
    stats: {
      universities: "400+",
      cost: "€0/year",
      duration: "3-5 years",
      scholarships: "DAAD & university funded",
      students: "350,000+ International",
      language: "German/English",
    },
    topUniversities: [
      "Technical University of Munich",
      "Ludwig Maximilian University",
      "Heidelberg University",
      "RWTH Aachen University",
    ],
    popularCourses: [
      "Mechanical Engineering",
      "Computer Science",
      "Business Administration",
      "Automotive Engineering",
      "Physics",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "APS certificate (mandatory)",
      "CV / Resume",
      "Statement of Purpose",
      "German language certificate (if applicable)",
      "English proficiency certificate",
      "Blocked account proof",
      "Health insurance",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 60% in high school",
        "Studienkolleg (if required)",
        "IELTS 6.0+ or German B1/B2",
      ],
      postgraduate: [
        "Bachelor degree with minimum 60%",
        "IELTS 6.5+ or German B2",
        "Relevant subject specialization",
      ],
    },

    color: "from-black via-red-500 to-yellow-400",
    bgColor: "bg-yellow-50",
  },

  cyprus: {
    name: "Cyprus",
    flag: cyprusFlag,
    tagline: "Mediterranean education with European standards",
    image: cyprusImg,
    description:
      "Cyprus offers affordable EU-recognized education in a beautiful Mediterranean setting. Enjoy English-taught programs, warm climate, and a safe, welcoming environment for international students.",
    highlights: [
      "English-taught programs",
      "Affordable tuition fees",
      "EU recognized degrees",
      "Safe and student-friendly country",
    ],
    stats: {
      universities: "15+",
      cost: "€3,000+/year",
      duration: "3-4 years",
      scholarships: "Merit-based",
      students: "30,000+ International",
      language: "English/Greek",
    },
    topUniversities: [
      "University of Cyprus",
      "Cyprus University of Technology",
      "European University Cyprus",
      "Frederick University",
    ],
    popularCourses: [
      "Business Administration",
      "Tourism & Hospitality",
      "Computer Science",
      "Nursing",
      "Marine Engineering",
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts",
      "Previous qualification certificates",
      "CV / Resume",
      "Statement of Purpose",
      "English proficiency certificate",
      "Bank statements",
      "Medical certificate",
    ],

    academicRequirements: {
      undergraduate: [
        "Minimum 50–55% in high school",
        "IELTS 5.5+",
        "Basic academic background",
      ],
      postgraduate: [
        "Bachelor degree with minimum 55%",
        "IELTS 6.0+",
        "Relevant discipline",
      ],
    },

    color: "from-orange-400 to-blue-500",
    bgColor: "bg-orange-50",
  },
};
