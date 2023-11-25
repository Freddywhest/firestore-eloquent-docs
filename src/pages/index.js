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
    <header style={{ background: 'radial-gradient(circle, rgba(40,192,255,1) 48%, rgba(255,255,255,1) 49%, rgba(255,77,77,1) 50%)' }} className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <img src={'img/logo_card.png'} alt="Firestore Eloquent Logo" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            style={
              {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '6px'
              }
            }
            to="/docs">
              <span
              style={
                {
                  marginBottom: '-8px',
                }
              }
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="sbui-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>   
              </span>
              <span>
                Documentation
              </span>
          </Link>
          <Link
            className="button button--secondary button--md"
            style={
              {
                backgroundColor: 'black',
                color: 'white',
                borderColor: 'black'
              }
            }
            to="http://github.com/FreddyWhest/firestore-eloquent">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Laravel Eloquent for firestore.">
        {/* <span style={{ paddingTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h2>🎉</h2>
          <h1 style={{ background: 'linear-gradient(343deg, rgba(180,58,58,1) 28%, rgba(2,130,255,1) 49%, rgba(252,69,69,1) 78%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Firestore Eloquent 1.2 is here!
          </h1>
        </span> */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
