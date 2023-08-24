import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '편리한 사용성',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus 는 쉽게 설치하고, 웹사이트를 빠르게 실행할 수 있도록 설계되었습니다.
      </>
    ),
  },
  {
    title: '문제에 집중',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus 는 문서작업에 집중할 수 있으며, 내부에서 구조작업을 처리합니다.
        문서로 돌아가 작업을 계속 진행하세요.
      </>
    ),
  },
  {
    title: 'React의 확장성',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        재사용성 특징을 가지고 있는 리액트를 사용하여, 기존의 레이아웃을 확장하거나 커스터마이징 할 수 있습니다. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
