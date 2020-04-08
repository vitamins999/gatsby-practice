import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>This is where my bio will go!</p>
            <p><Link to="/contact">Find me on my contact page</Link></p>
        </Layout>
    )
}

export default AboutPage