import React from 'react';
import styles from './bloglist.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Text from '../Typography/Text';
import { format } from 'date-fns';
import noImage from '/public/noimage.png'

const BlogList = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts?.map((post) => (
        <div className={styles.item} key={post.slug}>

          {post.frontmatter.bannerUrl ? (
            <div className={styles.bannerImg}>
              <Image
                src={post.frontmatter.bannerUrl}
                alt={post.frontmatter.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
          ) : (
            <div className={styles.bannerImg}>
              <Image
                src="/noimage.png"
                alt={post.frontmatter.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}

          <Link href={`/blogs/${post.slug}`}>
            <a className={styles.blogTitle}>{post.frontmatter.title}</a>
          </Link>

          {post.frontmatter.date && (
            <Text className={styles.blogDate}>
              {format(new Date(post.frontmatter.date), 'PPP')}
            </Text>
          )}

          {post.frontmatter.tags && (
            <Text className={styles.tags}>
              Tags:{' '}

              {post.frontmatter.tags.map((tag, index, tags) => (
                <span key={tag}>
                  {tag}
                  {tags.length - 1 > index ? ', ' : ''}
                </span>
              ))}

            </Text>
          )}

          {post.frontmatter.description && (
            <Text className={styles.description}>
              {post.frontmatter.description}
            </Text>
          )}

        </div>
      ))}
    </div>
  )
}

export default BlogList;