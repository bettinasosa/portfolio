import Head from 'next/head';

export const defaultMetaProps = {
  title: 'One thought a day',
  description: 'One thought a day, the thinkers journaling app.',
  ogImage: `https://www.onethoughtaday.com/images/landing.png`,
  ogUrl: 'https://www.onethoughtaday.com/images/landing.png'
};

export interface MetaProps {
  title: string;
  description: string;
  ogUrl: string;
  ogImage: string;
}

export default function Meta({ props }: { props: MetaProps }) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <meta name="theme-color" content="#7b46f6" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta itemProp="name" content={props.title} />
      <meta itemProp="description" content={props.description} />
      <meta itemProp="image" content={props.ogImage} />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.ogUrl} />
      <meta property="og:image" content={props.ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.ogImage} />
    </Head>
  );
}
