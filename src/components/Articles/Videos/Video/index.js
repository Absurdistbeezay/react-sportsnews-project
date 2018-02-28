import React, { Component } from 'react';
import axios from 'axios';
import styles from '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component{
    state ={
        article: [],
        team:[],
        teams:[],
        related:[]
    }

    componentWillMount(){
        axios.get(`http://localhost:3004/videos?id=${this.props.match.params.id}`)
        .then(res =>{
            let article = res.data[0];

            axios.get(`http://localhost:3004/teams?id=${article.team}`)
            .then(res=>{
                this.setState({
                    article,
                    team:res.data
                });
                this.getRelated();
            })
        });
    }
     getRelated = () =>{
        axios.get(`http://localhost:3004/teams`)
        .then(res =>{
            let teams = res.data;
            axios.get(`http://localhost:3004/videos?q=${this.state.team[0].city}&_limit=3`)
            .then(res=>{
                this.setState({
                    teams,
                    related:res.data
                })
            })
        })
    }

    render(){
        const article = this.state.article;
        const team = this.state.team;

        return(
            <div>
                <Header teamData={team[0]}
                />
                <div className={styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe 
                    title= "videoplayer"
                    width= "100%"
                    height= "300px"
                    src={`https://www.youtube.com/embed/${article.url}`}
                    >
                        
                    </iframe>
                    <VideosRelated
                    data={this.state.related}
                    teams={this.state.teams}
                    />
                </div>
            </div>
        )
    }
}

export default VideoArticle;