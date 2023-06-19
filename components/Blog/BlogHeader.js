import Head from 'next/head';
import styles from './blogheader.module.scss';
import Image from 'next/image';
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';
import { format } from 'date-fns';

const BlogHeader = ({ frontmatter }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      {frontmatter.bannerUrl && (
        <div className={styles.bannerImg}>
          <Image
            src={frontmatter.bannerUrl}
            alt={frontmatter.title}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}

      <Heading>{frontmatter.title}</Heading>

      {frontmatter.date && (
        <Text className={styles.blogDate}>
          {format(new Date(frontmatter.date), "PPP")}
        </Text>
      )}

      {frontmatter.description && (
        <Text className={styles.description}>
          Description : {frontmatter.description}
        </Text>
      )}
    </>
  )
}

export default BlogHeader;