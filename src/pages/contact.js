import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact Me</h1>
                <p>Contact me on Twitter at <a href="https://twitter.com/joolsbarnett" rel="nofollow noopener noreferrer"
                    target="_blank">@joolsbarnett</a>.</p>
            </Layout>
        </div>
    )
}

export default ContactPage