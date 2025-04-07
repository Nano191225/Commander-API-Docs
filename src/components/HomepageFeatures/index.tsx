import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '不可能を可能に',
    description: (
      <>
        Commander API は、アドオンの機能である Script API を使用して開発されています。
        これにより、コマンドの機能を超えた、より高度な機能を実現します。
      </>
    ),
  },
  {
    title: 'より少ないコマンドで',
    description: (
      <>
        Commander API は、複雑なコマンドを簡潔に記述できるよう設計されています。
        必要最小限のコマンドで、最大限の効率を実現します。
      </>
    ),
  },
  {
    title: 'オープンソース',
    description: (
      <>
        Commander API はオープンソースで開発されており、コミュニティからの貢献を歓迎します。
        GitHub でソースコードを確認し、改善や機能追加の提案ができます。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{padding: '3rem 0'}}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
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
