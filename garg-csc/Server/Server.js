import express from "express";
import cors from "cors";
import servicesData from "./servicesData.js";

const app = express();
app.use(cors());
app.use(express.json());

// ── Keyword map — message mein ye words aayein toh ye service dikhao ────────
// IMPORTANT: Specific keywords pehle, generic baad mein
const KEYWORD_MAP = [
  // Identity & Documents
  { slug: "aadhaar-card",         keywords: ["aadhaar", "aadhar", "adhar", "adhaar", "uidai", "uid card", "address update aadhaar", "mobile update aadhaar"] },
  { slug: "pan-card",             keywords: ["pan card", "pan number", "permanent account number", "income tax card", "pan apply", "pan correction", "pan reprint", "pan aadhaar link"] },
  { slug: "voter-card",           keywords: ["voter card", "voter id", "voter registration", "epic card", "election card", "voting card", "new voter"] },
  { slug: "passport",             keywords: ["passport", "travel document", "passport renewal", "passport apply", "passport reissue"] },
  { slug: "driving-license",      keywords: ["driving license", "driving licence", "learner license", "dl apply", "dl renewal", "rc transfer"] },
  { slug: "family-id",            keywords: ["family id", "ppp", "parivar pehchan", "pariwar pehchan", "family card", "haryana family"] },
  { slug: "police-verification",  keywords: ["police verification", "character certificate", "police cert", "verification certificate"] },

  // Health & Welfare
  { slug: "ayushman-bharat",      keywords: ["ayushman", "ayushman card", "ayushman bharat", "pmjay", "health card", "free treatment", "5 lakh health"] },
  { slug: "insurance",            keywords: ["insurance", "bima", "life insurance", "health insurance", "motor insurance", "pmjjby", "pmsby", "vehicle insurance"] },
  { slug: "pension-services",     keywords: ["pension", "old age pension", "widow pension", "disability pension", "vridha pension", "samman allowance"] },
  { slug: "e-shram-card",         keywords: ["e shram", "eshram", "shram card", "labour card", "worker card", "e-shram"] },

  // Certificates
  { slug: "certificates",         keywords: ["income certificate", "caste certificate", "domicile certificate", "ews certificate", "birth certificate", "death certificate", "janam praman", "jati praman", "nivas praman"] },

  // Government Schemes
  { slug: "ration-card",          keywords: ["ration card", "ration", "food card", "bpl card", "ration list", "antyodaya", "ration store"] },
  { slug: "pmay-services",        keywords: ["pmay", "pradhan mantri awas", "housing scheme", "awas yojana", "pm awas", "home scheme"] },
  { slug: "udyam-registration",   keywords: ["udyam", "msme", "small business", "udyam certificate", "enterprise registration", "msme certificate"] },
  { slug: "property-id",          keywords: ["property id", "property tax", "plot id", "house id", "property registration", "property record"] },

  // Finance & Banking
  { slug: "banking-services",     keywords: ["banking", "bank account", "account open", "jan dhan", "savings account", "fd", "fixed deposit"] },
  { slug: "bill-payments",        keywords: ["bill payment", "electricity bill", "bijli bill", "water bill", "gas bill", "mobile recharge", "dth recharge", "recharge", "loan emi"] },
  { slug: "ticket-booking",       keywords: ["ticket booking", "train ticket", "bus ticket", "flight ticket", "irctc", "tatkal", "pnr", "travel booking"] },

  // Education & Jobs
  { slug: "education-services",   keywords: ["scholarship", "school admission", "college admission", "exam form", "result download", "marksheet", "university form"] },
  { slug: "government-jobs",      keywords: ["government job", "sarkari job", "sarkari naukri", "govt job", "job apply", "admit card", "recruitment form"] },

  // Printing
  { slug: "printing-documentation", keywords: ["print", "printout", "photocopy", "xerox", "scanning", "lamination", "resume print", "document print", "photo print", "pdf print"] },
];

// ── Match function — simple & accurate ──────────────────────────────────────
function findService(message) {
  const msg = message.toLowerCase().trim();

  for (const entry of KEYWORD_MAP) {
    for (const keyword of entry.keywords) {
      if (msg.includes(keyword)) {
        return servicesData.find((s) => s.slug === entry.slug) || null;
      }
    }
  }
  return null;
}

// ── Route ────────────────────────────────────────────────────────────────────
app.post("/api/chat", (req, res) => {
  const message = req.body.message?.trim() || "";

  if (!message) {
    return res.json({ reply: "Please type your question or service name." });
  }

  const foundService = findService(message);

  // No match — show full service list
  if (!foundService) {
    const serviceList = servicesData.map((s) => `${s.icon} ${s.title}`).join("\n");
    return res.json({
      reply: `Welcome to Garg Common Service Center, Faridabad! 🙏\n\nWe offer the following services:\n\n${serviceList}\n\nPlease type a service name or describe what you need.`,
    });
  }

  // ── Build reply ─────────────────────────────────────────────────────────────
  let reply = `${foundService.icon} ${foundService.title}\n\n`;
  reply += `${foundService.overview || foundService.shortDescription}\n`;

  if (foundService.availableServices?.length > 0) {
    reply += `\n📋 Available Services:\n`;
    foundService.availableServices.forEach((item) => {
      reply += `• ${item}\n`;
    });
  }

  if (foundService.requiredDocuments?.length > 0) {
    reply += `\n📄 Required Documents:\n`;
    foundService.requiredDocuments.forEach((doc) => {
      if (typeof doc === "string") {
        reply += `• ${doc}\n`;
      } else if (doc.title) {
        reply += `\n  ${doc.title}:\n`;
        doc.documents?.forEach((d) => (reply += `  - ${d}\n`));
      }
    });
  }

  if (foundService.processingTime) {
    reply += `\n⏱️ Processing Time: ${foundService.processingTime}`;
  }

  if (foundService.importantNote) {
    reply += `\n\n⚠️ Note: ${foundService.importantNote}`;
  }

  reply += `\n\n📞 Visit us or call for more details.`;

  res.json({ reply });
});

app.get("/", (req, res) => {
  res.send("Garg CSC Server is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});