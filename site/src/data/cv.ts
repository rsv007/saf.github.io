/* ============================================================================
   THE CV PAGE (/cv) — word for word the same as the downloadable PDF (public/cv.pdf).

   If the PDF changes, change this file the same way (same sections, same order,
   same wording). The homepage has its own words in content.ts.

   Each entry:
     lead    — the bold start of the first line
     rest    — normal text right after the bold part (optional)
     date    — shown on the right (optional)
     lines   — extra plain lines under the first line (optional)
     bullets — bullet points (optional)
     link    — makes `linkText` (which must appear in `rest`) a clickable link (optional)
   ========================================================================== */

export type CvEntry = {
  lead: string;
  rest?: string;
  date?: string;
  lines?: string[];
  bullets?: string[];
  link?: string;
  linkText?: string;
};

export type CvSection = { heading: string; entries: CvEntry[] };

export const CV_HEADER = {
  name: "Shaina Furman, DVM",
  email: "shaina.furman@yale.edu",
};

export const CV_SECTIONS: CvSection[] = [
  {
    heading: "Education & Postgraduate Training",
    entries: [
      { lead: "Yale School of Medicine,", rest: " New Haven, CT", date: "2027", lines: ["Comparative Medicine Residency"] },
      { lead: "Michigan State University", rest: ", East Lansing, MI", date: "2025", lines: ["Doctor of Veterinary Medicine"] },
      {
        lead: "Towson University",
        rest: ", Towson, MD",
        date: "2020",
        lines: ["B.S. in Environmental Science; B.S. in Molecular Biology, Biochemistry and Bioinformatics"],
      },
    ],
  },
  {
    heading: "Clinical Experience",
    entries: [
      {
        lead: "Laboratory Animal Medicine Resident",
        rest: ", Yale School of Medicine, New Haven, CT",
        date: "2025 – 2027",
        bullets: [
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
        lead: "Veterinarian",
        rest: ", Vetco Clinics, Connecticut",
        date: "2025- Present",
        bullets: [
          "Provide independent outpatient preventive veterinary care for dogs and cats, including physical examinations, vaccination, diagnostic testing, client counseling, medical documentation, and prescription of appropriate medications and preventives.",
        ],
      },
      {
        lead: "Laboratory Animal Medicine Fellowship",
        rest: ", Johns Hopkins University, Baltimore, MD",
        date: "2023",
        bullets: [
          "Participated in clinical medicine, anesthesia, surgical support, regulatory and program activities, and investigator consultations. Species: Nonhuman primates (rhesus macaques, marmosets); rodents (mice, rats); lagomorphs (rabbits); ungulates (swine, sheep); carnivores (dogs, cats, ferrets); bats; and birds.",
          "Gained exposure to sheep tracheal stenosis and spina bifida models, rabbit ocular implants, nonhuman primate head-cap removal and marmoset oocyte retrieval, and renal xenotransplantation models.",
        ],
      },
      {
        lead: "ASLAP Laboratory Animal Fellowship",
        rest: ", University of Missouri, Columbia, MO",
        date: "2022",
        bullets: [
          "Assisted with clinical evaluations, anesthesia, surgery, and treatment of research animals. Species: Rodents (mice, rats); lagomorphs (rabbits); ungulates (swine); and carnivores (dogs, cats).",
          "Surgical and anesthetic exposure included rabbit ovariectomy, porcine umbilical hernia repair, and canine muscular dystrophy research models.",
        ],
      },
      {
        lead: "Laboratory Animal Research Assistant",
        rest: ", University of Maryland, Baltimore, MD",
        date: "2020 – 2021",
        bullets: [
          "Assisted with diagnostics, anesthesia, surgical care, postoperative monitoring, preventive medicine, treatments, and medical records in a laboratory animal program.",
          "Species: Nonhuman primates (baboons, rhesus macaques); rodents (mice, rats, guinea pigs); lagomorphs (rabbits); ungulates (swine); and carnivores (ferrets).",
          "Supported nonhuman primate and porcine heart and kidney xenotransplantation models, rhesus ophthalmic imaging and reproductive procedures, and GLP mouse studies and documentation.",
        ],
      },
      {
        lead: "Veterinary Technician",
        rest: ", Valley Dog and Cat Hospital, Owings Mills, MD",
        date: "2018 – 2024",
        bullets: [
          "Supported small-animal clinical examinations, diagnostics, imaging, medication administration, and client education. Duties split between reception and technical tasks.",
        ],
      },
    ],
  },
  {
    heading: "Research Experience",
    entries: [
      {
        lead: "Sustained-Release Buprenorphine Pharmacokinetics and Behavioral Monitoring in Thirteen-Lined Ground Squirrels",
        rest: ", Yale School of Medicine",
        date: "2026",
        bullets: [
          "Conducted serial blood sampling and behavioral/clinical observations to investigate extended-release buprenorphine formulations and support analgesic evaluation in an emerging research species.",
          "Manuscript in progress",
        ],
      },
      {
        lead: "Comparative Analysis of Continuous Rate Infusions in New Zealand White Rabbits",
        rest: ", Yale School of Medicine",
        date: "2026",
        bullets: [
          "Conducted analysis comparing CRIs in rabbits and evaluating anesthetic protocols during laparotomy procedures.",
          "Manuscript in progress",
        ],
      },
      {
        lead: "Canine Vivarium Environmental Microbiology",
        rest: ", Michigan State University",
        date: "2024",
        bullets: ["Investigated environmental detection of cnf1-positive Escherichia coli in a canine research facility.", "Manuscript in progress"],
      },
      {
        lead: "Nonhuman Primate Sleep and Social Behavior",
        rest: ", Johns Hopkins University",
        date: "2023",
        bullets: ["Investigated pair housing, relationship strength, sleep quality, and behavior in captive rhesus macaques."],
      },
      {
        lead: "Feed Hopper Microbiome and Mycobiome",
        rest: ", University of Missouri",
        date: "2022",
        bullets: ["Conducted research on the effects of retaining feed on hopper pellet microbial communities.", "Manuscript in progress"],
      },
      {
        lead: "Reptile Ecotoxicology",
        rest: ", Towson University",
        date: "2019 – 2020",
        bullets: [
          "Investigated PFAS exposure and reproductive outcomes in brown anoles; maintained a breeding colony and supported experimental husbandry.",
          "Provided basic clinical care for brown and green anoles",
        ],
      },
    ],
  },
  {
    heading: "Publications & Manuscripts",
    entries: [
      {
        lead: "The Endemic Spread of Escherichia coli Positive for Cytotoxic Necrotizing Factor Type 1 in a Canine Research Facility and Impact of Infection in Neonatal Puppies",
        rest: ", Furman S, McIntosh JM, et al. Journal of the American Association for Laboratory Animal Science 65(1):25–32; doi: 10.30802/AALAS-JAALAS-25-074",
        link: "https://doi.org/10.30802/AALAS-JAALAS-25-074",
        linkText: "10.30802/AALAS-JAALAS-25-074",
      },
      {
        lead: "When the Lights Go Out: Studying Sex Differences in Sleep Latency, Sleep Quality, and Social Behavior in Captive Rhesus Macaques (Macaca mulatta) Over a 24-h Period.",
        rest: " Roach, Alexis, Shaina Furman, Jasmine Hadeed, Rachel Choo, Emily Knight, Melissa C. Painter and Lydia M. Hopper. American Journal of Primatology 87 (2025): DOI: 10.1002/ajp.70098",
        link: "https://doi.org/10.1002/ajp.70098",
        linkText: "10.1002/ajp.70098",
      },
      {
        lead: "Effects of Perfluorooctane Sulfonate (PFOS) on Size and Reproductive Endpoints in Female Lizards (Anolis sagrei),",
        rest: " C. Daniel Furst, Shaina Furman, Taylor Anderson, Andrew East, Christopher J. Salice, Environmental Toxicology and Chemistry",
        bullets: ["Manuscript accepted, awaiting publication"],
      },
      {
        lead: "Environmental Sampling of a Canine Research Vivarium for E. coli",
        rest: ", Furman S, Ferguson D, Hamilton EA",
        bullets: ["Manuscript in preparation"],
      },
    ],
  },
  {
    heading: "Selected Research Presentations",
    entries: [
      { lead: "Acute Respiratory Distress in a Geriatric Rhesus Macaque", date: "2026", lines: ["AALAS Houston", "Manuscript in progress"] },
      {
        lead: "An Evaluation of Pair Housing and Relationship Strength on Nonhuman Primate Sleep Quality,",
        date: "2023",
        lines: ["Johns Hopkins University Summer Scholars, Veterinary Scholars Symposium Puerto Rico"],
      },
      { lead: "Effects of Retaining Feed on Hopper Pellet Mycobiome and Microbiome", date: "2022", lines: ["Veterinary Scholars Symposium Minnesota"] },
      {
        lead: "Exploring the Effects of PFOS Contact Exposure on Hatchling Success of Brown Anole Eggs",
        date: "2019",
        lines: ["Towson University Poster Symposium"],
      },
      { lead: "Creating and Maintaining a Brown Anole Breeding Colony", date: "2018", lines: ["Towson University Poster Symposium"] },
    ],
  },
  {
    heading: "Additional Experience & Leadership",
    entries: [
      { lead: "Herpetology Intern/Volunteer", rest: ", National Aquarium, Baltimore", date: "2020 – 2021" },
      { lead: "Co-Founder and Co-President", rest: ", Michigan State University", date: "2022 – 2023", lines: ["Research and Laboratory Animal Medicine Club"] },
      { lead: "President", rest: ", Michigan State University", date: "2023", lines: ["Veterinary Wellness Initiative"] },
      {
        lead: "Environmental Wellness Chair",
        rest: ", Michigan State University",
        date: "2021-2023",
        lines: ["SAVMA Student American Veterinary Medical Association"],
      },
    ],
  },
];

// Last section: plain lines. `em` is shown in italics, as in the PDF.
export const CV_CERTIFICATIONS = {
  heading: "Certifications/Memberships",
  items: [
    { text: "Licensed Veterinarian in Connecticut" },
    { text: "USDA Veterinary Accreditation- ", em: "in progress" },
    { text: "Fear Free Certified Professional" },
    { text: "AALAS Member" },
    { text: "ACLAM Member" },
  ],
};
