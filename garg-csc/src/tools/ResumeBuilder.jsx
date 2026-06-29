import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  getUsage,
  increaseUsage,
  isPaymentRequired,
  FREE_LIMIT,
  unlockPaidDownload,
  isPaidUnlocked,
} from "./paymentUtils.js";

import "./ResumeBuilder.css";

const TOOL_NAME = "resume_builder_downloads";

const templates = [
  { id: "modern", name: "Modern" },
  { id: "normal", name: "Normal" },
  { id: "professional", name: "Professional" },
  { id: "developer", name: "Developer" },
];

const positions = [
  { id: "right", name: "Right Side" },
  { id: "top", name: "Top" },
  { id: "bottom", name: "Bottom" },
];

export default function ResumeBuilder() {
  const resumeRef = useRef(null);
  const fileInputRef = useRef(null);

  const [activeSection, setActiveSection] = useState("personal");
  const [themeColor, setThemeColor] = useState("#0b4f8a");
  const [template, setTemplate] = useState("modern");
  const [previewPosition, setPreviewPosition] = useState("right");
  const [photo, setPhoto] = useState(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    phone: "+91 ",
    email: "",
    address: "",
    linkedin: "",
    github: "",
    summary: "",
    skills: "",
    certifications: "",
    languages: "",
  });

  const formTabs = [
    { id: "personal", label: "👤 Personal" },
    { id: "education", label: "🎓 Education" },
    { id: "experience", label: "💼 Experience" },
    { id: "projects", label: "🚀 Projects" },
  ];

  const [sectionOrder, setSectionOrder] = useState([
    "summary",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "languages",
  ]);

  const [educationList, setEducationList] = useState([
    {
      degree: "",
      institute: "",
      year: "",
      cgpa: "",
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      company: "",
      role: "",
      duration: "",
      description: "",
    },
  ]);

  const [projectList, setProjectList] = useState([
    {
      name: "",
      tech: "",
      live: "",
      github: "",
      description: "",
    },
  ]);

  const skillsArray = form.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const completedFields = Object.values(form).filter(
    (value) => value.trim() !== "" && value.trim() !== "+91"
  ).length;

  const extraFields =
    educationList.filter((e) => e.degree || e.institute || e.year || e.cgpa)
      .length +
    experienceList.filter(
      (e) => e.company || e.role || e.duration || e.description
    ).length +
    projectList.filter(
      (p) => p.name || p.tech || p.live || p.github || p.description
    ).length;

  const completionPercent = Math.min(
    100,
    Math.round(
      ((completedFields + extraFields) / (Object.keys(form).length + 3)) * 100
    )
  );

  const toTitleCase = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  const handleChange = (e) => {
    const { name, value } = e.target;

    const autoCapitalizeFields = ["name", "role", "address"];

    setForm({
      ...form,
      [name]: autoCapitalizeFields.includes(name) ? toTitleCase(value) : value,
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const moveSection = (index, direction) => {
    const updated = [...sectionOrder];

    if (direction === "up" && index > 0) {
      [updated[index], updated[index - 1]] = [
        updated[index - 1],
        updated[index],
      ];
    }

    if (direction === "down" && index < updated.length - 1) {
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index],
      ];
    }

    setSectionOrder(updated);
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...educationList];
    updated[index][field] = value;
    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        degree: "",
        institute: "",
        year: "",
        cgpa: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experienceList];
    updated[index][field] = value;
    setExperienceList(updated);
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        company: "",
        role: "",
        duration: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...projectList];
    updated[index][field] = value;
    setProjectList(updated);
  };

  const addProject = () => {
    setProjectList([
      ...projectList,
      {
        name: "",
        tech: "",
        live: "",
        github: "",
        description: "",
      },
    ]);
  };

  const removeProject = (index) => {
    setProjectList(projectList.filter((_, i) => i !== index));
  };

  const API_BASE_URL = "https://garg-csc.onrender.com";

  const payAndUnlock = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 10 }),
      });

      const data = await res.json();

      if (!data.success || !data.order || !data.key) {
        alert("Payment order creation failed.");
        return;
      }

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "Garg CSC",
        description: "Resume Builder Paid Download",
        order_id: data.order.id,

        handler: async function (response) {
          const verifyRes = await fetch(`${API_BASE_URL}/api/verify-payment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            unlockPaidDownload(TOOL_NAME);
            alert("Payment successful. Resume download unlocked.");
          } else {
            alert("Payment verification failed.");
          }
        },

        prefill: {
          name: form.name || "Customer",
          email: form.email || "test@example.com",
          contact: form.phone.replace("+91", "").trim(),
        },

        theme: {
          color: themeColor,
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log("Payment Error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  const downloadPDF = async () => {
    const phoneDigits = form.phone.replace("+91", "").trim();

    if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      alert("Please enter a valid 10 digit Indian mobile number");
      return;
    }

    if (isPaymentRequired(TOOL_NAME) && !isPaidUnlocked(TOOL_NAME)) {
      alert("Free download limit completed. Please pay to continue.");
      await payAndUnlock();
      return;
    }

    const element = resumeRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",

      onclone: (clonedDoc) => {
        clonedDoc.querySelectorAll("*").forEach((el) => {
          const computed = clonedDoc.defaultView.getComputedStyle(el);

          if (
            computed.color.includes("color(") ||
            computed.color.includes("oklch") ||
            computed.color.includes("lab(")
          ) {
            el.style.color = "#1e293b";
          }

          if (
            computed.backgroundColor.includes("color(") ||
            computed.backgroundColor.includes("oklch") ||
            computed.backgroundColor.includes("lab(")
          ) {
            el.style.backgroundColor = "#ffffff";
          }

          if (
            computed.borderColor.includes("color(") ||
            computed.borderColor.includes("oklch") ||
            computed.borderColor.includes("lab(")
          ) {
            el.style.borderColor = "#e2e8f0";
          }
        });
      },
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${form.name || "resume"}.pdf`);

    increaseUsage(TOOL_NAME);

    alert(
      `Resume downloaded successfully. Free downloads used: ${getUsage(
        TOOL_NAME
      )}/${FREE_LIMIT}`
    );
  };

  return (
    <section className="resume-page" style={{ "--resume-theme": themeColor }}>
      <div className="resume-title">
        <h1>📄 Resume Builder</h1>
      </div>

      <div className={`resume-layout ${previewPosition}`}>
        <div className="resume-form">
          <h2>Resume Details</h2>

          <div className="sticky-form-tabs">
            {formTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={activeSection === tab.id ? "tab-btn active" : "tab-btn"}
                onClick={() => setActiveSection(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <label>Resume Template</label>
          <div className="template-options">
            {templates.map((t) => (
              <button
                key={t.id}
                type="button"
                className={template === t.id ? "template-btn active" : "template-btn"}
                onClick={() => setTemplate(t.id)}
              >
                {t.name}
              </button>
            ))}
          </div>

          <label>Preview Position</label>
          <div className="template-options">
            {positions.map((p) => (
              <button
                key={p.id}
                type="button"
                className={
                  previewPosition === p.id ? "template-btn active" : "template-btn"
                }
                onClick={() => setPreviewPosition(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          <label>Theme Color</label>
          <div className="color-options">
            {["#0b4f8a", "#ff6b00", "#16a34a", "#7c3aed", "#111827"].map(
              (color) => (
                <button
                  key={color}
                  type="button"
                  className="color-btn"
                  style={{ backgroundColor: color }}
                  onClick={() => setThemeColor(color)}
                >
                  {themeColor === color ? "✓" : ""}
                </button>
              )
            )}
          </div>

          <label>Profile Photo</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhoto}
          />

          {photo && (
            <div className="photo-preview-box">
              <img src={photo} alt="Preview" className="photo-preview" />

              <button
                type="button"
                className="remove-photo-btn"
                onClick={() => {
                  setPhoto(null);

                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
              >
                🗑 Remove Photo
              </button>
            </div>
          )}

          <FormAccordion
            title="👤 Personal Details"
            sectionId="personal"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            {Object.keys(form).map((key) => (
              <div key={key}>
                <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>

                {["summary", "skills", "certifications", "languages"].includes(
                  key
                ) ? (
                  <textarea
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                  />
                ) : key === "phone" ? (
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={(e) => {
                      let digits = e.target.value.replace(/\D/g, "");

                      if (digits.startsWith("91")) {
                        digits = digits.slice(2);
                      }

                      digits = digits.slice(0, 10);

                      setForm({
                        ...form,
                        phone: `+91 ${digits}`,
                      });
                    }}
                    placeholder="+91 9876543210"
                  />
                ) : (
                  <input
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
          </FormAccordion>

          <FormAccordion
            title="🎓 Education"
            sectionId="education"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <div className="education-builder">
              <h3>Education Details</h3>

              {educationList.map((edu, index) => (
                <div key={index} className="education-form-card">
                  <input
                    type="text"
                    placeholder="Degree / Course"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="School / College / University"
                    value={edu.institute}
                    onChange={(e) =>
                      handleEducationChange(index, "institute", e.target.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="CGPA / Percentage"
                    value={edu.cgpa}
                    onChange={(e) =>
                      handleEducationChange(index, "cgpa", e.target.value)
                    }
                  />

                  {educationList.length > 1 && (
                    <button
                      type="button"
                      className="remove-edu-btn"
                      onClick={() => removeEducation(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <button type="button" className="add-edu-btn" onClick={addEducation}>
                + Add More Education
              </button>
            </div>
          </FormAccordion>

          <FormAccordion
            title="💼 Experience"
            sectionId="experience"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <div className="builder-box">
              <h3>Experience Details</h3>

              {experienceList.map((exp, index) => (
                <div key={index} className="builder-card">
                  <input
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                  />

                  <input
                    placeholder="Job Role"
                    value={exp.role}
                    onChange={(e) =>
                      handleExperienceChange(index, "role", e.target.value)
                    }
                  />

                  <input
                    placeholder="Duration"
                    value={exp.duration}
                    onChange={(e) =>
                      handleExperienceChange(index, "duration", e.target.value)
                    }
                  />

                  <textarea
                    placeholder="Work Description"
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(index, "description", e.target.value)
                    }
                  />

                  {experienceList.length > 1 && (
                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeExperience(index)}
                    >
                      Remove Experience
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="add-item-btn"
                onClick={addExperience}
              >
                + Add More Experience
              </button>
            </div>
          </FormAccordion>

          <FormAccordion
            title="🚀 Projects"
            sectionId="projects"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <div className="builder-box">
              <h3>Project Details</h3>

              {projectList.map((project, index) => (
                <div key={index} className="builder-card">
                  <input
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                  />

                  <input
                    placeholder="Tech Stack"
                    value={project.tech}
                    onChange={(e) =>
                      handleProjectChange(index, "tech", e.target.value)
                    }
                  />

                  <input
                    placeholder="Live URL"
                    value={project.live}
                    onChange={(e) =>
                      handleProjectChange(index, "live", e.target.value)
                    }
                  />

                  <input
                    placeholder="GitHub URL"
                    value={project.github}
                    onChange={(e) =>
                      handleProjectChange(index, "github", e.target.value)
                    }
                  />

                  <textarea
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                  />

                  {projectList.length > 1 && (
                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeProject(index)}
                    >
                      Remove Project
                    </button>
                  )}
                </div>
              ))}

              <button type="button" className="add-item-btn" onClick={addProject}>
                + Add More Project
              </button>
            </div>
          </FormAccordion>

          <button className="download-resume-btn" onClick={downloadPDF}>
            ⬇ Download Resume
          </button>

          <p className="download-limit">
            Free Downloads Used: {getUsage(TOOL_NAME)}/{FREE_LIMIT}
          </p>
        </div>

        <div className="resume-preview-wrap">
          {template === "professional" && (
            <div className="profile-score-box outside-score">
              <span>Profile Completion</span>
              <strong>{completionPercent}%</strong>

              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
            </div>
          )}

          <div ref={resumeRef} className={`resume-preview ${template}-template`}>
            <div className="resume-header">
              <div>
                <h1>{form.name}</h1>
                <h3>{form.role}</h3>

                {(form.phone.trim() !== "+91" || form.email) && (
                  <p>
                    {form.phone.trim() !== "+91" && form.phone}
                    {form.phone.trim() !== "+91" && form.email && " | "}
                    {form.email}
                  </p>
                )}

                {form.address && <p>{form.address}</p>}

                {(form.linkedin || form.github) && (
                  <p>
                    {form.linkedin && `LinkedIn: ${form.linkedin}`}
                    {form.linkedin && form.github && " | "}
                    {form.github && `GitHub: ${form.github}`}
                  </p>
                )}
              </div>

              {photo && <img src={photo} alt="Profile" className="resume-photo" />}
            </div>

            {sectionOrder.map((section) => {
              if (section === "summary") {
                return (
                  <Section
                    key={section}
                    title={
                      template === "normal" ? "Career Objective" : "Profile Summary"
                    }
                    content={form.summary}
                  />
                );
              }

              if (section === "skills") {
                if (template === "professional" && skillsArray.length > 0) {
                  return (
                    <div key={section} className="resume-section">
                      <h2>Technical Skills</h2>
                      <div className="skills-chip-box">
                        {skillsArray.map((skill) => (
                          <span key={skill} className="skill-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Section
                    key={section}
                    title={template === "developer" ? "Technical Skills" : "Skills"}
                    content={form.skills}
                  />
                );
              }

              if (section === "experience") {
                return (
                  <ExperienceSection
                    key={section}
                    experienceList={experienceList}
                  />
                );
              }

              if (section === "projects") {
                return (
                  <ProjectSection key={section} projectList={projectList} />
                );
              }

              if (section === "education") {
                return (
                  <EducationSection
                    key={section}
                    educationList={educationList}
                  />
                );
              }

              if (section === "certifications") {
                return (
                  <Section
                    key={section}
                    title="Certifications"
                    content={form.certifications}
                  />
                );
              }

              if (section === "languages") {
                return (
                  <Section
                    key={section}
                    title={template === "normal" ? "Languages Known" : "Languages"}
                    content={form.languages}
                  />
                );
              }

              return null;
            })}

            {template === "normal" && (
              <div className="resume-section">
                <h2>Declaration</h2>
                <p>
                  I hereby declare that the information provided above is true and
                  correct to the best of my knowledge.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="section-order-panel">
          <div className="section-order-box">
            <h3>Resume Section Order</h3>

            {sectionOrder.map((section, index) => (
              <div key={section} className="section-order-item">
                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>

                <div>
                  <button
                    type="button"
                    onClick={() => moveSection(index, "up")}
                    disabled={index === 0}
                  >
                    ↑
                  </button>

                  <button
                    type="button"
                    onClick={() => moveSection(index, "down")}
                    disabled={index === sectionOrder.length - 1}
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection({ educationList }) {
  const validEducation = educationList.filter(
    (edu) => edu.degree || edu.institute || edu.year || edu.cgpa
  );

  if (validEducation.length === 0) return null;

  return (
    <div className="resume-section">
      <h2>Education</h2>

      <div className="education-preview-list">
        {validEducation.map((edu, index) => (
          <div key={index} className="education-preview-card">
            <strong>{edu.degree}</strong>

            {edu.institute && <p>{edu.institute}</p>}

            <div className="edu-meta">
              {edu.year && <span>{edu.year}</span>}
              {edu.cgpa && <span>CGPA / Percentage: {edu.cgpa}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceSection({ experienceList }) {
  const validExperience = experienceList.filter(
    (exp) => exp.company || exp.role || exp.duration || exp.description
  );

  if (validExperience.length === 0) return null;

  return (
    <div className="resume-section">
      <h2>Experience</h2>

      {validExperience.map((exp, index) => (
        <div key={index} className="resume-item-card">
          <strong>{exp.role}</strong>
          {exp.company && <p>{exp.company}</p>}
          {exp.duration && <span>{exp.duration}</span>}
          {exp.description && <p>{exp.description}</p>}
        </div>
      ))}
    </div>
  );
}

function ProjectSection({ projectList }) {
  const validProjects = projectList.filter(
    (project) =>
      project.name ||
      project.tech ||
      project.live ||
      project.github ||
      project.description
  );

  if (validProjects.length === 0) return null;

  return (
    <div className="resume-section">
      <h2>Projects</h2>

      {validProjects.map((project, index) => (
        <div key={index} className="resume-item-card">
          <strong>🚀 {project.name}</strong>

          {project.tech && <p>Tech Stack: {project.tech}</p>}

          {(project.live || project.github) && (
            <p>
              {project.live && `Live: ${project.live}`}
              {project.live && project.github && " | "}
              {project.github && `GitHub: ${project.github}`}
            </p>
          )}

          {project.description && <p>{project.description}</p>}
        </div>
      ))}
    </div>
  );
}

function FormAccordion({
  title,
  sectionId,
  activeSection,
  setActiveSection,
  children,
}) {
  return (
    <div className="form-accordion">
      <button
        type="button"
        className="accordion-header"
        onClick={() =>
          setActiveSection(activeSection === sectionId ? "" : sectionId)
        }
      >
        <span>{title}</span>
        <span>{activeSection === sectionId ? "−" : "+"}</span>
      </button>

      {activeSection === sectionId && (
        <div className="accordion-body">{children}</div>
      )}
    </div>
  );
}

function Section({ title, content }) {
  if (!content) return null;

  return (
    <div className="resume-section">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}