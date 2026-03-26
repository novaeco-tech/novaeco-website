import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Federated Mission Control',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Access the entire ecosystem through NovaAdmin, the unified dashboard and launchpad for all ecosystem applications. Navigate seamlessly with single sign-on across the identity mesh.
      </>
    ),
  },
  {
    title: 'Horizontal Enablers',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Plug into foundational cross-cutting services. Utilize NovaFin for multi-asset settlements, NovaTrade for circular marketplaces, and NovaMaterial for Digital Product Passports.
      </>
    ),
  },
  {
    title: 'Vertical Sectors',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Deploy and consume domain-specific industry applications, ranging from regenerative agriculture in NovaAgro to urban mining in NovaRecycle and distributed manufacturing in NovaMake.
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

export default function HomepageFeatures(): JSX.Element {
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