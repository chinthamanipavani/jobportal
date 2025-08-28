import React, { useState } from "react";
import "./Resume.css"; // optional for styling

const Resume = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    linkedin: "",
    objective: "",
    experience: "",
    education: "",
    certification: "",
    skills: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setShowPreview(true);

  //   // Send data to the backend
  //   try {
  //     const response = await fetch("http://localhost:3000/api/resume/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to save resume data");
  //     }

  //     const data = await response.json();
  //     console.log(data.message); // Success message
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^\d{10}$/;
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/.*$/;
    const urlRegex = /^(https?:\/\/[^\s]+)$/;

    if (!nameRegex.test(formData.name)) {
      alert("Name should contain only letters and spaces.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Email must be a valid Gmail address.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (!linkedinRegex.test(formData.linkedin)) {
      alert("LinkedIn URL must start with 'https://www.linkedin.com/'");
      return;
    }

    if (formData.certification && !urlRegex.test(formData.certification)) {
      alert("Certification must be a valid URL.");
      return;
    }

    // If all validations pass
    setShowPreview(true);

    try {
      const response = await fetch("http://localhost:3000/api/resume/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save resume data");

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="resume-container">
      {!showPreview ? (
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          <h2>Enter Resume Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name} // <-- pre-fill value
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location} // <-- pre-fill value
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email} // <-- pre-fill value
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone} // <-- pre-fill value
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.linkedin} // <-- pre-fill value
            onChange={handleChange}
          />

          <textarea
            name="objective"
            placeholder="Professional Summary / Objective"
            value={formData.objective} // <-- pre-fill value
            onChange={handleChange}
          ></textarea>
          <textarea
            name="experience"
            placeholder="Work History (use line breaks for jobs)"
            value={formData.experience} // <-- pre-fill value
            onChange={handleChange}
          ></textarea>
          <textarea
            name="education"
            placeholder="Education"
            value={formData.education} // <-- pre-fill value
            onChange={handleChange}
          ></textarea>
          <textarea
            name="certification"
            placeholder="Certifications"
            value={formData.certification} // <-- pre-fill value
            onChange={handleChange}
          ></textarea>
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills} // <-- pre-fill value
            onChange={handleChange}
          ></textarea>

          <button type="submit">Preview Resume</button>
        </form>
      ) : (
        <div className="resume-preview">
          {/* Header */}
          <header className="resume-header">
            <h1>{formData.name}</h1>
            <div className="resume-contact">
              <span>📍 {formData.location}</span> |
              <span>✉️ {formData.email}</span> |<span>📞 {formData.phone}</span>{" "}
              |
              <span>
                🔗{" "}
                <a
                  href={formData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData.linkedin}
                </a>
              </span>
            </div>
          </header>

          {/* Objective */}
          <section>
            <h2>OBJECTIVE</h2>
            <p>{formData.objective}</p>
          </section>

          {/* Experience */}
          <section>
            <h2>EXPERIENCE</h2>
            <pre className="multiline">{formData.experience}</pre>
          </section>

          {/* Education */}
          <section>
            <h2>EDUCATION</h2>
            <pre className="multiline">{formData.education}</pre>
          </section>

          {/* Certifications */}
          <section>
            <h2>CERTIFICATIONS</h2>
            <pre className="multiline">{formData.certification}</pre>
          </section>

          {/* Skills */}
          <section>
            <h2>SKILLS</h2>
            <p>{formData.skills}</p>
          </section>

          <button onClick={() => setShowPreview(false)}>Edit Resume</button>
        </div>
      )}
    </div>
  );
};

export default Resume;
