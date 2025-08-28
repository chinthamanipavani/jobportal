import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const FindJobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(
    location.state?.searchTerm || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }

    const fetchJobs = async () => {
      try {
        const response = await fetch("https://jobportal-0isa.onrender.com/defaultJobs");

        if (!response.ok) throw new Error("Error fetching data");

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      }
    };

    fetchJobs();
  }, [navigate]);

  console.log("Search Term:", searchTerm);
  console.log("Jobs Data:", jobs);

  // Filter jobs using searchTerm
  const filteredJobs = jobs.filter((job) => {
    if (!searchTerm) return true;

    const terms = searchTerm.toLowerCase().split(" ");

    return terms.some(
      (term) =>
        job.companyName?.toLowerCase().includes(term) ||
        job.jobTitle?.toLowerCase().includes(term) ||
        (Array.isArray(job.skills)
          ? job.skills.some((skill) => skill.toLowerCase().includes(term))
          : false) ||
        job.city?.toLowerCase().includes(term) ||
        job.location?.toLowerCase().includes(term) ||
        job.state?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="job-page-container">
      <h1 style={{ color: "blue" }}>Available Jobs</h1>
      {error && <p className="error">{error}</p>}

      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job._id} className="job-card">
            <img src={job.imageurl || job.longitude} alt="Company" /> <br />
            {/* Official Website button */}
            {job.website && (
              <a
                className="official-button"
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
            )}
            <h3>{job.companyName}</h3>
            <p>
              <strong>Title:</strong> {job.jobTitle}
            </p>
            <p>
              <strong>Skills:</strong>{" "}
              {Array.isArray(job.skills) ? job.skills.join(", ") : job.skills}
            </p>
            <p>
              <strong>Location:</strong> {job.city || job.location || job.state}
            </p>
            <p>{job.jobDescription?.slice(0, 100)}...</p>
            {/* Buttons */}
            <div style={{ marginTop: "10px" }}>
              {/* Apply Now */}
              {(job.link || job.website) && (
                <a
                  className="apply-button"
                  href={job.link || job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  Apply Now
                </a>
              )}

              {/* View Details */}
              <Link
                to="/moredetails"
                state={{ job }} // pass the selected job data
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobPage;
