import { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class Blog extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Блог</title>
                    <meta
                    name="description" content = "Смотрите новости"
                    />
                    <meta name="keywords" content="блог, статья, новости" />
                </Helmet>
                <div>Blog</div>
            </>

        )
    }
}