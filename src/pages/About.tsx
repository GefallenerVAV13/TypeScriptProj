import { Component } from 'react'
import {Helmet} from 'react-helmet';

export default class About extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>О нас</title>
                    <meta
                    name="description" content = "Узнайте больше о сайте"
                    />
                    <meta name="keywords" content="о нас, информация" />
                </Helmet>
                <div>About</div>
            </>
        )
    }
}