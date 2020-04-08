import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: {
                fields: publishedDate,
                order: DESC
            }
        ) {
        edges {
             node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
      }
    }
  }
}
    `)
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((post, index) => {
                    return (
                        <li className={blogStyles.post} key={index}>
                            <Link to={`/blog/${post.node.slug}`}>
                                <h2>{post.node.title}</h2>
                                <p>{post.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage