import Head from 'next/head'
import Image from 'next/image'
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css'
import HeroSection from '../components/Home/Index'
import { postFileNames, postsPath } from '../utils/mdxUtils'
import BlogList from '../components/Blog/BlogList'
import TagFilter from '../components/Blog/TagFilter'
import Pagination from '../components/Pagination';

export default function Home({ posts }) {

  const [selectedTag, setSelectedTag] = useState("all");
  const [filteredPost, setFilteredPost] = useState(posts);

  const [currentPage, setCurrentPage] = useState(null);
  const postPerPage = 3;
  const router = useRouter();

  // Get All Tags 
  const allTagsSet = posts.reduce((acc, post) => {
    post.frontmatter.tags?.map((tag) => acc.add(tag));
    return acc;
  }, new Set([]));

  // convert Tag Set To Array
  const allTags = [...allTagsSet].sort((a, b) => a.localeCompare(b));
  allTags.unshift("all");

  // filter the post according to the tag and pagination
  useEffect(() => {
    let tempPosts = [...posts];

    if (selectedTag && selectedTag !== "all") {
      tempPosts = posts.filter((post) =>
        post.frontmatter.tags.includes(selectedTag)
      );
    }

    const page = parseInt(router.query.page, 10) || 1;
    setCurrentPage(page);

    const startPage = (page - 1) * postPerPage;
    const endPage =
      startPage + postPerPage > posts.length - 1
        ? posts.length
        : startPage + postPerPage;

    const paginatedPosts = tempPosts.slice(startPage, endPage);
    setFilteredPost(paginatedPosts);

  }, [posts, router, selectedTag]);

  const totalPages =
    selectedTag === 'all'
      ? Math.ceil(posts.length / postPerPage)
      : Math.ceil(filteredPost.length / postPerPage);

  return (
    <>
      <Head>
        <title>Next Js Mdx | AzizBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <TagFilter
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        tags={allTags}
      />
      <BlogList posts={filteredPost} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>


  )
};

export async function getStaticProps() {
  const posts = postFileNames?.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, `${slug}`));
    const { data } = matter(content);

    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ''),
    }
  });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
};
