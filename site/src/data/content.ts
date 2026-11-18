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
     The CV page (/cv) shows the same words: update  src/data/cv.ts  to match.
   ========================================================================== */

export const SITE = {
  url: "https://shainafurman.github.io", // the live address (GitHub Pages). If it changes, also update public/robots.txt
  name: "Shaina Furman",
  credential: "DVM",
  pronouns: "she/her",

  // Short line under the name in the hero
  role: "Laboratory Animal Medicine Resident · Yale School of Medicine",
  tagline:
    "Laboratory Animal Veterinarian providing clinical care across nonhuman primate, rodent, agricultural and exotic research species.",
  // Optional line under the tagline (e.g. what role she's looking for). Leave "" to hide it.
  seeking: "",
  location: "Connecticut",
  // Shown after the location. Leave "" to hide it.
  relocation: "",

  // Used by Google and link previews
  description:
    "Shaina Furman, DVM — laboratory animal medicine resident at Yale School of Medicine. Clinical care, anesthesia, surgery and welfare across research species.",

  email: "shaina.furman@yale.edu",
  linkedin: "https://www.linkedin.com/in/shaina-furman/",
  cvPdf: "/cv.pdf", // TEMPORARY sample file — replace public/cv.pdf with Shaina's CV
  cvUpdated: "November 2026",

  // Photos (leave src empty to show the placeholder frame)
  heroPhoto: { src: "/photos/portrait.jpg", alt: "Portrait of Shaina Furman, DVM", hint: "Portrait of Shaina, ideally with a rabbit or in a clinical setting" },
  aboutPhoto: { src: "/photos/poster.jpg", alt: "Shaina presenting her research poster on pair housing and nonhuman primate sleep quality", hint: "Candid photo: Shaina examining or handling an animal" },
};

/* ---------- ABOUT -------------------------------------------------------- */
export const ABOUT = {
  // 3–5 sentences, in Shaina's own voice ("I ...")
  bio: [
    "I'm a veterinarian and Comparative Medicine resident at Yale School of Medicine, with a passion for advancing animal welfare and supporting meaningful biomedical research. My interest in laboratory animal medicine comes from the opportunity to combine clinical medicine, surgery, and scientific discovery while advocating for the animals that contribute to research. I particularly enjoy the challenges of working with diverse species, developing individualized treatment plans, and collaborating with investigators to refine research techniques and improve animal care. I'm also passionate about teaching and mentorship, helping others develop the skills and confidence to provide thoughtful, compassionate veterinary care.",
  ],
  // "How I practice" — three short value cards
  values: [
    {
      title: "Animal Welfare",
      text: "I believe every animal deserves compassionate, individualized care, with an emphasis on minimizing pain and distress and promoting the highest standards of welfare.",
    },
    {
      title: "Research Collaboration",
      text: "I value working alongside researchers to advance scientific discovery while refining animal models, improving clinical outcomes, and maintaining responsible research practices.",
    },
    {
      title: "Education & Mentorship",
      text: "I enjoy sharing knowledge, teaching clinical and technical skills, and creating opportunities for others to grow through collaboration and hands-on learning.",
    },
  ],
};

/* ---------- EXPERIENCE (newest first) ----------------------------------- */
export const EXPERIENCE = [
  {
    role: "Laboratory Animal Medicine Resident",
    org: "Yale School of Medicine",
    place: "New Haven, CT",
    dates: "2025 – 2027",
    points: [
      "Serve as primary veterinary clinician, providing clinical assessment, diagnostic workup, treatment planning, and longitudinal care for research animals in a comparative medicine program.",
      "Species: Nonhuman primates (rhesus macaques, marmosets); rodents (mice, spiny mice, rats, thirteen-lined ground squirrels, guinea pigs); lagomorphs (rabbits); ungulates (swine, sheep); other mammals (armadillos, opossums); and birds (zebra finches, Gouldian finches, chickens, and chickadees).",
      "Serve as primary surgeon for procedures including nonhuman primate cesarean section, vasectomy, ovariohysterectomy, cranial chamber placement and closure, MGA implants, dental extractions, digit amputation, and mass excision; rodent castration, ovariectomy, tail amputation, and enucleation; and guinea pig ovariectomy.",
      "Perform and manage anesthesia, perioperative analgesia, postoperative monitoring, and clinical procedures across a variety of species.",
      "Perform diagnostic ultrasonography, including routine pregnancy assessments in rhesus macaques, and obtain and interpret radiographs, including dental radiographs, as clinically indicated. Participate in clinical necropsies to investigate morbidity and mortality.",
      "Support translational research in areas including nonhuman primate diabetes, large-animal surgery, and analgesia/pharmacokinetics in thirteen-lined ground squirrels.",
      "Collaborate with investigators, animal care staff, and veterinary colleagues on welfare assessments, clinical records, humane endpoints, and research protocol considerations.",
      "Train research personnel in various techniques including subcutaneous and subconjunctival injections, suturing, wound care, and aseptic technique; advise investigators on surgical approaches and postoperative management.",
      "Participate in monthly IACUC meetings, prepare veterinary reports and chronic case monitoring summaries, and contribute to regulatory compliance through incident reporting and corrective training of research personnel.",
      "Evaluate research procedures and humane endpoints from a veterinary perspective, collaborate with investigators to recommend protocol modifications and refinements, and participate in educational protocol review exercises.",
    ],
  },
  {
    role: "Veterinarian",
    org: "Vetco Clinics",
    place: "Connecticut",
    dates: "2025 – present",
    points: [
      "Provide independent outpatient preventive veterinary care for dogs and cats, including physical examinations, vaccination, diagnostic testing, client counseling, medical documentation, and prescription of appropriate medications and preventives.",
    ],
  },
  {
    role: "Laboratory Animal Medicine Fellowship",
    org: "Johns Hopkins University",
    place: "Baltimore, MD",
    dates: "2023",
    points: [
      "Participated in clinical medicine, anesthesia, surgical support, regulatory and program activities, and investigator consultations. Species: Nonhuman primates (rhesus macaques, marmosets); rodents (mice, rats); lagomorphs (rabbits); ungulates (swine, sheep); carnivores (dogs, cats, ferrets); bats; and birds.",
      "Gained exposure to sheep tracheal stenosis and spina bifida models, rabbit ocular implants, nonhuman primate head-cap removal and marmoset oocyte retrieval, and renal xenotransplantation models.",
    ],
  },
  {
    role: "ASLAP Laboratory Animal Fellowship",
    org: "University of Missouri",
    place: "Columbia, MO",
    dates: "2022",
    points: [
      "Assisted with clinical evaluations, anesthesia, surgery, and treatment of research animals. Species: Rodents (mice, rats); lagomorphs (rabbits); ungulates (swine); and carnivores (dogs, cats).",
      "Surgical and anesthetic exposure included rabbit ovariectomy, porcine umbilical hernia repair, and canine muscular dystrophy research models.",
    ],
  },
  {
    role: "Laboratory Animal Research Assistant",
    org: "University of Maryland",
    place: "Baltimore, MD",
    dates: "2020 – 2021",
    points: [
      "Assisted with diagnostics, anesthesia, surgical care, postoperative monitoring, preventive medicine, treatments, and medical records in a laboratory animal program.",
      "Species: Nonhuman primates (baboons, rhesus macaques); rodents (mice, rats, guinea pigs); lagomorphs (rabbits); ungulates (swine); and carnivores (ferrets).",
      "Supported nonhuman primate and porcine heart and kidney xenotransplantation models, rhesus ophthalmic imaging and reproductive procedures, and GLP mouse studies and documentation.",
    ],
  },
  {
    role: "Veterinary Technician",
    org: "Valley Dog and Cat Hospital",
    place: "Owings Mills, MD",
    dates: "2018 – 2024",
    points: [
      "Supported small-animal clinical examinations, diagnostics, imaging, medication administration, and client education. Duties split between reception and technical tasks.",
    ],
  },
];

export const LEADERSHIP = [
  { role: "Herpetology Intern / Volunteer", org: "National Aquarium, Baltimore", dates: "2020 – 2021" },
  { role: "Co-Founder and Co-President", org: "Research and Laboratory Animal Medicine Club, Michigan State University", dates: "2022 – 2023" },
  { role: "President", org: "Veterinary Wellness Initiative, Michigan State University", dates: "2023" },
  { role: "Environmental Wellness Chair", org: "SAVMA (Student American Veterinary Medical Association), Michigan State University", dates: "2021 – 2023" },
];

/* ---------- SKILLS -------------------------------------------------------- */
// Species she has worked with (from the CV), grouped. icon: "mouse" | "rabbit" | "" (none)
export const SPECIES = [
  { group: "Nonhuman primates", icon: "", items: ["Rhesus macaques", "Marmosets", "Baboons"] },
  { group: "Rodents & rabbits", icon: "mouse", items: ["Mice", "Spiny mice", "Rats", "Thirteen-lined ground squirrels", "Guinea pigs", "Rabbits"] },
  { group: "Agricultural", icon: "", items: ["Swine", "Sheep"] },
  { group: "Companion & other", icon: "", items: ["Dogs", "Cats", "Ferrets", "Armadillos", "Opossums", "Bats", "Birds (incl. zebra finches, Gouldian finches, chickens, and chickadees)"] },
];

// icon names: stethoscope | syringe | scissors | microscope | shield | flask | message
export const SKILLS = [
  {
    group: "Clinical medicine",
    icon: "stethoscope",
    items: ["Clinical assessment", "Diagnostic workup", "Treatment planning", "Longitudinal case management", "Preventive medicine", "Diagnostic ultrasonography", "Radiography (incl. dental)", "Clinical necropsy"],
  },
  {
    group: "Anesthesia & analgesia",
    icon: "syringe",
    items: ["Anesthesia", "Perioperative analgesia", "Postoperative monitoring", "Sustained-release analgesic evaluation"],
  },
  {
    group: "Surgery",
    icon: "scissors",
    items: ["Nonhuman primate cesarean section, vasectomy, ovariohysterectomy", "Cranial chamber placement and closure", "Dental extractions", "Rodent castration, ovariectomy, enucleation", "Guinea pig ovariectomy", "Mass excision, digit and tail amputation"],
  },
  {
    group: "Welfare & compliance",
    icon: "shield",
    items: ["Welfare assessments", "Humane endpoints", "IACUC meetings", "Protocol review and refinement", "Regulatory compliance", "Training research personnel"],
  },
  {
    group: "Research models",
    icon: "flask",
    items: ["Nonhuman primate diabetes", "Large-animal surgery", "Analgesia/pharmacokinetics in thirteen-lined ground squirrels", "Heart and kidney xenotransplantation"],
  },
  {
    group: "Other",
    icon: "message",
    items: ["Vetcare / Cayuse", "Languages: English"],
  },
];

// Optional "by the numbers" row. Only real, accurate numbers. Empty = hidden.
export const NUMBERS: { value: number; suffix?: string; label: string }[] = [];

/* ---------- RESEARCH ------------------------------------------------------ */
export const RESEARCH = [
  {
    title: "Sustained-Release Buprenorphine Pharmacokinetics and Behavioral Monitoring in Thirteen-Lined Ground Squirrels",
    org: "Yale School of Medicine",
    year: "2026",
    text: "Conducted serial blood sampling and behavioral/clinical observations to investigate extended-release buprenorphine formulations and support analgesic evaluation in an emerging research species.",
    status: "Manuscript in progress",
  },
  {
    title: "Comparative Analysis of Continuous Rate Infusions in New Zealand White Rabbits",
    org: "Yale School of Medicine",
    year: "2026",
    text: "Conducted analysis comparing CRIs in rabbits and evaluating anesthetic protocols during laparotomy procedures.",
    status: "Manuscript in progress",
  },
  {
    title: "Canine Vivarium Environmental Microbiology",
    org: "Michigan State University",
    year: "2024",
    text: "Investigated environmental detection of cnf1-positive Escherichia coli in a canine research facility.",
    status: "Manuscript in progress",
  },
  {
    title: "Nonhuman Primate Sleep and Social Behavior",
    org: "Johns Hopkins University",
    year: "2023",
    text: "Investigated pair housing, relationship strength, sleep quality, and behavior in captive rhesus macaques.",
    status: "",
  },
  {
    title: "Feed Hopper Microbiome and Mycobiome",
    org: "University of Missouri",
    year: "2022",
    text: "Conducted research on the effects of retaining feed on hopper pellet microbial communities.",
    status: "Manuscript in progress",
  },
  {
    title: "Reptile Ecotoxicology",
    org: "Towson University",
    year: "2019 – 2020",
    text: "Investigated PFAS exposure and reproductive outcomes in brown anoles; maintained a breeding colony and supported experimental husbandry. Provided basic clinical care for brown and green anoles.",
    status: "",
  },
];

export const PUBLICATIONS = [
  {
    title:
      "The Endemic Spread of Escherichia coli Positive for Cytotoxic Necrotizing Factor Type 1 in a Canine Research Facility and Impact of Infection in Neonatal Puppies",
    authors: "Furman S, McIntosh JM, et al.",
    venue: "Journal of the American Association for Laboratory Animal Science, 65(1):25–32",
    year: "2026",
    link: "https://doi.org/10.30802/AALAS-JAALAS-25-074",
  },
  {
    title:
      "When the Lights Go Out: Studying Sex Differences in Sleep Latency, Sleep Quality, and Social Behavior in Captive Rhesus Macaques (Macaca mulatta) Over a 24-h Period",
    authors: "Roach, Alexis, Shaina Furman, Jasmine Hadeed, Rachel Choo, Emily Knight, Melissa C. Painter and Lydia M. Hopper",
    venue: "American Journal of Primatology 87",
    year: "2025",
    link: "https://doi.org/10.1002/ajp.70098",
  },
  {
    title: "Effects of Perfluorooctane Sulfonate (PFOS) on Size and Reproductive Endpoints in Female Lizards (Anolis sagrei)",
    authors: "C. Daniel Furst, Shaina Furman, Taylor Anderson, Andrew East, Christopher J. Salice",
    venue: "Environmental Toxicology and Chemistry; Manuscript accepted, awaiting publication",
    year: "",
    link: "",
  },
  {
    title: "Environmental Sampling of a Canine Research Vivarium for E. coli",
    authors: "Furman S, Ferguson D, Hamilton EA",
    venue: "Manuscript in preparation",
    year: "",
    link: "",
  },
];

export const PRESENTATIONS = [
  { title: "Acute Respiratory Distress in a Geriatric Rhesus Macaque", venue: "AALAS Houston · Manuscript in progress", year: "2026" },
  {
    title: "An Evaluation of Pair Housing and Relationship Strength on Nonhuman Primate Sleep Quality",
    venue: "Johns Hopkins University Summer Scholars, Veterinary Scholars Symposium Puerto Rico",
    year: "2023",
  },
  { title: "Effects of Retaining Feed on Hopper Pellet Mycobiome and Microbiome", venue: "Veterinary Scholars Symposium Minnesota", year: "2022" },
  { title: "Exploring the Effects of PFOS Contact Exposure on Hatchling Success of Brown Anole Eggs", venue: "Towson University Poster Symposium", year: "2019" },
  { title: "Creating and Maintaining a Brown Anole Breeding Colony", venue: "Towson University Poster Symposium", year: "2018" },
];

/* ---------- EDUCATION & CREDENTIALS -------------------------------------- */
export const EDUCATION = [
  { degree: "Comparative Medicine Residency", school: "Yale School of Medicine, New Haven, CT", dates: "2025 – 2027" },
  { degree: "Doctor of Veterinary Medicine (DVM)", school: "Michigan State University, East Lansing, MI", dates: "2025" },
  {
    degree: "B.S. in Environmental Science; B.S. in Molecular Biology, Biochemistry and Bioinformatics",
    school: "Towson University, Towson, MD",
    dates: "2020",
  },
];

// Only items Shaina confirms. Don't show license numbers unless she says so.
export const LICENSES = [
  { name: "Licensed Veterinarian in Connecticut", status: "Current", verifyLink: "" },
  { name: "USDA Veterinary Accreditation", status: "In progress", verifyLink: "" },
];

export const CERTIFICATIONS = [
  { name: "Fear Free Certified Professional", status: "" },
  { name: "AALAS Member", status: "" },
  { name: "ACLAM Member", status: "" },
];

/* ---------- PHOTOS (optional strip) -------------------------------------- */
// Only photos Shaina has permission to share (check facility photo policies).
export const PHOTOS = [
  { src: "/photos/horse.jpg", alt: "Shaina leading a white horse on a farm", hint: "" },
  { src: "/photos/rabbit.jpg", alt: "A white rabbit being offered a heart-shaped treat", hint: "" },
  { src: "/photos/cow.jpg", alt: "Shaina taking a selfie with a cow in a barn", hint: "" },
];

/* ---------- TESTIMONIALS (real quotes only, with permission) ------------- */
// Empty list = section hidden. Example of one entry:
// { quote: "...", name: "Dr. Jane Smith", role: "Attending Veterinarian, ..." },
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

/* ---------- CONTACT ------------------------------------------------------- */
export const CONTACT = {
  heading: "Get in touch",
  // A short line in Shaina's own words. Leave "" to hide it.
  text: "Contact me for any questions.",
};
