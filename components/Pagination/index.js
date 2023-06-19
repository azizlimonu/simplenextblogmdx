import { useRouter } from "next/router";
import styles from './styles.module.scss';
import Link from "next/link";

const Pagination = ({ totalPages, currentPage }) => {
  const router = useRouter();

  return (
    <div className={styles.pagination}>
      <p className={styles.pagination_heading}>
        page {router.query.page || 1} out of {totalPages}
      </p>

      <div className={styles.paginateLinks_container}>
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`}>
            <a className={styles.paginateLinks}>Prev</a>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/?page=${currentPage + 1}`}>
            <a className={styles.paginateLinks}>Next</a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination;