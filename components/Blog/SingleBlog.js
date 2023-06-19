import Link from "next/link"
import styles from './singleblog.module.scss';
import { LeftArrow, UpArrow } from "../Icons";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";

const SingleBlog = ({ MdxSource, frontmatter }) => {
  return (
    <div className={styles.blogContainer}>
      <Link href="/">
        <div className={styles.link}>
          <LeftArrow />
          Home
        </div>
      </Link>

      <BlogHeader frontmatter={frontmatter} />
      <BlogContent MdxSource={MdxSource} />

      <button
        className={styles.scrollToTop}
        type="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Scroll To Top
        <UpArrow />
      </button>
    </div>
  )
}

export default SingleBlog