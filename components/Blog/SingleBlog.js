import Link from "next/link"
import styles from './singleblog.module.scss';
import { LeftArrow, UpArrow } from "../Icons";

const SingleBlog = ({ MdxSource, frontmatter }) => {
  return (
    <div className={styles.blogContainer}>
      <Link href="/">
        <LeftArrow />
        Home
      </Link>

      {/* Blog Header */}
      {/* Blog Content */}

      <button
        className={classes.scrollToTop}
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