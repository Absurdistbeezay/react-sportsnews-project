import React, {Component} from 'react';
import { firebaseArticles, firebaseLooper } from '../../../firebase';
import SliderTemplates from './Slider_Templates';


class NewsSlider extends Component{
    state={
        news: []
    }
    componentWillMount(){
        // axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then(res=>{
        //     this.setState({
        //         news: res.data
        //     });
        // });

        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot)=>{
         
            snapshot.forEach((childSnapshot)=>{
                const news = firebaseLooper(snapshot)
                this.setState({
                    news
                })
            });
          
        })

    }
    render(){

        return(

            <div>
               <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        );
    }
}
export default NewsSlider;