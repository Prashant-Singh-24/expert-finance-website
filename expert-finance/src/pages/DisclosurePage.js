// src/pages/DisclosurePage.js
import React from "react";

function DisclosurePage() {
  return (
    <main className="section service-detail-section">
      <div className="section-header">
        <span className="section-kicker">Disclosure</span>
        <h1 className="section-title">Important information about our advice</h1>
        <p className="section-subtitle">
          Here is some general information about our business to help you decide
          if you want to seek our advice.
        </p>
      </div>

      <div className="service-detail-body disclosure-body">
        {/* Basic business details */}
        <h2>Disclosure</h2>
        <p>
          Here is some general information about our business to help you decide
          if you want to seek our advice.
        </p>
        <p>
          <strong>Company Name:</strong> Affinique Financial Services Limited
          (Trading as Expert Finance)
          <br />
          <strong>FSP Number:</strong> FSP1003967
          <br />
          <strong>Phone Number:</strong> 09-2176765
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:anand@expertfinance.co.nz">
            anand@expertfinance.co.nz
          </a>
        </p>

        {/* Licensing information */}
        <h3>Licensing information</h3>
        <p>
          We operate as a Financial Advice Provider under a current licence
          issued by the Financial Markets Authority in the name of NZ Financial
          Services Group Limited (FSP286965).
        </p>
        <p>
          There are no conditions attached to this licence on the advice that
          may be given.
        </p>

        {/* Our advice & products */}
        <h3>Our advice and Product Providers</h3>
        <p>
          We provide advice to our clients about insurance products and home
          loan products.
        </p>
        <p>
          The product types an Individual adviser can give advice on will be
          disclosed at an adviser level in the disclosure guide. For example,
          Insurance (Risk Adviser) products would include:
        </p>
        <p>
          Life, Income Protection, Health, Trauma, Permanent Disablement,
          Mortgage Protection/Repayment, Redundancy Cover and Waiver of Premium
          Cover.
        </p>

        {/* Banks and lenders */}
        <h3>Bank and lenders I use</h3>
        <p>
          I source loans from a panel of lenders. The current lenders I can use
          are:
        </p>
        <ul>
          <li>ANZ</li>
          <li>ASB</li>
          <li>Avanti Finance</li>
          <li>First Mortgage Trust</li>
          <li>Unity</li>
          <li>Southern Cross</li>
          <li>Kiwibank</li>
          <li>General Finance</li>
          <li>Funding Partners</li>
          <li>Westpac</li>
          <li>ASAP Finance Limited</li>
          <li>Cressida Capital</li>
          <li>Heatland Bank</li>
          <li>Pepper Money</li>
          <li>AIA Go Home Loan</li>
          <li>Basecorp Finance</li>
          <li>Pallas Capital</li>
          <li>Midlands Funds Management</li>
          <li>BNZ</li>
          <li>PROSPA</li>
          <li>DBR</li>
          <li>Liberty Financial Limited</li>
          <li>SBS Bank</li>
          <li>The Co-operative Bank</li>
          <li>CFML</li>
          <li>BIZCAP</li>
          <li>Finbase</li>
        </ul>

        {/* Insurers */}
        <h3>Insurers I use</h3>
        <p>
          I source insurance from a panel of insurers. The current insurers I
          can use are:
        </p>
        <ul>
          <li>AIA</li>
          <li>NIB</li>
          <li>Southern Cross Health</li>
          <li>Fidelity Life</li>
          <li>Partners Life</li>
          <li>Asteron Life</li>
          <li>Chubb Life</li>
        </ul>

        {/* Commission */}
        <h3>Commission</h3>
        <p>
          On settlement of a loan or issuance of an insurance policy we usually
          receive commission from the applicable product provider. The
          commission is generally of an upfront nature but may also include a
          renewal or trail commission. We also receive a fixed rate roll over
          fee from some product providers if we assist in refinancing your loan.
        </p>
        <p>
          This commission is used to remunerate the financial adviser that
          provides the advice, and to pay the expenses associated with running
          our business including any rent, staff costs and IT resources. From
          this commission we also pay NZ Financial Services Group Limited for
          services they provide to us in connection with our authorisation under
          their licence from the Financial Markets Authority.
        </p>
        <p>
          We take steps to ensure that the receipt of commissions does not
          influence the advice we give to you and that our advisers prioritise
          your interests by recommending the best product for your purpose
          regardless of the type and amount of commission we or they may
          receive.
        </p>
        <p>We do this by:</p>
        <ul>
          <li>
            Ensuring our advisers follow an advice process that ensures they
            understand your needs and goals and that their recommendations on
            insurance cover meets those needs and goals.
          </li>
          <li>
            Ensuring our advisers receive regular training on how to manage
            conflicts of interest.
          </li>
          <li>
            Providing you with a schedule showing commission amounts and types
            by product provider. This schedule is contained within each
            Financial Adviser’s personalised Disclosure Guide. A Financial
            Adviser will provide you with more information about commissions
            during the advice process.
          </li>
        </ul>

        {/* Fees & expenses */}
        <h3>Fees and Expenses</h3>
        <p>
          Generally we don’t charge you any fee for the advice and transactional
          solutions that we provide to you. This is possible because, on
          settlement of a mortgage or issuance of a risk insurance policy, we
          usually receive commission from the applicable product provider as
          described above. There are two exceptions to this general position
          which are explained below.
        </p>
        <p>We may charge you a one-off fee in the following situations:</p>
        <p>
          <strong>(a) No commission:</strong> If you request that we provide
          services in relation to a product or service and we do not receive a
          commission. Any such fee would be agreed and authorised by you in
          writing before we complete the services, and would be based on an
          estimate of the time spent providing the advice.
        </p>
        <p>
          This may arise in the rare event that you request that we provide
          services in relation to either a product that is offered by a provider
          that we do not hold an accreditation with, or a product that is
          outside our usual arrangements with our product providers.
        </p>
        <p>
          <strong>(b) Repayment of commission:</strong> If a product or service
          provider requires that we repay commission within 28 months of
          settlement of your mortgage or issuance of your risk insurance policy.
          Any such fee would be no more than $3,000 (plus GST) and would be
          calculated based on a rate of $250 (plus GST) per hour of the
          financial adviser’s time spent providing services to you in connection
          with the applicable mortgage or insurance. The fee charged will not
          exceed the amount of commission clawed back from the lender.
        </p>
        <p>
          Should we need to charge you a fee, you will be invoiced and will be
          given 30 days to make payment.
        </p>

        {/* Conflicts of interest */}
        <h3>Conflicts of Interest</h3>
        <p>
          If there are any conflicts of interest apart from commission that
          could potentially influence the advice that we give, these will be
          shown in your Financial Adviser’s Disclosure Guide.
        </p>

        {/* Complaints */}
        <h3>Complaints</h3>
        <p>
          If you have a complaint about our service you need to tell us about
          it. You can contact our internal complaints service by phoning us on{" "}
          <strong>09-2176765</strong> or emailing us at{" "}
          <a href="mailto:anand@expertfinance.co.nz">
            anand@expertfinance.co.nz
          </a>{" "}
          with the heading <strong>Complaint – (Your Name)</strong>.
        </p>
        <p>
          If we cannot agree on a resolution, you can refer your complaint to
          our external dispute resolution service. This service is independent
          and will cost you nothing and will assist us to resolve things with
          you.
        </p>
        <p>
          Please set out the nature of your complaint, and the resolution you
          are seeking. We will acknowledge receipt of this within 24 hours. We
          will then record your complaint in our Complaints Register and notify
          our Licence Holder. We may want to meet with you to better understand
          your issues. We will then investigate your complaint and provide a
          response to you within 7 working days of receiving your complaint. If
          we need more time to investigate your complaint, we’ll let you know.
        </p>
        <p>Details of this service are:</p>
        <p>
          <strong>Financial Services Complaints Limited</strong>
          <br />
          Phone: 0800 347 257
          <br />
          Email:{" "}
          <a href="mailto:complaints@fscl.org.nz">complaints@fscl.org.nz</a>
        </p>

        {/* Duties */}
        <h3>Our Duties</h3>
        <p>
          Anyone within our business giving advice is bound by and supports the
          duties set out in the Financial Markets Conduct Act 2013. These duties
          are:
        </p>
        <ul>
          <li>
            Meet the standards of competence, knowledge, and skill and the
            standards of ethical behaviour, conduct, and client care set out in
            the Code of Professional Conduct for Financial Advice Providers.
          </li>
          <li>Give priority to your interests.</li>
          <li>Exercise care, diligence, and skill.</li>
        </ul>
      </div>
    </main>
  );
}

export default DisclosurePage;
