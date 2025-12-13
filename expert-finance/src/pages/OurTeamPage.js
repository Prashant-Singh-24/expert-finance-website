import React from "react";

import anandImg from "../assets/anand.png";

// ✅ CHANGE THESE 3 IMPORTS TO MATCH YOUR EXACT FILE NAMES IN src/assets
import gurjotImg from "../assets/GS.jpg"; // <-- example (replace)
import ashuImg from "../assets/AM.jpg"; // <-- example (replace)
import sonuImg from "../assets/SS.jpeg"; // <-- example (replace)

import linkedInIcon from "../assets/linkedin.jpg";
import instagramIcon from "../assets/instagram.jpg";
import facebookIcon from "../assets/facebook.jpg";

/** Reusable block (same layout + same CSS classes you already use) */
function TeamMemberSection({
  image,
  name,
  role,
  phone,
  email,
  bioParagraphs,
  linkedin,
  instagram,
  facebook,
}) {
  return (
    <div className="team-member-block">
      <div className="team-owner-3col">
        {/* 1) LEFT: IMAGE CARD */}
        <div className="team-owner-image-card">
          <img className="team-owner-img" src={image} alt={name} />
        </div>

        {/* 2) MIDDLE: CONTACT DETAILS */}
        <div className="team-owner-contact">
          <h3 className="team-name">{name}</h3>
          <div className="team-role">{role}</div>

          <div className="team-contact-list">
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="team-contact-link"
              >
                📞 <span>{phone}</span>
              </a>
            )}

            {email && (
              <a href={`mailto:${email}`} className="team-contact-link">
                ✉️ <span>{email}</span>
              </a>
            )}
          </div>

          <div className="team-social-row">
            {linkedin && (
              <a
                className="team-social-btn"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInIcon} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            )}

            {instagram && (
              <a
                className="team-social-btn"
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
                <span>Instagram</span>
              </a>
            )}

            {facebook && (
              <a
                className="team-social-btn"
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
                <span>Facebook</span>
              </a>
            )}
          </div>
        </div>

        {/* 3) RIGHT: BIO CONTENT */}
        <div className="team-owner-bio">
          {bioParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OurTeamPage() {
  const commonSocial = {
    linkedin:
      "https://www.linkedin.com/company/expertfinancenz/posts/?feedView=all",
    instagram: "https://www.instagram.com/financesorted4u/",
    facebook: "https://www.facebook.com/financesorted4u",
  };

  return (
    <section className="section team-owner-section">
      <div className="section-header">
        <span className="section-kicker">Our Team</span>
        <h2 className="section-title">Meet the people behind Expert Finance</h2>
        <p className="section-subtitle">
          Professional advisers and support staff helping you reach your
          financial goals.
        </p>
      </div>

      {/* 1) Anand Kumar */}
      <TeamMemberSection
        image={anandImg}
        name="Anand Kumar"
        role="Financial Adviser"
        phone="+64 22 185 2640"
        email="anand@expertfinance.co.nz"
        bioParagraphs={[
          "Anand is a certified Mortgage Adviser with a specialization in Residential Property Lending. Holding over a decade of experience in the financial sector, including mortgages, banking, home loans, and refinance, his extensive background allows him to provide valuable insights and customized solutions. Anand particularly excels in assisting customers with their first home purchases and offering clear guidance on saving interest.",
          "Anand holds the New Zealand Certificate in Financial Services (Level 5), which is further enhanced by a Master's degree in Finance, Marketing, and Taxation. This robust educational background, combined with his practical experience, equips him to deliver comprehensive and informed guidance, ensuring a seamless and informed homeownership experience for his clients. His expertise enables him to steer clients in the right direction and provide the precise advice they require.",
          "Anand's ultimate goal is to help as many people as possible achieve their financial and homeownership aspirations. He is passionate about offering advice and consultations, combining his experience, educational background, and dedication to assisting others to provide top-notch service. Whether it is helping clients secure their first home or offering strategies to save on interest, Anand is dedicated to helping individuals achieve their financial goals.",
        ]}
        {...commonSocial}
      />

      {/* 2) Gurjot Singh */}
      <TeamMemberSection
        image={gurjotImg}
        name="Gurjot Singh"
        role="Financial Adviser"
        phone="+64 21 277 2642"
        email="Gurjot@expertfinance.co.nz"
        bioParagraphs={[
          "Gurjot Singh is a certified Financial Adviser based in Auckland, specializing in comprehensive Risk Protection. He deeply understands the value of financial peace of mind, balancing his own family commitments, work pressures, and future planning. Gurjot's core focus is helping clients navigate crucial areas including Life, Trauma, Health, and Income Protection.",
          "Gurjot's approach is characterized by down-to-earth advice that is both practical and personalized. Drawing on his own experiences with budgeting and planning milestones, he is committed to offering solutions that genuinely resonate with his clients' real-life circumstances. His ultimate aim is to protect clients' present stability while securing their future, ensuring they can sleep easily knowing their loved ones are taken care of.",
          "When not helping clients build robust protection plans, Gurjot maintains an active role in his community. He can often be found playing cricket with friends on the weekends, enjoying music by strumming his Mandolin, or volunteering his time to give back to the community.",
        ]}
        {...commonSocial}
      />

      {/* 3) Ashu Maan */}
      <TeamMemberSection
        image={ashuImg}
        name="Ashu Maan"
        role="Financial Adviser"
        phone="+64 21 288 2641"
        email="ashu@expertfinance.co.nz"
        bioParagraphs={[
          "Ashu is a certified Mortgage Adviser with a specialization in Residential Property Lending, holding over a decade of experience in the financial sector, including mortgages, banking, home loans, and refinance. His extensive background allows him to provide valuable insights and customized solutions, particularly excelling in assisting customers with their first home purchases and offering guidance on saving interest.",
          "Ashu holds the New Zealand Certificate in Financial Services (Level 5), which is further enhanced by a Master's degree in Finance, Marketing, and Taxation. This robust educational background, combined with his practical experience, equips him to deliver comprehensive and informed guidance, ensuring a seamless and informed homeownership experience for his clients. He is dedicated to developing practical, tailored solutions that resonate with clients' specific circumstances.",
          "Outside of his professional commitments, Ashu maintains an active lifestyle through regular sporting activities and prioritizes overall well-being. As a family-oriented individual, he understands the unique needs of families and is committed to his ultimate goal of helping as many people as possible achieve their financial goals.",
        ]}
        {...commonSocial}
      />

      {/* 4) Sonu Saini */}
      <TeamMemberSection
        image={sonuImg}
        name="Sonu Saini"
        role="Business Development Manager"
        phone="+64 021 175 1425"
        email="sonu@@expertfinance.co.nz"
        bioParagraphs={[
          "Sonu Saini serves as the Business Development Manager (BDM) at Expert Finance, where he plays a pivotal role in driving mortgage business growth and expanding the firm’s market presence. His primary focus is on generating high-quality mortgage opportunities and building strong, long-term partnerships that support both the business and its clients. Through his efforts, Sonu helps ensure a consistent flow of business that enables financial advisers to deliver exceptional outcomes.",
          "With a strong background in strategic growth and relationship management, Sonu works closely with key partners such as real estate agents, accountants, and settlement agents. He is committed to fostering mutually beneficial relationships by promoting Expert Finance’s comprehensive mortgage solutions and its client-first approach. His ability to connect partners with the right financial expertise contributes directly to increased business volume and sustained collaboration.",
          "Professionally, Sonu is dedicated to aligning Expert Finance’s resources with the evolving needs of its partners and the wider community. By staying attuned to market trends and leveraging the knowledge of the firm’s certified advisers, he ensures clients are guided through smooth and well-informed homeownership journeys. Sonu strives to be a reliable point of contact and a value-driven partner, supporting others in growing their businesses through trusted collaboration and consistent service delivery.",
        ]}
        {...commonSocial}
      />
    </section>
  );
}
