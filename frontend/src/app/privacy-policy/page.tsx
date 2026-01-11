import Link from "next/link";
import styles from "../info-page.module.css";

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.container}>
      <article className={styles.inner}>

        <h1 className={styles.title}>Neurema <span className={styles.accentText}>Privacy Policy</span></h1>
        <p className={styles.subtitle}>Effective date: 29 October 2025</p>
        <p className={styles.paragraph}>
          Neurema helps people of all ages study and remember better. This
          Privacy Policy explains what we collect, why we collect it, how we use
          it, and the choices you have. It applies to our website, Android/iOS
          apps, browser extensions, and related services (collectively, the
          Services).
        </p>
        <p className={styles.paragraph}>
          By using the Services, you agree to this Privacy Policy.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>1) Who we are and how to contact us</h2>
          <p className={styles.paragraph}>
            Neurema (&quot;Neurema&quot;, &quot;we&quot;, &quot;us&quot;) operates the Services.
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Email:</strong> neurema.in@gmail.com
            </li>
            <li>
              <strong>Postal address:</strong> No.24, 2nd Floor, Karna Shree Layout, 1st
              Cross, Medahalli, Virgonagar Post, Bengaluru, Karnataka, India
              560049
            </li>
            <li>
              <strong>Grievance Officer (India):</strong> To be updated
            </li>
            <li>
              <strong>Email:</strong> neurema.in@gmail.com
            </li>
            <li>
              <strong>Address:</strong> Bangalore, Karnataka, India
            </li>
            <li>
              <strong>Phone:</strong> To be updated
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>2) What we collect</h2>
          <p className={styles.paragraph}>
            We aim to collect only what we need to provide the Services.
          </p>
          <h3 className={styles.subHeading}>2.1 Account and profile</h3>
          <ul className={styles.list}>
            <li>
              Basic account identifiers (e.g., name or display name, email/phone
              if provided, password hash)
            </li>
            <li>
              Institution ID or class/roster information (if your account is
              provisioned by a school/organization)
            </li>
          </ul>
          <h3 className={styles.subHeading}>
            2.2 Learning activity (treated as personal data when linked to an
            account)
          </h3>
          <ul className={styles.list}>
            <li>Topics you add, study schedules, timers, checklists</li>
            <li>Practice answers, scores, progress, and review cadence</li>
            <li>
              In-app interactions (e.g., taps/clicks, session timestamps) used to
              power recall scheduling and insights
            </li>
          </ul>
          <h3 className={styles.subHeading}>2.3 Device and app data</h3>
          <ul className={styles.list}>
            <li>App version, device type, operating system, crash logs, and performance diagnostics</li>
            <li>Country/region (coarse), language, time zone</li>
          </ul>
          <h3 className={styles.subHeading}>2.4 Cookies and similar technologies</h3>
          <p className={styles.paragraph}>
            Cookies or local storage on web to keep you signed in, remember
            preferences, and measure basic usage
          </p>
          <h3 className={styles.subHeading}>2.5 Payments (future feature)</h3>
          <p className={styles.paragraph}>
            Free through 31 January 2026 (IST). We are not collecting payment
            information during the free access period. After paid plans launch,
            payment data will be handled by processors (e.g., Stripe, Razorpay)
            according to their policies; we do not store full card numbers.
          </p>
          <h3 className={styles.subHeading}>2.6 What we do not collect</h3>
          <ul className={styles.list}>
            <li>We do not collect biometric or health data (e.g., EEG) at this time.</li>
            <li>We do not require government IDs.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            3) Why we use your information (purposes)
          </h2>
          <ul className={styles.list}>
            <li>
              Provide the Services, including recall scheduling, progress tracking,
              and helpful study nudges
            </li>
            <li>
              Maintain safety, integrity, and performance of the Services (e.g.,
              security, debugging, preventing misuse)
            </li>
            <li>Communicate with you about changes, features, or support</li>
            <li>
              For institution users: provide progress dashboards and reports to
              authorized educators/administrators
            </li>
            <li>
              Improve the Services via analytics and de-identified/aggregated
              insights
            </li>
            <li>Comply with law and enforce our Terms and Conditions</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>4) Legal bases / lawful grounds</h2>
          <p className={styles.paragraph}>
            Depending on your region, we rely on one or more of the following legal bases:
          </p>
          <ul className={styles.list}>
            <li>Consent (e.g., parental/guardian consent for child accounts; optional analytics preferences)</li>
            <li>Contract (to provide the Services you request)</li>
            <li>Legitimate interests (to secure and improve the Services, prevent fraud/misuse)</li>
            <li>Legal obligation (to comply with applicable law or requests from authorities)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            5) Children’s privacy and consent (all ages supported)
          </h2>
          <p className={styles.paragraph}>
            Neurema is designed for learners of all ages. Where required by local
            law, children and minors must use Neurema with verifiable
            parental/guardian consent or through their school/institution.
          </p>
          <h3 className={styles.subHeading}>5.1 Parental consent workflow (how we verify)</h3>
          <p className={styles.paragraph}>
            At sign-up (or when an account is created by a school), we use one of
            the following lawful methods:
          </p>
          <ol className={styles.orderedList}>
            <li>
              Parent/guardian email link: A consent link is sent to the parent/guardian
              email. Consent is recorded upon confirmation.
            </li>
            <li>
              One-time code: A code is sent via email/SMS to a verified
              parent/guardian contact and must be entered to activate the account.
            </li>
            <li>
              School-managed consent: A school/organization may create student
              accounts under a roster, confirming it has obtained all required
              consents and notices from parents/guardians.
            </li>
          </ol>
          <p className={styles.paragraph}>
            We may ask for minimal information to verify the requester’s identity and
            relationship to the child. If consent is not provided within a reasonable
            time, the account may be limited or deleted.
          </p>
          <h3 className={styles.subHeading}>5.2 Parent/guardian rights</h3>
          <p className={styles.paragraph}>
            Parents/guardians can review, correct, or request deletion of a child’s
            personal data processed for the Services and withdraw consent at any time
            by emailing neurema.in@gmail.com. We will respond within applicable legal
            timeframes and may need to verify identity.
          </p>
          <h3 className={styles.subHeading}>5.3 Additional protections for children</h3>
          <ul className={styles.list}>
            <li>We do not use children’s data for targeted advertising.</li>
            <li>We do not sell children’s personal data.</li>
            <li>We limit profiling to what is strictly necessary to provide study and recall features.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>6) Institution and classroom use</h2>
          <ul className={styles.list}>
            <li>Schools/organizations may provision and manage accounts and assign topics/schedules.</li>
            <li>Neurema processes learning data to provide Services to the institution and enrolled learners.</li>
            <li>Institutions may receive dashboards/reports about learner progress for educational purposes.</li>
            <li>
              Institutions must ensure they have provided appropriate notices and obtained any required parental/guardian consent.
            </li>
            <li>
              Off-boarding: when an institution ends its relationship with Neurema, we follow the agreement and this Policy for data export, deletion, or converting to a personal account (with parent/guardian approval for child accounts).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>7) Analytics and improvement</h2>
          <p className={styles.paragraph}>
            We use analytics (which may include de-identified or aggregated data) to
            understand feature usage, performance, and to improve scheduling and
            insights. Where required, we will request your consent or provide an
            opt-out.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>8) Sharing your information</h2>
          <p className={styles.paragraph}>
            We share personal data only as needed to provide the Services or as required by law:
          </p>
          <ul className={styles.list}>
            <li>Service providers (e.g., cloud hosting, analytics, customer support). They must follow our instructions and protect your data.</li>
            <li>Payment processors (future feature): Stripe, Razorpay, or similar providers to handle payments when paid plans launch.</li>
            <li>Institution administrators/teachers for institution-managed accounts.</li>
            <li>Legal and safety reasons (e.g., complying with lawful requests, enforcing our Terms, protecting rights and safety).</li>
            <li>Business changes (e.g., merger or acquisition). We will continue to protect your data and notify you where required.</li>
          </ul>
          <p className={styles.paragraph}>We do not sell personal data.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>9) International transfers</h2>
          <p className={styles.paragraph}>
            We may store or process data in countries other than yours. When we transfer
            personal data internationally, we use appropriate safeguards permitted by law
            (for example, standard contractual clauses or equivalent mechanisms) to protect your information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>10) Security</h2>
          <p className={styles.paragraph}>
            We use administrative, technical, and physical safeguards designed to protect personal data (e.g., encryption in transit, access controls, logging, least-privilege practices). No system is perfectly secure, so we encourage you to keep your credentials safe and notify us of any suspected issues.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>11) Data retention</h2>
          <p className={styles.paragraph}>
            We keep personal data only as long as necessary to provide the Services, comply with law, resolve disputes, and enforce agreements. Typical examples:
          </p>
          <ul className={styles.list}>
            <li>Account data: retained while your account is active and for a limited period after deletion (for backups/legal).</li>
            <li>Learning activity: retained while needed to power recall scheduling and progress features; deleted or de-identified after account deletion.</li>
            <li>Institution data: follows the applicable agreement and off-boarding process.</li>
          </ul>
          <p className={styles.paragraph}>
            You can request deletion at any time (see Section 13).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>12) Your rights and choices</h2>
          <p className={styles.paragraph}>
            Depending on your region, you may have rights to:
          </p>
          <ul className={styles.list}>
            <li>Access and portability (get a copy of your data)</li>
            <li>Correction (fix inaccurate information)</li>
            <li>Deletion (ask us to delete your data)</li>
            <li>Withdraw consent (where processing is based on consent)</li>
            <li>Object or restrict certain processing (where permitted by law)</li>
          </ul>
          <p className={styles.paragraph}>
            To exercise these rights, email neurema.in@gmail.com. We will verify your
            request and respond within the time required by law. For child accounts, we
            will verify the parent/guardian.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>13) Cookies and similar technologies</h2>
          <p className={styles.paragraph}>
            You can control cookies through your browser or device settings. Disabling
            certain cookies may impact core functionality (e.g., staying signed in). Where
            required, we display a banner or settings to manage consent for non-essential
            cookies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>14) Third-party sites and services</h2>
          <p className={styles.paragraph}>
            The Services may link to third-party websites or services we do not control. Their privacy practices are governed by their policies, not this one.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>15) Changes to this Policy</h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. If changes are material, we will provide notice (e.g., email, in-app message, or site banner). The updated Policy takes effect on the stated effective date.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>16) Region-specific information (summary)</h2>
          <ul className={styles.list}>
            <li>
              <strong>India:</strong> We honor applicable children’s data protections and grievance redressal requirements. Contact the Grievance Officer listed above.
            </li>
            <li>
              <strong>EU/EEA/UK:</strong> We apply the legal bases described in Section 4, respect local age-of-consent rules for online services (typically 13–16 with parental authorization), and use appropriate transfer safeguards.
            </li>
            <li>
              <strong>US (including COPPA contexts):</strong> For users under 13, we obtain verifiable parental consent before collecting personal information.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>17) Definitions</h2>
          <ul className={styles.list}>
            <li>
              <strong>Personal data / personal information:</strong> Information relating to an identified or identifiable person (including when linked to an account or device identifier).
            </li>
            <li>
              <strong>Learning activity / learning data:</strong> Topics, answers, scores, scheduling, timers, progress, and interaction events used to power study features.
            </li>
            <li>
              <strong>De-identified / aggregated data:</strong> Data that cannot reasonably be used to identify a person. We do not attempt to re-identify such data.
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
