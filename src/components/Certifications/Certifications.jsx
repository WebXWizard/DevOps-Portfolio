import React, { useState } from "react";
import DigipodiumLogo from "../../assets/company_logo/Digipod.png";
import googleCert from "../../assets/certificates/google-1.png";
import digipodiumReactCert from "../../assets/certificates/digipodium-react-1.png";
import digipodiumDiyCert from "../../assets/certificates/digipodium-diy-1.png";
import softproCert from "../../assets/certificates/softpro-1.png";

const certifications = [
  {
    id: 0,
    title: "Google My Business",
    issuer: "Google",
    date: "June 3, 2025",
    credentialId: "389606381",
    description:
      "Demonstrated proficiency in using Google My Business to create and manage listings that stand out when customers search online.",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    logoClass: "h-6 object-contain",
    image: googleCert,
    tags: ["Google", "Digital Marketing", "SEO", "Business Listings"],
    color: "from-blue-500 to-green-500",
  },
  {
    id: 1,
    title: "React Library Directory — Project Completion",
    issuer: "Digipodium",
    date: "FEB 2025 – MAY 2025",
    credentialId: "c87a6719-e226-56f4-807d-41b9ff454ca9",
    description:
      "Successfully completed the React Library Directory project with exceptional dedication and proficiency, showcasing expertise in MERN Stack Development.",
    logo: DigipodiumLogo,
    logoClass: "h-8 object-contain",
    image: digipodiumReactCert,
    tags: ["MERN Stack", "React JS", "MongoDB", "Node.js", "Express"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "DIY Innovators — Internship Completion",
    issuer: "Digipodium",
    date: "AUG 2024 – OCT 2024",
    credentialId: "c228e78b-dd2c-5512-b2f4-81b7e26fb88f",
    description:
      "Successfully completed the DIY Innovators internship project with exceptional dedication, demonstrating expertise in full-stack MERN development including e-commerce features.",
    logo: DigipodiumLogo,
    logoClass: "h-8 object-contain",
    image: digipodiumDiyCert,
    tags: ["MERN Stack", "React JS", "E-Commerce", "REST APIs", "MongoDB"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Roadmap to Become Full Stack Developer",
    issuer: "SoftPro India",
    date: "November 19, 2024",
    credentialId: "SPI/24872",
    description:
      "Completed a structured full-stack development roadmap program at Seth Vishambhar Nath Institute of Engineering & Technology, Barabanki, covering modern web technologies and best practices.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    logoClass: "h-8 object-contain",
    image: softproCert,
    tags: ["Full Stack", "Web Development", "JavaScript", "React", "Node.js"],
    color: "from-cyan-500 to-blue-500",
  },
];

const Certifications = () => {
  const [modalCert, setModalCert] = useState(null);

  return (
    <section id="certifications" className="py-16 px-[6vw] md:px-[4vw] lg:px-[8vw] font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-40 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Credentials and project completions that validate my skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-[#0d081f] border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 group">
            <div className={`h-1 w-full bg-gradient-to-r ${cert.color}`} />

            <div className="cursor-pointer" onClick={() => setModalCert(cert)}>
              <img src={cert.image} alt={cert.title} className="w-full h-44 object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-purple-400 transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <img src={cert.logo} alt={cert.issuer} className={cert.logoClass} onError={(e) => { e.target.style.display = "none"; }} />
                    <span className="text-purple-400 text-sm font-semibold">{cert.issuer}</span>
                  </div>
                </div>
                <span className="text-gray-400 text-xs shrink-0">{cert.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <button onClick={() => setModalCert(cert)} className="mt-4 w-full py-2 rounded-lg border border-gray-600 text-gray-300 text-sm hover:border-purple-500 hover:text-purple-400 transition-all">
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-80" onClick={() => setModalCert(null)}>
          <div className="relative bg-[#0d081f] rounded-xl border border-gray-700 shadow-2xl flex flex-col" style={{ maxWidth: "560px", width: "100%", maxHeight: "85vh" }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 shrink-0">
              <div>
                <h3 className="text-white font-bold text-sm leading-snug">{modalCert.title}</h3>
                <p className="text-purple-400 text-xs">{modalCert.issuer} · {modalCert.date}</p>
              </div>
              <button onClick={() => setModalCert(null)} className="text-gray-400 hover:text-white text-xl leading-none ml-3 shrink-0">&times;</button>
            </div>

            <div className="overflow-auto p-3">
              <img src={modalCert.image} alt={modalCert.title} className="w-full rounded-lg border border-gray-700" />
            </div>

            <div className="px-4 pb-3 shrink-0">
              <p className="text-gray-500 text-xs">
                Credential ID: <span className="text-gray-400 font-mono">{modalCert.credentialId}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;