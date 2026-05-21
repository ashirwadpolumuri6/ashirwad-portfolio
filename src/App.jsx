import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const skills = [
    "Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas", "FastAPI", "React",
    "BigQuery", "GCP", "AWS", "Azure", "ETL/ELT", "Snowflake", "Databricks",
    "Data Warehousing", "Machine Learning", "GitHub", "Docker", "REST APIs"
  ];

  const projects = [
    {
      title: "AI-Powered Financial Intelligence Platform",
      type: "Featured Cloud + Data Engineering Project",
      desc: "Cloud-native financial survival platform for international students to track spending, detect hidden subscriptions, predict overdraft risk, estimate credit score impact, and generate AI budget recommendations.",
      stack: "Python, FastAPI, SQL, GCP Pub/Sub, BigQuery, Vertex AI, Power BI, React",
      impact: "Designed real-time pipeline architecture with AI risk scoring, anomaly detection, and analytics dashboards."
    },
    {
      title: "Breast Cancer Detection Using Machine Learning",
      type: "Published Research Project",
      desc: "Built a machine learning classification approach for breast cancer detection using data preprocessing, model training, and evaluation.",
      stack: "Python, Machine Learning, Data Preprocessing, Classification Models",
      impact: "Published in IJSREM, Volume 08, Issue 04, April 2024."
    },
    {
      title: "Cloud Data Analytics Dashboard",
      type: "Analytics Engineering Project",
      desc: "Created dashboards to analyze KPIs, spending trends, operational performance, and business decision-making metrics from structured datasets.",
      stack: "Power BI, SQL, Excel, Data Modeling, DAX",
      impact: "Converted raw data into interactive reports and reusable analytical datasets."
    }
  ];

  const certs = [
    "AWS Academy Graduate - Cloud Architecting",
    "AWS Academy Graduate - Cloud Foundations",
    "NPTEL Cloud Computing - Elite, 72%",
    "Robotic Process Automation Virtual Internship - AICTE EduSkills / Blue Prism"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              Data Engineer | Data Analyst | Cloud Enthusiast
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Ashirwad Polumuri</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Master&apos;s student in Computer and Information Sciences at Florida Atlantic University, focused on building cloud-native data platforms, analytics dashboards, and AI-powered business solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>📍 Boca Raton, Florida</span>
              <span>🎓 Florida Atlantic University</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:5kr8962df8@privaterelay.appleid.com" className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white hover:bg-blue-600">✉️ Contact Me</a>
              <a href="https://github.com/ashirwadpolumuri1-creator" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-600 bg-slate-900 px-6 py-4 font-semibold text-white hover:bg-slate-800">GitHub</a>
              <a href="https://www.linkedin.com/in/ashirwad-polumuri/" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-600 bg-slate-900 px-6 py-4 font-semibold text-white hover:bg-slate-800">LinkedIn</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold">Core Focus</h2>
              <div className="mt-6 grid gap-4">
                <Focus icon="🗄️" title="Data Engineering" text="ETL/ELT pipelines, SQL, data warehousing, BigQuery, Snowflake" />
                <Focus icon="📊" title="Data Analytics" text="Power BI dashboards, KPI reporting, business insights, DAX" />
                <Focus icon="☁️" title="Cloud Platforms" text="GCP, AWS, Azure, cloud architecture, scalable services" />
                <Focus icon="💻" title="Software Engineering" text="Python, FastAPI, React, APIs, GitHub, deployment" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Featured Projects" subtitle="Resume-ready projects showing cloud, data, analytics, and software engineering skills." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="h-full rounded-3xl border border-slate-700 bg-slate-900 p-7 shadow-xl">
                  <p className="text-sm font-semibold text-cyan-300">{p.type}</p>
                  <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{p.desc}</p>
                  <div className="mt-5 rounded-2xl bg-slate-800 p-4 text-sm text-slate-300">
                    <b className="text-white">Stack:</b> {p.stack}
                  </div>
                  <p className="mt-4 text-sm text-emerald-300">{p.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Technical Skills" subtitle="Tools and technologies aligned with Data Engineer, Data Analyst, GCP Cloud, and Software Engineer roles." />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <h2 className="text-2xl font-bold">Experience Direction</h2>
            </div>
            <p className="leading-8 text-slate-300">
              Building practical experience through cloud-native projects, data pipelines, analytics dashboards, and AI-powered applications. Seeking entry-level opportunities in Data Engineering, Data Analytics, Analytics Engineering, Cloud Engineering, and Software Engineering.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              {certs.map((c) => (
                <li key={c} className="rounded-2xl bg-slate-800 p-3">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-10 text-center text-slate-400">
        <p>Designed and built by Ashirwad Polumuri</p>
        <p className="mt-2 text-sm">Open to Data Engineer, Data Analyst, Cloud, and Software Engineering opportunities.</p>
      </footer>
    </div>
  );
}

function Focus({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-slate-800 p-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p>
    </div>
  );
}
