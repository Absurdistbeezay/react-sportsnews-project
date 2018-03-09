import React from 'react';
import {Route, Switch} from 'react-router-dom';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Video/Main/index';
import SignIn from './components/signin/signin';

import Home from './components/Home/home';
import Layout from './hoc/layout';
import NewsArticle from './components/Articles/News/Posts/index';

const Routes =(props)=>{
        return(
            <Layout user={props.user}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path = "/news" exact component={NewsMain}/>
                    <Route path ="/articles/:id" exact component={NewsArticle} />
                    <Route path ="/videos/:id" exact component={VideoArticle} />
                    <Route path="/videos" exact component={VideosMain}/>
                    <Route path ="/sign-in" exact component={ SignIn } />
                </Switch>
            </Layout>
        )
}

export default Routes;