import React from "react";

import ANZ from "../assets/ANZ.png";
import ASB from "../assets/ASB.png";
import BNZ from "../assets/BNZ.png";
import HEARTLAND from "../assets/HEARTLAND.png";
import SBS from "../assets/SBS.png";
import THE_COOPERATIVE_BANK from "../assets/THE-COOPERATIVE-BANK.png";
import WESTPAC from "../assets/WESTPAC.png";
import KIWIBANK from "../assets/Kiwibank.png";
import TSB from "../assets/TSB.png";
import FMT from "../assets/First-Mortgage-Trust-FMT.png";
import GENERAL_FINANCE from "../assets/General-Finance.png";
import PEPPERMONEY from "../assets/Peppermoney.png";
import PROSPA from "../assets/Prospa.png";
import AIA from "../assets/AiA.png";
import SOUTHERN_CROSS from "../assets/Southern-Cross.png";
import ASTERON_LIFE from "../assets/Asteron-Life.png";
import CHUBB from "../assets/Chubb.png";
import NIB from "../assets/Nib.png";

const bankLogos = [
  { name: "ANZ", src: ANZ },
  { name: "ASB", src: ASB },
  { name: "BNZ", src: BNZ },
  { name: "Westpac", src: WESTPAC },
  { name: "Kiwibank", src: KIWIBANK },
  { name: "TSB", src: TSB },
  { name: "SBS Bank", src: SBS },
  { name: "Heartland", src: HEARTLAND },
  { name: "The Co-operative Bank", src: THE_COOPERATIVE_BANK },
  { name: "First Mortgage Trust (FMT)", src: FMT },
  { name: "General Finance", src: GENERAL_FINANCE },
  { name: "Peppermoney", src: PEPPERMONEY },
  { name: "Prospa", src: PROSPA },
  { name: "AIA", src: AIA },
  { name: "Southern Cross", src: SOUTHERN_CROSS },
  { name: "Asteron Life", src: ASTERON_LIFE },
  { name: "Chubb", src: CHUBB },
  { name: "Nib", src: NIB }
];

function BankMarquee() {
  // duplicate logos to create seamless loop
  const scrollingLogos = [...bankLogos, ...bankLogos];

  return (
    <section className="bank-marquee-section">
      <div className="bank-marquee-label">
        Access to popular New Zealand banks & lenders
      </div>

      <div className="bank-marquee">
        <div className="bank-marquee-inner">
          {scrollingLogos.map((bank, idx) => (
            <div className="bank-marquee-item" key={bank.name + idx}>
              <img src={bank.src} alt={`${bank.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BankMarquee;
