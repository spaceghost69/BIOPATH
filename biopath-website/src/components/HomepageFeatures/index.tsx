import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Science-Backed Protocols',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Access cutting-edge peptide protocols backed by clinical research and real-world results. 
        From BPC-157 for healing to CJC-1295 for growth hormone optimization - every protocol 
        is meticulously researched and safety-tested.
      </>
    ),
  },
  {
    title: 'Precision Dosing & Timing',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master the art of peptide optimization with precise dosing schedules, injection timing, 
        and cycling protocols. Our comprehensive guides eliminate guesswork and maximize results 
        while prioritizing safety and efficacy.
      </>
    ),
  },
  {
    title: 'Complete Optimization System',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Transform your health, performance, and longevity with our complete peptide ecosystem. 
        From cognitive enhancement with Noopept to aesthetic optimization with GHK-Cu - 
        unlock your biological potential with precision medicine.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
