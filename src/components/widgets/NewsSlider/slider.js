import React, {Component} from 'react';
import axios from 'axios';
import SliderTemplates from './Slider_Templates';

class NewsSlider extends Component{
    state={
        news: []
    }
    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then(res=>{
            this.setState({
                news: res.data
            });
        });
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