import React from 'react';
import styles from './bloglist.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Text from '../Typography/Text';

const BlogList = ({ posts }) => {
  return (
    <div className={classes.container}>
      {posts?.map((post) => (
        <div className={classes.item} key={post.slug}>

          {post.frontmatter.bannerUrl && (
            <div className={classes.bannerImg}>
              <Image
                src={post.frontmatter.bannerUrl}
                alt={post.frontmatter.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}

          <Link href={`/blogs/${post.slug}`}>
            <a className={classes.blogTitle}>{post.frontmatter.title}</a>
          </Link>

          {post.frontmatter.date && (
            <Text className={classes.blogDate}>
              {format(new Date(post.frontmatter.date), 'PPP')}
            </Text>
          )}

          {post.frontmatter.tags && (
            <Text className={classes.tags}>
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
            <Text className={classes.description}>
              {post.frontmatter.description}
            </Text>
          )}
          
        </div>
      ))}
    </div>
  )
}

export default BlogList;