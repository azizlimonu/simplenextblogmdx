import { useRouter } from 'next/router';
import styles from './tagfilter.module.scss';
import clsx from 'clsx';

const TagFilter = ({ tags, selectedTag, setSelectedTag, className }) => {
  const router = useRouter();

  return (
    <div className={clsx(styles.container, className)}>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={clsx(
            styles.tagButton,
            selectedTag === tag && styles.selected
          )}
          onClick={() => {
            setSelectedTag(tag);
            // router.push('/');
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

export default TagFilter