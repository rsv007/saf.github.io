/* ============================================================================
   ALL THE WORDS ON THE WEBSITE LIVE IN THIS ONE FILE.

   How to edit (no coding needed):
   - Change the text between the quote marks "like this". Keep the quotes,
     and keep the comma at the end of the line.
   - To add another job, award, paper etc., copy one whole { ... } block in
     that list, paste it right after, and change the text.
   - To hide an optional section, make its list empty: []
     (Testimonials, Photos, Publications, Presentations and Leadership each
     disappear automatically when their list is empty.)
   - Anything that looks like [ASK SHAINA: ...] is a placeholder that still
     needs real information. It shows up highlighted in yellow on the site.
     None may remain when the site goes live.
   - Photos: put the image file in the  public/photos/  folder, then set
     src: "/photos/your-file.jpg". Leave src: "" to show the placeholder frame.
   - The downloadable CV is the file  public/cv.pdf  — replace that file.
   ========================================================================== */

export const SITE = {
  url: "https://example.com", // [ASK: final web address once the domain is chosen] — also update public/robots.txt
  name: "Shaina Furman",
  credential: "DVM",
  pronouns: "she/her",

  // Short line under the name in the hero
  role: "Laboratory Animal Medicine Resident · Yale School of Medicine",
  tagline:
    "Veterinarian providing clinical care across nonhuman primate, rodent, agricultural and exotic research species.",
  seeking:
    "Completing residency June 2027 and seeking clinical veterinarian roles in laboratory animal programs.",
  location: "Connecticut",
  relocation: "[ASK SHAINA: open to relocation?]",

  // Used by Google and link previews
  description:
    "Shaina Furman, DVM — laboratory animal medicine resident at Yale School of Medicine. Clinical care, anesthesia, surgery and welfare across research species.",

  email: "furmansh@msu.edu",
  linkedin: "[ASK SHAINA: LinkedIn profile URL]",
  cvPdf: "/cv.pdf", // TEMPORARY sample file — replace public/cv.pdf with Shaina's CV
  cvUpdated: "November 2026",

  // Photos (leave src empty to show the placeholder frame)
  heroPhoto: { src: "", alt: "Shaina Furman, DVM", hint: "Portrait of Shaina, ideally with a rabbit or in a clinical setting" },
  aboutPhoto: { src: "", alt: "Shaina at work", hint: "Candid photo: Shaina examining or handling an animal" },
};

/* ---------- ABOUT -------------------------------------------------------- */
export const ABOUT = {
  // 3–5 sentences, in Shaina's own voice ("I ...")
  bio: [
    "[ASK SHAINA: 3–5 sentence bio in first person — who you are, why laboratory animal medicine, and what you care about in your work.]",
  ],
  // "How I practice" — three short value cards
  values: [
    { title: "[ASK SHAINA: value 1]", text: "[ASK SHAINA: one sentence on what this means in practice]" },
    { title: "[ASK SHAINA: value 2]", text: "[ASK SHAINA: one sentence]" },
    { title: "[ASK SHAINA: value 3]", text: "[ASK SHAINA: one sentence]" },
  ],
};

/* ---------- EXPERIENCE (newest first) ----------------------------------- */
export const EXPERIENCE = [
  {
    role: "Laboratory Animal Medicine Resident / Postdoctoral Associate",
    org: "Yale School of Medicine",
    place: "New Haven, CT",
    dates: "July 2025 – present",
    points: [
      "Clinical assessment, diagnostic workup, treatment planning and longitudinal care for research animals in a comparative medicine program.",
      "Anesthesia, perioperative analgesia, postoperative monitoring and clinical procedures; surgery includes rat intra-abdominal castration, wound management and surgical closure.",
      "Supports complex research models including nonhuman primate diabetes, fetal spina bifida surgery in sheep and translational analgesia studies in ground squirrels.",
      "Works with investigators, animal care staff and veterinary colleagues on welfare assessments, humane endpoints and protocol considerations.",
    ],
  },
  {
    role: "Laboratory Animal Medicine Fellowship",
    org: "Johns Hopkins University",
    place: "Baltimore, MD",
    dates: "2023",
    points: [
      "Clinical care, program management, regulatory compliance and didactic training.",
      "Worked with nonhuman primates, rodents, rabbits, swine, ferrets, dogs, cats, bats, birds and sheep.",
    ],
  },
  {
    role: "ASLAP Laboratory Animal Fellowship",
    org: "University of Missouri",
    place: "Columbia, MO",
    dates: "2022",
    points: ["Assisted with clinical cases, anesthesia, surgical procedures and treatments in research animals."],
  },
  {
    role: "Laboratory Animal Research Assistant",
    org: "University of Maryland, Baltimore",
    place: "Baltimore, MD",
    dates: "2020 – 2021",
    points: [
      "Assisted with diagnostics, anesthesia, surgery, postoperative care, preventive medicine, treatments and medical records across multiple research species.",
    ],
  },
  {
    role: "Veterinary Technician",
    org: "Valley Dog and Cat Hospital",
    place: "[ASK SHAINA: city, state]",
    dates: "2018 – 2024",
    points: ["Supported small-animal examinations, diagnostics, imaging, medication administration and client education."],
  },
];

export const LEADERSHIP = [
  { role: "Herpetology Intern / Volunteer", org: "National Aquarium – Baltimore", dates: "2020 – 2021" },
  { role: "Co-Founder and Co-President", org: "Research and Laboratory Animal Medicine Club", dates: "2022 – 2023" },
  { role: "President", org: "Veterinary Wellness Initiative", dates: "2023" },
];

/* ---------- SKILLS -------------------------------------------------------- */
// Species she has worked with (from the CV), grouped. icon: "mouse" | "rabbit" | "" (none)
export const SPECIES = [
  { group: "Nonhuman primates", icon: "", items: ["Rhesus macaques", "Marmosets"] },
  { group: "Rodents & rabbits", icon: "mouse", items: ["Mice", "Rats", "Guinea pigs", "Rabbits", "Thirteen-lined ground squirrels"] },
  { group: "Agricultural", icon: "", items: ["Swine", "Sheep"] },
  { group: "Companion & other", icon: "", items: ["Dogs", "Cats", "Ferrets", "Bats", "Birds (incl. zebra finches)", "Armadillos"] },
];

// icon names: stethoscope | syringe | scissors | microscope | shield | flask | message
export const SKILLS = [
  {
    group: "Clinical medicine",
    icon: "stethoscope",
    items: ["Clinical assessment", "Diagnostic workup", "Treatment planning", "Longitudinal case management", "Preventive medicine"],
  },
  {
    group: "Anesthesia & analgesia",
    icon: "syringe",
    items: ["Anesthesia", "Perioperative analgesia", "Postoperative monitoring", "Sustained-release analgesic evaluation"],
  },
  {
    group: "Surgery",
    icon: "scissors",
    items: ["Rat intra-abdominal castration", "Wound management", "Surgical closure techniques", "Surgical support for complex research models"],
  },
  {
    group: "Welfare & compliance",
    icon: "shield",
    items: ["Welfare assessments", "Humane endpoints", "Research protocol considerations", "Regulatory compliance", "Program management", "Clinical records"],
  },
  {
    group: "Research models",
    icon: "flask",
    items: ["Nonhuman primate diabetes", "Fetal spina bifida surgery in sheep", "Translational analgesia in ground squirrels"],
  },
  {
    group: "Other",
    icon: "message",
    items: ["[ASK SHAINA: software (e.g. colony / records systems)]", "[ASK SHAINA: languages spoken]"],
  },
];

// Optional "by the numbers" row. Only real, accurate numbers. Empty = hidden.
export const NUMBERS: { value: number; suffix?: string; label: string }[] = [];

/* ---------- RESEARCH ------------------------------------------------------ */
export const RESEARCH = [
  {
    title: "Sustained-release buprenorphine pharmacokinetics and behavioral monitoring in thirteen-lined ground squirrels",
    org: "Yale School of Medicine",
    year: "2026",
    text: "Serial blood sampling and behavioral/clinical observations to evaluate extended-release buprenorphine formulations in an emerging research species.",
  },
  {
    title: "Canine vivarium environmental microbiology",
    org: "Michigan State University",
    year: "2024",
    text: "Environmental detection of cnf1-positive Escherichia coli in a canine research facility.",
  },
  {
    title: "Nonhuman primate sleep and social behavior",
    org: "Johns Hopkins University",
    year: "2023",
    text: "Pair housing, relationship strength, sleep quality and behavior in captive rhesus macaques.",
  },
  {
    title: "Feed hopper microbiome and mycobiome",
    org: "University of Missouri",
    year: "2022",
    text: "Effects of retaining feed on hopper pellet microbial communities.",
  },
  {
    title: "Reptile ecotoxicology",
    org: "Towson University",
    year: "2019 – 2020",
    text: "PFAS exposure and reproductive outcomes in brown anoles; maintained a breeding colony and supported experimental husbandry.",
  },
];

// NOT FINAL — waiting for confirmed details from Shaina.
export const PUBLICATIONS = [
  {
    title:
      "The endemic spread of Escherichia coli positive for cytotoxic necrotizing factor type 1 in a canine research facility and impact of infection in neonatal puppies",
    authors: "Furman S, McIntosh JM, et al. [ASK SHAINA: full author list]",
    venue: "Journal of the American Association for Laboratory Animal Science, 65(1):25–32",
    year: "2026",
    link: "https://doi.org/10.30802/AALAS-JAALAS-25-074",
  },
  {
    title: "Effects of perfluorooctane sulfonate (PFOS) on size and reproductive endpoints in female lizards (Anolis sagrei)",
    authors: "[ASK SHAINA: author list]",
    venue: "Environmental Toxicology and Chemistry",
    year: "[ASK SHAINA: year]",
    link: "",
  },
  {
    title: "Environmental sampling of a canine research vivarium for Escherichia coli",
    authors: "Furman S, Ferguson D, Hamilton EA",
    venue: "Manuscript in preparation [ASK SHAINA: confirm title and status]",
    year: "",
    link: "",
  },
];

export const PRESENTATIONS = [
  { title: "An evaluation of pair housing and relationship strength on nonhuman primate sleep quality", year: "2023" },
  { title: "Effects of retaining feed on hopper pellet mycobiome and microbiome", year: "2022" },
  { title: "Exploring the effects of PFOS contact exposure on hatchling success of brown anole eggs", year: "2019" },
  { title: "Creating and maintaining a brown anole breeding colony", year: "2018" },
];

/* ---------- EDUCATION & CREDENTIALS -------------------------------------- */
export const EDUCATION = [
  {
    degree: "Laboratory Animal Medicine Residency / Postdoctoral Associate",
    school: "Yale School of Medicine",
    dates: "July 2025 – June 2027 (anticipated)",
  },
  { degree: "Doctor of Veterinary Medicine (DVM)", school: "Michigan State University", dates: "2025" },
  {
    degree: "B.S. Environmental Science; B.S. Molecular Biology, Biochemistry and Bioinformatics",
    school: "Towson University",
    dates: "2020",
  },
];

// Only items Shaina confirms. Don't show license numbers unless she says so.
export const LICENSES = [
  { name: "[ASK SHAINA: state veterinary license(s)]", status: "[ASK SHAINA: status]", verifyLink: "" },
  { name: "[ASK SHAINA: NAVLE / USDA accreditation / DEA — only confirmed items]", status: "", verifyLink: "" },
];

export const CERTIFICATIONS = [{ name: "Fear Free Certified Professional", status: "[ASK SHAINA: confirm current status]" }];

/* ---------- PHOTOS (optional strip) -------------------------------------- */
// Only photos Shaina has permission to share (check facility photo policies).
export const PHOTOS = [
  { src: "", alt: "", hint: "Shaina with a rabbit" },
  { src: "", alt: "", hint: "In the surgical suite / lab" },
  { src: "", alt: "", hint: "With colleagues or at a conference" },
];

/* ---------- TESTIMONIALS (real quotes only, with permission) ------------- */
// Empty list = section hidden. Example of one entry:
// { quote: "...", name: "Dr. Jane Smith", role: "Attending Veterinarian, ..." },
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

/* ---------- CONTACT ------------------------------------------------------- */
export const CONTACT = {
  heading: "Let's talk",
  text: "I'm happy to hear about clinical veterinarian opportunities in laboratory animal programs. Email is the best way to reach me.",
  showForm: true, // simple contact form (works once the site is hosted on Netlify)
};
