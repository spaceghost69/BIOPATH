import type {ReactNode} from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/ebook/introduction">
            Start Your Peptide Journey 🚀
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/reference/cheat-sheet"
            style={{marginLeft: '1rem'}}>
            Quick Reference Guide 📋
          </Link>
        </div>
        <div style={{marginTop: '2rem', fontSize: '1.1rem', opacity: 0.9}}>
          <p>
            🧬 <strong>10+ Premium Peptides</strong> • 
            🎯 <strong>Science-Based Protocols</strong> • 
            ⚡ <strong>Proven Results</strong>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Peptide Optimization Platform`}
      description="The complete guide to peptide optimization. Science-backed protocols, precision dosing, and proven results for health, performance, and longevity.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        {/* Additional CTA Section */}
        <section style={{padding: '4rem 0', backgroundColor: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <Heading as="h2" style={{marginBottom: '1.5rem'}}>
                  Ready to Optimize Your Biology?
                </Heading>
                <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-color-content-secondary)'}}>
                  Join thousands of biohackers, athletes, and health enthusiasts who trust BioPath 
                  for their peptide optimization journey. Get instant access to our complete protocol library.
                </p>
                <div>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/ebook/introduction"
                    style={{marginRight: '1rem'}}>
                    Access Complete Guide
                  </Link>
                  <Link
                    className="button button--outline button--lg"
                    to="/docs/peptides/bpc-157">
                    Explore Peptides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
