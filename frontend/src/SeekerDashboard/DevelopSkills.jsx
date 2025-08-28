import React from "react";

const skills = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    desc: "Markup language for creating web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    desc: "Style your web pages with colors, layouts, and animations.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    desc: "Programming language to make web pages interactive.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    desc: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Angular",
    img: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    desc: "Platform for building mobile and desktop web apps.",
    link: "https://angular.io/docs",
  },
  {
    name: "Vue.js",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    desc: "Progressive JavaScript framework for UI.",
    link: "https://vuejs.org/guide/introduction.html",
  },
  {
    name: "Node.js",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    desc: "JavaScript runtime for server-side applications.",
    link: "https://nodejs.org/en/docs/",
  },
  {
    name: "Express.js",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    desc: "Web framework for Node.js applications.",
    link: "https://expressjs.com/en/starter/installing.html",
  },
  {
    name: "MongoDB",
    img: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    desc: "NoSQL database for modern web apps.",
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "MySQL",
    img: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    desc: "Relational database for storing structured data.",
    link: "https://dev.mysql.com/doc/",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    desc: "Advanced open-source relational database.",
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "PHP",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    desc: "Server-side scripting language for web development.",
    link: "https://www.php.net/docs.php",
  },
  {
    name: "Python",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    desc: "Popular programming language for web and data.",
    link: "https://www.python.org/doc/",
  },
  {
    name: "Django",
    img: "https://cdn-icons-png.flaticon.com/512/919/919837.png",
    desc: "Python framework for web development.",
    link: "https://docs.djangoproject.com/en/stable/",
  },
  {
    name: "Flask",
    img: "https://cdn-icons-png.flaticon.com/512/919/919837.png",
    desc: "Lightweight Python web framework.",
    link: "https://flask.palletsprojects.com/en/2.3.x/",
  },
  {
    name: "Java",
    img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    desc: "Object-oriented programming language for multiple platforms.",
    link: "https://docs.oracle.com/en/java/",
  },
  {
    name: "Spring Boot",
    img: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    desc: "Java framework for building microservices.",
    link: "https://spring.io/projects/spring-boot",
  },
  {
    name: "C",
    img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    desc: "Procedural programming language for system programming.",
    link: "https://devdocs.io/c/",
  },
  {
    name: "C++",
    img: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    desc: "Object-oriented programming language for performance.",
    link: "https://devdocs.io/cpp/",
  },
  {
    name: "C#",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968349.png",
    desc: "Microsoft language for web and desktop apps.",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Git",
    img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    desc: "Version control system for tracking code changes.",
    link: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
    desc: "Platform for hosting and reviewing code.",
    link: "https://docs.github.com/en",
  },
  {
    name: "Docker",
    img: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    desc: "Container platform to package applications.",
    link: "https://docs.docker.com/",
  },
  {
    name: "Kubernetes",
    img: "https://cdn-icons-png.flaticon.com/512/919/919846.png",
    desc: "Container orchestration system for deployment.",
    link: "https://kubernetes.io/docs/home/",
  },
  {
    name: "Linux",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    desc: "Open-source operating system for developers.",
    link: "https://www.kernel.org/doc/html/latest/",
  },
  {
    name: "TypeScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    desc: "Typed superset of JavaScript for safer code.",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "TailwindCSS",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968673.png",
    desc: "Utility-first CSS framework for rapid UI design.",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "Sass",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    desc: "CSS preprocessor for more powerful styling.",
    link: "https://sass-lang.com/documentation",
  },
  {
    name: "Firebase",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968674.png",
    desc: "Backend platform for web and mobile apps.",
    link: "https://firebase.google.com/docs",
  },
  {
    name: "REST API",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    desc: "Architectural style for building web services.",
    link: "https://restfulapi.net/",
  },
  {
    name: "GraphQL",
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    desc: "Query language for APIs.",
    link: "https://graphql.org/learn/",
  },
  {
    name: "Next.js",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968364.png",
    desc: "React framework for server-side rendering.",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Redux",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968380.png",
    desc: "State management library for React.",
    link: "https://redux.js.org/introduction/getting-started",
  },
  {
    name: "AWS",
    img: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    desc: "Cloud platform for scalable applications.",
    link: "https://aws.amazon.com/documentation/",
  },
  {
    name: "Azure",
    img: "https://cdn-icons-png.flaticon.com/512/919/919835.png",
    desc: "Microsoft cloud platform.",
    link: "https://learn.microsoft.com/en-us/azure/",
  },
  {
    name: "Jenkins",
    img: "https://cdn-icons-png.flaticon.com/512/919/919849.png",
    desc: "Automation server for CI/CD pipelines.",
    link: "https://www.jenkins.io/doc/",
  },
  {
    name: "Selenium",
    img: "https://cdn-icons-png.flaticon.com/512/919/919847.png",
    desc: "Automated testing framework for web applications.",
    link: "https://www.selenium.dev/documentation/",
  },
  {
    name: "Jest",
    img: "https://cdn-icons-png.flaticon.com/512/919/919845.png",
    desc: "JavaScript testing framework.",
    link: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "Mocha",
    img: "https://cdn-icons-png.flaticon.com/512/919/919845.png",
    desc: "JavaScript testing framework for Node.js.",
    link: "https://mochajs.org/#getting-started",
  },
];

const DevelopSkills = () => {
  return (
    <div className="skills-container">
      <h1>Upgrade Skills</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card"
          >
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </a>
        ))}
      </div>

      {/* Inline CSS */}
      <style>{`
        .skills-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          color: inherit;
          background: #f9f9f9;
        }

        .skill-card img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .skill-card h3 {
          margin: 5px 0;
        }

        .skill-card p {
          font-size: 0.9rem;
          color: #555;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default DevelopSkills;
