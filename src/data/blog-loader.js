// Bridge file: Reads blogData.js and makes it available to HTML pages
// This is the translator between backend (blogData.js) and frontend (blog.html, blog-post.html)

export async function loadAllPosts() {
  // Import and return all posts from blogData.js
  try {
    const { blogPosts } = await import('./blogData.js');
    return blogPosts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  // Find and return a specific post by its slug
  const posts = await loadAllPosts();
  return posts.find(post => post.slug === slug);
}

export async function getAllPostSlugs() {
  // Return all post slugs (useful for navigation)
  const posts = await loadAllPosts();
  return posts.map(post => post.slug);
}
