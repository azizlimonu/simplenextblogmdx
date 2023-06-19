import path from 'path';
import fs from 'fs';

// get Posts Path
export const postsPath = path.join(process.cwd(), "posts");

// get each file from Posts Folder
export const postFileNames = fs
  .readdirSync(postsPath)
  .filter((postPath) => /\.mdx?$/.test(postPath));
