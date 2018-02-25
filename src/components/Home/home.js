import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';

const Home = ()=>{
    return(
        <div>
            <NewsSlider type="featured"
            start={1}
            amount={4}
            settings={{
                dots:false
            }}
            />
        </div>
    );
}
export default Home;