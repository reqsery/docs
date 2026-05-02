import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const CARDS = [
  {
    title: 'Get Started with Revro',
    desc: 'Generate Roblox scripts, create UI elements, and build Discord servers with AI. Start with 25 free credits.',
    to: '/revro/getting-started',
    cta: 'Get started',
  },
  {
    title: 'MC Mod Porter',
    desc: 'Port your Minecraft Java Edition mods from 1.16 all the way through 26.x with an automated CLI tool.',
    to: '/mc-mod-porter/installation',
    cta: 'Read the guide',
  },
  {
    title: 'Discord Bots',
    desc: 'Server Builder, Tickets, and FAQ bots that power the Revro community and automate your Discord server.',
    to: '/discord-bots/overview',
    cta: 'Explore bots',
  },
];

const QUICK_LINKS = [
  { label: 'revro.dev', href: 'https://revro.dev' },
  { label: 'Discord', href: 'https://discord.gg/vV2USr9phF' },
  { label: '@reqsery', href: 'https://github.com/reqsery' },
  { label: 'support@revro.dev', href: 'mailto:support@revro.dev' },
  { label: '@RevroDev', href: 'https://twitter.com/RevroDev' },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="AI-powered tools for Roblox and Discord creators. Documentation for Revro, MC Mod Porter, and Discord Bots."
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Documentation</div>
          <h1 className={styles.heroTitle}>Revro Documentation</h1>
          <p className={styles.heroSubtitle}>
            AI-powered tools for Roblox and Discord creators
          </p>
          <p className={styles.heroDescription}>
            Welcome to Revro's documentation hub. Find guides, API references,
            and tutorials for all our tools.
          </p>
        </div>
      </section>

      {/* ── Cards ────────────────────────────────────────────── */}
      <section className={styles.cardsSection}>
        <p className={styles.sectionLabel}>Choose a project</p>
        <div className={styles.cards}>
          {CARDS.map(({ title, desc, to, cta }) => (
            <Link key={to} to={to} className={styles.card}>
              <div className={styles.cardTitle}>{title}</div>
              <div className={styles.cardDesc}>{desc}</div>
              <div className={styles.cardArrow}>{cta} →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Quick links ──────────────────────────────────────── */}
      <div className={styles.quickLinks}>
        <p className={styles.quickLinksTitle}>Quick links</p>
        <div className={styles.quickLinksRow}>
          {QUICK_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.quickLink}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
