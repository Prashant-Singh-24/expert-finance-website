import React from "react";

import anandImg from "../assets/anand.png";

// ✅ CHANGE THESE 3 IMPORTS TO MATCH YOUR EXACT FILE NAMES IN src/assets
import gurjotImg from "../assets/GS.jpg"; // <-- example (replace)
import ashuImg from "../assets/AM.jpg";   // <-- example (replace)
import sonuImg from "../assets/SS.jpeg";   // <-- example (replace)

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
    linkedin: "https://www.linkedin.com/company/expertfinancenz/posts/?feedView=all",
    instagram: "https://www.instagram.com/financesorted4u/",
    facebook: "https://www.facebook.com/financesorted4u",
  };

  return (
    <section className="section team-owner-section">
      <div className="section-header">
        <span className="section-kicker">Our Team</span>
        <h2 className="section-title">Meet the people behind Expert Finance</h2>
        <p className="section-subtitle">
          Professional advisers and support staff helping you reach your financial goals.
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
          "I love assisting customers with their first home purchases and providing guidance on saving interest. With over a decade of experience in Mortgages, Finances, Banking, home Loans, Refinance, and more, I have gained valuable insights into clients’ needs. My expertise in these areas allows me to steer clients in the right direction and provide them with the advice they require.",
          "Furthermore, I hold a Master’s degree in Finance, Marketing, and Taxation along with Level 5 in Financial advice, which enhances my knowledge and understanding of the intricacies involved in these fields. This educational background enables me to provide comprehensive and informed guidance to individuals seeking assistance.",
          "My ultimate goal is to help as many people as possible, and I have developed a keen interest in offering advice and consultations. By combining my experience, educational background, and passion for assisting others, I strive to provide top-notch service to my clients. Whether it’s helping them secure their first home or offering strategies to save on interest, I am dedicated to helping individuals achieve their financial goals.",
          "If you have any specific questions or require further assistance, feel free to ask. I’m here to help!",
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
          "I’m Gurjot Singh (FSP1009762), a financial adviser in Auckland who understands the peace of mind that comes from feeling truly protected—because, like you, I juggle family commitments, work pressures, and planning for the future.",
          "When I’m not helping clients navigate life, trauma, health, and income protection, you’ll find me playing cricket with friends on the weekends, strumming my Mandolin at home, or volunteering within our community to give back to this beautiful world.",
          "I’ve walked in your shoes—balancing budgets, dreaming of milestones, and worrying about what-ifs—so I’m committed to offering down-to-earth advice that’s as practical as it is personalized.",
          "Protecting your today and securing tomorrow is the aim, and together we’ll build a plan that lets you sleep easy, knowing your loved ones are taken care of.",
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
          "Ashu is a certified Mortgage Adviser with a specialization in Residential Property Lending. Holding the New Zealand Certificate in Financial Services (Level 5) and possessing eight years of experience in the financial sector, he delivers customized mortgage solutions to ensure a seamless and informed homeownership experience for his clients.",
          "Outside of his professional commitments, Ashu maintains an active lifestyle through regular sporting activities and prioritizes overall well-being. As a family-oriented individual, he understands the unique needs of families and is dedicated to developing practical, tailored solutions that resonate with their specific circumstances.",
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
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
          "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
          "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        ]}
        {...commonSocial}
      />
    </section>
  );
}
