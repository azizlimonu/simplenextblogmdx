import styles from './blogcontent.module.scss';
import { MDXRemote } from 'next-mdx-remote';
import Text from '../Typography/Text';
import Heading from '../Typography/Heading';
import Image from 'next/image';

const content = {
  p: (props) => <Text {...props} />,
  h1: (props) => <Heading {...props} />,
  h2: (props) => <Heading {...props} level={2} />,
  h3: (props) => <Heading {...props} level={3} />,
  img: (props) => (
    <span className={styles.blogImage}>
      <Image
        {...props}
        layout="fill"
        alt={props.alt}
        objectFit="cover"
      />
    </span>
  ),
}

const BlogContent = ({ MdxSource }) => {
  return (
    <div className={styles.container}>
      <MDXRemote {...MdxSource} components={content} />
    </div>
  )
}

export default BlogContent;