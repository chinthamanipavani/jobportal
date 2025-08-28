import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import landing2 from "../images/landing2.jpg";

const Animated = ({ id }) => {
  const imageRef = useRef(null);
  const stepsRef = useRef(null);
  const navigate = useNavigate(); // ✅ Setup navigate

  const [imageVisible, setImageVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.3 };

    const imageObserver = new IntersectionObserver(([entry]) => {
      setImageVisible(entry.isIntersecting);
    }, options);

    const stepsObserver = new IntersectionObserver(([entry]) => {
      setStepsVisible(entry.isIntersecting);
    }, options);

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (stepsRef.current) stepsObserver.observe(stepsRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (stepsRef.current) stepsObserver.unobserve(stepsRef.current);
    };
  }, []);

  const scrollToNavbar = () => {
    const element = document.getElementById("navbar");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }} id={id}>
      <style>{`
        @media (max-width: 768px) {
          .animated-flex-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          .animated-image {
            width: 100% !important;
            height: auto !important;
            margin-bottom: 20px;
          }
          .animated-steps {
            width: 100% !important;
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .animated-step-card {
            padding: 15px !important;
          }
        }
      `}</style>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Land Your Dream Job
      </h1>

      <div
        className="animated-flex-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          ref={imageRef}
          src={landing2}
          alt="process"
          className="animated-image"
          style={{
            height: "400px",
            width: "45%",
            borderRadius: "15px",
            boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
            transform: imageVisible
              ? "scale(1) rotate(0deg)"
              : "scale(0.8) rotate(-10deg)",
            opacity: imageVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        />

        <div
          ref={stepsRef}
          className="animated-steps"
          style={{
            width: "50%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            transform: stepsVisible ? "scale(1)" : "scale(0.8)",
            opacity: stepsVisible ? 1 : 0,
            transition: "all 1s ease-in-out",
          }}
        >
          {[
            {
              icon: "bi bi-file-earmark-person-fill",
              title: "Build Your Resume",
              desc: "Craft a standout resume to impress employers.",
              onClick: () => navigate("/resume"), // ✅ navigate to Resume.jsx
            },
            {
              icon: "bi bi-bullseye",
              title: "Set Career Goals",
              desc: "Plan your career path with clear, achievable milestones.",
              onClick: () => navigate("/careergoals"), // ✅ navigate to SetCareerGoals.jsx
            },
            {
              icon: "bi bi-check-circle-fill",
              title: "Get Hired",
              desc: "Ace your interviews with confidence.",
              onClick: () => navigate("/findjob"), // ✅ navigate to FindJobPage.jsx
            },
            {
              icon: "bi bi-bar-chart-line-fill",
              title: "Grow Professionally",
              desc: "Develop skills to boost your career.",
              onClick: () => navigate("/developskills"), // ✅ navigate to DevelopSkills.jsx
            },
          ].map((step, i) => (
            <div
              key={i}
              onClick={step.onClick}
              className="animated-step-card"
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                transform: stepsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.2}s`,
                cursor: step.onClick ? "pointer" : "default",
              }}
            >
              <i
                className={step.icon}
                style={{
                  fontSize: "2rem",
                  color: "#007bff",
                  flexShrink: 0,
                }}
              ></i>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#666",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animated;
