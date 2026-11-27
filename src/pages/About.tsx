import { Helmet } from 'react-helmet-async';
import {
  Target, Eye, Lightbulb, Users, ShieldCheck, Code2, Workflow,
  MessageSquareText, ClipboardCheck, PanelsTopLeft, Rocket, Headphones,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const capabilities = [
  { icon: Code2, title: 'Web & Mobile Development', text: 'Responsive websites, web applications and cross-platform mobile experiences.' },
  { icon: Workflow, title: 'Custom Business Software', text: 'CRM, ERP and workflow tools shaped around real operational requirements.' },
  { icon: Lightbulb, title: 'AI & Automation', text: 'Practical AI integrations and automation that support everyday business tasks.' },
  { icon: PanelsTopLeft, title: 'Product UI & Experience', text: 'Clear interfaces that make complex workflows easier for teams to use.' },
];

const process = [
  { icon: MessageSquareText, step: '01', title: 'Understand', text: 'Discuss business goals, users, current processes and the problem to solve.' },
  { icon: ClipboardCheck, step: '02', title: 'Plan', text: 'Agree on scope, features, priorities, milestones and a practical delivery plan.' },
  { icon: PanelsTopLeft, step: '03', title: 'Design & Build', text: 'Shape the experience, implement the solution and review progress in stages.' },
  { icon: CheckCircle2, step: '04', title: 'Test & Refine', text: 'Validate key workflows, fix issues and prepare the product for handover.' },
  { icon: Rocket, step: '05', title: 'Launch', text: 'Deploy the agreed solution and help the team get started.' },
  { icon: Headphones, step: '06', title: 'Support', text: 'Discuss improvements and future enhancements as business needs evolve.' },
];

export default function About() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>About MirexTech | Software Development Company in Kanpur</title>
        <meta name="description" content="Discover MirexTech's mission, vision, software capabilities and collaborative development process for business websites, applications and custom software." />
        <link rel="canonical" href="https://mirextech.in/about" />
      </Helmet>

      <section className={styles.hero}>
        <span className={styles.eyebrow}>ABOUT MIREXTECH</span>
        <h1>Technology built around <span>your business.</span></h1>
        <p>We plan, design and develop digital products that help businesses improve their workflows, serve customers and move forward with confidence.</p>
        <div className={styles.heroActions}>
          <Link to="/contact" className={styles.primaryButton}>Discuss your project <ArrowRight size={17} /></Link>
          <Link to="/projects" className={styles.secondaryButton}>Explore our work</Link>
        </div>
      </section>

      <section className={styles.introGrid}>
        <article className={styles.statementCard}>
          <div className={styles.iconBubble}><Target /></div>
          <p className={styles.kicker}>OUR MISSION</p>
          <h2>Make useful technology accessible to businesses.</h2>
          <p>Our mission is to turn business needs into dependable digital solutions through thoughtful planning, practical engineering and clear communication.</p>
        </article>
        <article className={styles.statementCard}>
          <div className={styles.iconBubble}><Eye /></div>
          <p className={styles.kicker}>OUR VISION</p>
          <h2>Be a trusted technology partner for growth.</h2>
          <p>Our vision is to help businesses confidently adopt digital tools that can evolve with their teams, customers and changing requirements.</p>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>WHAT WE BRING</span>
          <h2>Capabilities for your next digital step</h2>
          <p>From a focused website to a connected business platform, we bring product thinking and software development together.</p>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className={styles.capabilityCard} key={title}>
              <div className={styles.iconBubble}><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.valuesBand}>
        <div>
          <span className={styles.eyebrow}>HOW WE WORK</span>
          <h2>Good collaboration makes better software.</h2>
          <p>We value clear expectations, useful feedback and decisions grounded in the project’s actual needs.</p>
        </div>
        <ul>
          <li><ShieldCheck /> Transparent communication</li>
          <li><Users /> Customer-focused decisions</li>
          <li><CheckCircle2 /> Quality-minded delivery</li>
          <li><Lightbulb /> Continuous improvement</li>
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>OUR PROCESS</span>
          <h2>From first conversation to launch</h2>
          <p>A collaborative process with clear stages and room for feedback.</p>
        </div>
        <div className={styles.processGrid}>
          {process.map(({ icon: Icon, step, title, text }) => (
            <article className={styles.processCard} key={step}>
              <div className={styles.processTop}><span>{step}</span><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>LET’S BUILD SOMETHING USEFUL</span>
          <h2>Have a business challenge in mind?</h2>
          <p>Tell us what you want to improve. We can discuss the right next step together.</p>
        </div>
        <Link to="/contact" className={styles.primaryButton}>Start a conversation <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
}
