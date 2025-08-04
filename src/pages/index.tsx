import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from './HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import TypRLogo from '@site/static/img/typr.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
		<img src={TypRLogo} alt="TypR Logo" className={styles.heroLogo} />
        <Heading as="h1" className={styles.heroTitle}>
          The R you love, but safer.
        </Heading>
        <p className={styles.heroSubtitle}>TypR is a modern, type-safe language that transpiles to R, offering a beautiful syntax and powerful features for a better development experience.</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/docs/typr-start/getting-started">
            Get Started
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/docs/typr-doc">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
