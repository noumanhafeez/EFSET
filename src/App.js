import React from "react";
const defaultData = {
  name: "Usman Hafeez",
  score: 75,
  cefr: "C2 Proficient",
  date: "17 Dec 2022",
  reading: {
    score: 73,
    cefr: "C2 Proficient",
    summary:
      "You can read virtually any kind of text (factual, literary, technical) and accurately recognize and categorize style and tone. You can understand complex technical writing on unfamiliar subjects on a wide range of topics.",
    bullets: [
      "Can read with ease virtually all forms of written language, including abstract, structurally or linguistically complex texts such as manuals, specialized articles and literary works",
      "Can understand a wide range of long and complex texts, appreciating subtle distinctions of style, and implicit meaning",
      "Can understand in detail complex texts likely to be encountered in social, professional or academic life, identifying finer points of detail including attitudes and implied opinions",
    ],
  },
  listening: {
    score: 76,
    cefr: "C2 Proficient",
    summary:
      "You are comfortable in all situations, live or broadcast, that require full comprehension.",
    bullets: [
      "Understands with ease any kind of spoken language.",
      "Understands lectures and presentations even with idiomatic usage.",
      "Follows complex interactions in group discussions and debates.",
    ],
  },
};

export default function Certificate({ data = defaultData }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "39px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "0px 0px",
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Logo Container */}
<div style={{ textAlign: "center", marginBottom: "10px", marginTop:50 }}>
  <img
    src="https://cert.efset.org/_next/static/media/logo.06bf8183.svg"
    alt="logo"
    style={{ width: "108px", height: "33px" }}
  />
</div>

{/* Title Container */}
<div style={{ textAlign: "center", marginBottom: "30px" }}>
  <div
    style={{
      background: "#6b46c1",
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: "6px",
    }}
  >
    <h1 style={{ fontSize: "13px", fontWeight: "bold", color: "white" }}>
      English Certificate
    </h1>
  </div>
</div>


        {/* Name with lines */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px", // space between line and text
  }}
>
  <span style={{ width:"40px", opacity:0.5, height: "1px", backgroundColor: "#000" }}></span>
  <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>{data.name}</p>
  <span style={{ width:'40px', height: "1px", opacity:0.5, backgroundColor: "#000" }}></span>
</div>
        {/* Badge with overlay */}
        <div
          style={{
            position: "relative",
            width: "353px",
            height: "353px",
            margin: "0 auto 40px",
          }}
        >
          <img
            src="https://cdn.efset.org/efset-widget/img/v2/social-media/certificate/cefr-badge-C2.svg"
            alt="badge"
            style={{ width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src="https://a.storyblok.com/f/246158/103x24/eb1cf2418f/efset-logo_white.svg"
              alt="white logo"
              style={{ marginBottom: "12px", width: "110px" }}
            />
            <p style={{ fontSize: "40px", fontWeight: "bold", margin: "5px 0" }}>
              {data.score}/100
            </p>
            <p style={{ fontSize: "20px", margin: 0 }}>{data.cefr}</p>
          </div>
        </div>

{/* Verification & Skills Section */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "90px", // space between the two items
    marginBottom: "20px",
  }}
>
  {/* First Circle - Certificate Verified */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#0a1f42ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ color: "white", fontSize: "10px", fontWeight: "semi-bold" }}>✓</span>
    </div>
    <p style={{ margin: 0, fontSize: "14px",  }}>
      Reading
    </p>
  </div>

  {/* Second Circle - Listening */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#0a1f42ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ color: "white", fontSize: "10px", fontWeight: "semi-bold" }}>✓</span>
    </div>
    <p style={{ margin: 0, fontSize: "14px",  color: "black", }}>
      Listening
    </p>
  </div>
</div>

{/* Awarded Date */}
<div style={{ marginBottom: "40px", textAlign: "center" }}>
  <p style={{ fontSize: "14px", fontWeight: "bold", }}>Awarded on:</p>
  <p style={{ fontSize: "18px", marginTop: "6px" }}>{data.date}</p>
</div>


        {/* --- Understanding the results --- */}
        <div
  style={{
    background: "#e0f2fe",
    //borderRadius: "0px",
    padding: "40px 20px",
    textAlign: "center",
    marginBottom: "30px",
    clipPath: "path('M0,0 H40% Q50%,30 60%,0 H100% V100% H0 Z')",
    minHeight: "1200px", // ⬅️ increase height
  }}
>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>
            Understanding the results
          </h2>

          <table
            style={{
              borderCollapse: "separate",
              borderSpacing: "10px",
              margin: "0 auto 20px",
              width: "100%",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>EF SET</td>
                {["0-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-100"].map(
                  (range) => (
                    <td
                      key={range}
                      style={{
                        background: range === "71-100" ? "#6b46c1" : "#fff",
                        color: range === "71-100" ? "white" : "#000",
                        borderRadius: "6px",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {range}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>CEFR</td>
                {[
                  { level: "A0", label: "Novice" },
                  { level: "A1", label: "Beginner" },
                  { level: "A2", label: "Elementary" },
                  { level: "B1", label: "Intermediate" },
                  { level: "B2", label: "Upper Intermediate" },
                  { level: "C1", label: "Advanced" },
                  { level: "C2", label: "Proficient" },
                ].map(({ level, label }) => (
                  <td
                    key={level}
                    style={{
                      background: level === "C2" ? "#6b46c1" : "#fff",
                      color: level === "C2" ? "white" : "#000",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>{level}</div>
                    <small>{label}</small>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <p
            style={{
              fontSize: "14px",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#333",
            }}
          >
            The achieved level is <strong>{data.score}/100</strong> on the EF SET score
            scale and <strong>{data.cefr}</strong> according to the Common European
            Framework of Reference (CEFR). The EF SET score is calculated as an average of the skill section scores.
          </p>
          {/* New White Section */}
<div
  style={{
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    textAlign: "left",
    height:"400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)", // optional
  }}
>
{/* Circle + English/Reading/CEFR Block */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
    {/* Circle */}
    <svg width="90" height="90" style={{ marginRight: "20px" }}>
  {/* Background circle (light gray) */}
  <circle
    cx="45"
    cy="45"
    r="41"
    stroke="#eee"
    strokeWidth="4"
    fill="transparent"
  />
  
  {/* Progress circle (purple, 73%) */}
  <circle
    cx="45"
    cy="45"
    r="41"
    stroke="#6b46c1"
    strokeWidth="4"
    fill="transparent"
    strokeDasharray={2 * Math.PI * 41}  // full circumference
    strokeDashoffset={(1 - 0.73) * 2 * Math.PI * 41} // show 73% only
    strokeLinecap="round"
    transform="rotate(-90 45 45)" // start from top
    style={{ transition: "stroke-dashoffset 0.5s" }}
  />

  {/* Center text */}
  <text
    x="50%"
    y="54%"
    textAnchor="middle"
    fontSize="22"
    fontWeight="bold"
    fill="#6b46c1"
  >
    73
  </text>
</svg>

    {/* English / Reading / CEFR Block */}
    <div>
      <p style={{ fontWeight: "300", margin: 0 }}>English</p>
      <h3 style={{ fontSize: "20px", fontWeight: "bold", margin: "5px 0" }}>
        Reading
      </h3>
      <p style={{ margin: 0 }}>
        <strong>C2</strong>{" "}
        <span style={{ fontWeight: "300" }}>Proficient</span>
      </p>
    </div>
  </div>
  {/* Paragraph */}
  <p
    style={{
      marginTop:"40px",
      fontSize: "14px",
      color: "#333",
      lineHeight: "1.6",
      marginBottom: "25px",
    }}
  >
    You can read virtually any kind of text (factual, literary, technical) and
    accurately recognize and categorize style and tone. You can understand
    complex technical writing on unfamiliar subjects on a wide range of topics.
  </p>

  {/* Bullet List */}
  <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.6"  }}>
    <li style={{ fontSize: "14px", marginBottom: "8px" }}>
      Can read with ease virtually all forms of written language, including
      abstract, structurally or linguistically complex texts such as manuals,
      specialized articles and literary works
    </li>
    <li style={{ fontSize: "14px", marginBottom: "8px" }}>
      Can understand a wide range of long and complex texts, appreciating subtle
      distinctions of style, and implicit meaning
    </li>
    <li style={{ fontSize: "14px", marginBottom: "8px" }}>
      Can understand in detail complex texts likely to be encountered in social,
      professional or academic life, identifying finer points of detail
      including attitudes and implied opinions
    </li>
  </ul>
</div>

{/* New White Section */}
<div
  style={{
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    textAlign: "left",
    height:"400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)", // optional
  }}
>
{/* Circle + English/Reading/CEFR Block */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
    {/* Circle */}
    <svg width="90" height="90" style={{ marginRight: "20px" }}>
  {/* Background circle (light gray) */}
  <circle
    cx="45"
    cy="45"
    r="41"
    stroke="#eee"
    strokeWidth="4"
    fill="transparent"
  />
  
  {/* Progress circle (purple, 73%) */}
  <circle
  cx="45"
  cy="45"
  r="41"
  stroke="#6b46c1"
  strokeWidth="4"
  fill="transparent"
  strokeDasharray={2 * Math.PI * 41} // full circumference
  strokeDashoffset={(1 - 0.76) * 2 * Math.PI * 41} // 76% filled
  strokeLinecap="round"
  transform="rotate(-90 45 45)" // start from top
  style={{ transition: "stroke-dashoffset 0.5s" }}
/>

  {/* Center text */}
  <text
    x="50%"
    y="54%"
    textAnchor="middle"
    fontSize="22"
    fontWeight="bold"
    fill="#6b46c1"
  >
    76
  </text>
</svg>

    {/* English / Reading / CEFR Block */}
    <div>
      <p style={{ fontWeight: "300", margin: 0 }}>English</p>
      <h3 style={{ fontSize: "20px", fontWeight: "bold", margin: "5px 0" }}>
        Listening
      </h3>
      <p style={{ margin: 0 }}>
        <strong>C2</strong>{" "}
        <span style={{ fontWeight: "300" }}>Proficient</span>
      </p>
    </div>
  </div>
  {/* Paragraph */}
  <p
    style={{
      marginTop:"40px",
      fontSize: "14px",
      color: "#333",
      lineHeight: "1.6",
      marginBottom: "25px",
    }}
  >
    You are comfortable in all situations, live or broadcast, that require full comprehension; you are almost never confused or searching for the meaning of words and phrases. You understand nuances of expression and tone, humor and emphasis in all live theatrical presentations, films or broadcast presentations.
  </p>

  {/* Bullet List */}
  <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.6"  }}>
    <li style={{ fontSize: "14px", marginBottom: "8px" }}>
      Can understand with ease any kind of spoken language, live or broadcast, even when delivered at fast native speed, provided with time to get familiar with any regional or other accent
    </li>
    <li style={{ fontSize: "14px", marginBottom: "8px" }}>
      Can understand lectures and presentations with a high degree of colloquialism, regional usage and unfamiliar terminology
    </li>
    <li style={{ fontSize: "14px", marginBottom: "8px" }}>
      Can follow complex interactions in group discussions and debates, even on abstract, complex and unfamiliar topics
    </li>
  </ul>
</div>
        </div>
        {/* New White Section for About EF SET */}
<div
  style={{
    background: "#fff",
    borderRadius: "10px",
    padding: "30px",
    marginTop: "20px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  }}
>
  {/* About EF SET Heading */}
<h4
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    padding: "20px 0",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  }}
>
  <span style={{  height: "1px", backgroundColor: "#000", width:'35px' }}></span>
  <span>About EF SET</span>
  <span style={{ width:"35px", height: "1px", backgroundColor: "#000" }}></span>
</h4>
  {/* About EF SET Text */}
  <div style={{ maxWidth: "672px", margin: "0 auto" }}>
    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
      The EF SET (
      <a
        href="https://www.efset.org"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "underline", color: "#6b46c1" }}
      >
        www.efset.org
      </a>
      ) is a suite of online certifying language exams for students and
      professionals. As part of EF Education First, we draw upon a 50-year
      legacy of academic excellence, having helped more than 20 million people
      across the world to successfully learn a language.
    </p>
  </div>

  {/* Buttons Section */}
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      marginTop: "30px",
    }}
  >
    {/* Download PDF Button */}
    <a
      href="/my-certificate.pdf"
      target="_blank"
      rel="noreferrer"
      style={{
        minWidth: "280px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #333",
        borderRadius: "9999px",
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
      }}
    >
      Download PDF version
    </a>

    {/* Add to LinkedIn Button */}
    <a
      href="https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=EF%20SET%20English%20Certificate%2075%2F100%20(C2%20Proficient)&organizationId=13425355&issueYear=2020&issueMonth=12&certUrl=https%3A%2F%2Fcert.efset.org%2F2idfsh"
      target="_blank"
      rel="noreferrer"
      style={{
        minWidth: "280px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #333",
        borderRadius: "9999px",
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
        gap: "10px",
      }}
    >
      {/* LinkedIn Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="#0A66C2"
        viewBox="0 0 19 19"
      >
        <path d="M4.88528 2.29843C4.88528 3.35533 4.1046 4.21209 2.8211 4.21209C1.61369 4.21044 0.833008 3.35533 0.833008 2.29843C0.833008 1.24153 1.6385 0.384766 2.87237 0.384766C4.10625 0.384766 4.86047 1.21507 4.88528 2.29843ZM0.933901 18.0295V5.72053H4.75957V18.0295H0.933901Z"></path>
        <path d="M7.04864 9.64712C7.04864 8.11222 6.99902 6.82872 6.94775 5.72055H10.2706L10.4476 7.43243H10.5237C11.0265 6.62694 12.2604 5.44434 14.3245 5.44434C16.8419 5.44434 18.7291 7.1314 18.7291 10.7553V18.0295H14.9034V11.2085C14.9034 9.62231 14.3493 8.5406 12.965 8.5406C11.9081 8.5406 11.2795 9.27001 11.0017 9.97461C10.9008 10.226 10.876 10.5783 10.876 10.9306V18.0279H7.05029V9.64546L7.04864 9.64712Z"></path>
      </svg>
      Add to LinkedIn
    </a>
  </div>
  
</div>
      </div>
    </div>
  );
}
