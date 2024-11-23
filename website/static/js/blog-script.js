// document.addEventListener('DOMContentLoaded', function () {
//     const blogPosts = document.querySelectorAll('.blog-post');
//     const blogContent = document.getElementById('blogContent');

//     blogPosts.forEach(post => {
//         post.addEventListener('click', function () {
//             const contentId = this.getAttribute('data-content-id');
//             fetchBlogContent(contentId);
//         });
//     });

//     function fetchBlogContent(id) {
//         // Fetch the blog content based on the id and display it in the blogContent div
//         // This is a mock function. Replace with actual AJAX call if needed.
//         let content = '';

//         switch (id) {
//             case 'blog1':
//                 content = `
//                     <h2>Fire Prevention Tips</h2>
//                     <p>Learn essential fire safety tips for homeowners, including fire prevention measures, creating escape plans, and maintaining smoke detectors.</p>
//                     <p>Detailed content for Fire Prevention Tips goes here...</p>
//                 `;
//                 break;
//             case 'blog2':
//                 content = `
//                     <h2>Behind the Helmet</h2>
//                     <p>Step into the boots of a firefighter and discover the challenges, responsibilities, and heroics they face during their daily routines.</p>
//                     <p>Detailed content for Behind the Helmet goes here...</p>
//                 `;
//                 break;
//             // Add more cases for other blog posts
//         }

//         blogContent.innerHTML = content;
//         blogContent.classList.add('active');
//     }
// });

// function openBlog(blogId) {
//     var blogContent = document.getElementById('blog-content');
//     var blogDetails = document.querySelectorAll('.blog-details');
    
//     blogDetails.forEach(function(detail) {
//         detail.classList.remove('active');
//     });

//     document.getElementById(blogId).classList.add('active');
//     blogContent.classList.add('open');
// }

// function closeBlog() {
//     var blogContent = document.getElementById('blog-content');
//     blogContent.classList.remove('open');
// }

function openBlog(title, content) {
    const blogContent = document.getElementById('blog-content');
    document.getElementById('blog-title').innerText = title;
    document.getElementById('blog-text').innerText = content;
    blogContent.classList.add('active');
}

function closeBlog() {
    const blogContent = document.getElementById('blog-content');
    blogContent.classList.remove('active');
}

