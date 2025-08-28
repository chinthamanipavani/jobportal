import React from "react";

const SetCareerGoals = () => {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
        lineHeight: "1.8",
      }}
    >
      {/* Top Section with Image + Intro */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwaSbI6TlfPpFbOcnezXDN4kWZj8dKY7Lvg&s"
          alt="Career Goals"
          style={{
            width: "500px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <div style={{ fontSize: "22px", fontWeight: "500", color: "#444" }}>
          Personal goal-setting means defining <b>SMART objectives</b> that you
          want to achieve in your professional journey. Clear goals act like a
          roadmap — they give you <b>direction, focus, and motivation</b>. With
          the right plan, you can move from vague dreams to actionable steps
          that shape your future career.
        </div>
      </div>

      {/* Guidelines Section */}
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        🎯 Set Your Career Goals
      </h2>

      <div
        style={{
          background: "#f9f9ff",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "25px",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#007bff" }}>
          📌 Guidelines for Building Career Goals
        </h3>

        {/* 1 */}
        <div style={{ marginBottom: "30px" }}>
          <h4>1. 🎯 Be Clear & Specific</h4>
          <p>
            Many people say, <em>“I want success”</em>, but success means
            different things for different people. Being vague makes your path
            uncertain. Instead, define your goal clearly with job role,
            industry, and even skill set.
          </p>
          <p>❌ “I want a better career.”</p>
          <p>
            ✅ “I want to become a Data Analyst in the finance sector, working
            with big data tools like SQL and Python.”
          </p>
          <p>
            👉 Why? Because when you know exactly where you’re heading, you can
            create a focused action plan, learn the right skills, and avoid
            distractions. Clarity saves time and builds confidence.
          </p>
        </div>

        {/* 2 */}
        <div style={{ marginBottom: "30px" }}>
          <h4>2. ⏳ Set a Realistic Timeline</h4>
          <p>
            A dream without a deadline is just a wish. If you say,{" "}
            <em>“I’ll learn coding someday”</em>, that someday may never come. A
            timeline keeps you accountable and motivated.
          </p>
          <p>
            ✅ Example: “Within 12 months, I will complete a certification in
            Cloud Computing, build 2 cloud-based projects, and apply to at least
            30 relevant jobs.”
          </p>
          <p>
            👉 This urgency creates consistency. Instead of procrastinating,
            you’ll take small daily steps to meet your deadline.
          </p>
        </div>

        {/* 3 */}
        <div style={{ marginBottom: "30px" }}>
          <h4>3. 🪜 Break Down Big Goals Into Small Steps</h4>
          <p>
            Large goals often feel overwhelming, but breaking them into smaller
            milestones makes them achievable.
          </p>
          <p>
            Example Goal: <em>“Become a Software Engineer.”</em>
          </p>
          <ul>
            <li>Learn programming basics (e.g., JavaScript, Python).</li>
            <li>Build 3–4 mini-projects to practice.</li>
            <li>Learn frameworks like React or Django.</li>
            <li>Create a strong portfolio and GitHub profile.</li>
            <li>Apply for internships.</li>
            <li>Then move towards full-time roles.</li>
          </ul>
          <p>
            👉 Each small victory builds momentum. Instead of being scared by
            the “big picture”, you’ll celebrate small achievements and stay
            motivated.
          </p>
        </div>

        {/* 4 */}
        <div style={{ marginBottom: "30px" }}>
          <h4>4. ✅ Be Practical & Achievable</h4>
          <p>
            Ambition is good, but if your goals are too unrealistic, you may
            feel frustrated. For instance:
          </p>
          <p>❌ “I want to become a CTO in 6 months.”</p>
          <p>
            ✅ “I want to get an entry-level job as a Web Developer and grow
            step by step into leadership roles.”
          </p>
          <p>
            👉 Practical goals create confidence. Once you achieve smaller
            steps, you’ll naturally grow toward bigger opportunities. This
            balance between ambition and realism keeps your journey sustainable.
          </p>
        </div>

        {/* 5 */}
        <div style={{ marginBottom: "30px" }}>
          <h4>5. 📊 Track & Measure Your Progress</h4>
          <p>What gets measured gets improved. Don’t just set goals — measure them.</p>
          <p>Ways to track:</p>
          <ul>
            <li>Count the new skills you’ve learned.</li>
            <li>Note the projects you’ve completed.</li>
            <li>Track applications submitted and interviews attended.</li>
            <li>Build a habit tracker or use tools like Notion/Trello.</li>
          </ul>
          <p>
            👉 Tracking progress keeps you accountable, motivates you when you
            see improvements, and helps you identify gaps early.
          </p>
        </div>

        {/* 6 */}
        <div style={{ marginBottom: "30px" }}>
          <h4>6. 🔄 Stay Flexible & Adaptable</h4>
          <p>
            Life is unpredictable, and your interests may evolve over time.
            Maybe you begin your journey in Data Science, but later discover a
            passion for Cybersecurity. That’s completely fine!
          </p>
          <p>
            👉 Flexibility ensures you don’t feel stuck. Adapting to new
            opportunities is part of career growth. The goal is not just to
            follow one rigid path, but to <b>keep learning and keep moving
            forward</b>. 
          </p>
        </div>
      </div>

      {/* Final Motivation */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
          color: "#222",
        }}
      >
        ✨ <em>
          Remember, your career is a journey, not a single destination. Every
          small step brings you closer to the big dream!
        </em>
      </div>
    </div>
  );
};

export default SetCareerGoals;
