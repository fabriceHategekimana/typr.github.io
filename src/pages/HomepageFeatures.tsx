import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Type Safety',
    description: (
      <>
        TypR adds static typing to R, allowing you to catch errors at compile time, not at runtime.
      </>
    ),
  },
  {
    title: 'Modern Syntax',
    description: (
      <>
        Enjoy a cleaner, more expressive syntax that makes your R code more readable and maintainable.
      </>
    ),
  },
  {
    title: 'Performant',
    description: (
      <>
        Written in Rust, the TypR transpiler is fast and efficient, ensuring a smooth development workflow.
      </>
    ),
  },
  {
    title: 'Interoperability',
    description: (
      <>
        Seamlessly interoperate with existing R code and packages, and even transpile to JavaScript and Wasm.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
