import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple and lightweight',
    description: (
      <>
        Firestore Eloquent was designed from the ground up to be easily installed and
        simple to use with your laravel project.
      </>
    ),
  },
  {
    title: 'Easy intergrating with any laravel project',
    description: (
      <>
        Seamless integration with any Laravel project, ensuring straightforward implementation and compatibility for an enhanced development experience.
      </>
    ),
  },
  {
    title: 'Very fast and secure',
    description: (
      <>
        Exceptionally swift and secure, combining rapid performance with robust protective measures for a reliable and efficient experience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
