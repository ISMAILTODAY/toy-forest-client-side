import React from 'react';
import { Helmet } from "react-helmet";
const BlogPage = () => {
    return (
        <div>
            <Helmet>
                <title>TF -Blogs</title>
            </Helmet>
            <div className='p-5 mx-16 shadow-lg my-24 rounded-lg' >
                <h1 className='text-2xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p >An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a user's device. <br /> A refresh token allows the user to get a new access token without needing to log in again.</p>
                <p className=''>We should store them in HTTP Cookies storage in client side.</p>
            </div>
            <div className='p-5 mx-16 shadow-lg my-24 rounded-lg' >
                <h1 className='text-2xl font-semibold'>Compare SQL and NoSQL databases?
                </h1>
                <p >SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            </div>
            <div className='p-5 mx-16 shadow-lg my-24 rounded-lg' >
                <h1 className='text-2xl font-semibold'>WWhat is express js? What is Nest JS?
                </h1>
                <p >Express js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                <p className=''>We should store them in HTTP Cookies storage in client side.</p>
            </div>
            <div className='p-5 mx-16 shadow-lg my-24 rounded-lg' >
                <h1 className='text-2xl font-semibold'>
                    What is MongoDB aggregate and how does it work?

                </h1>
                <p >Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                {/* <p className=''>We should store them in HTTP Cookies storage in client side.</p> */}
            </div>
        </div>
    );
};

export default BlogPage;