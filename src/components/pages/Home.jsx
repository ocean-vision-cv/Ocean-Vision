
import './Home.css'

import image from '../../assets/image1.jpg'
const Home = () =>{
    return(
        <div className="home">
            <div className="about-left">
                <h1 className='about-title'>Ocean Vision</h1>
                <div className="about-description">
                    <p>orci rutrum ullamcorper. Fusce sagittis maximus convallis. Donec at elit condimentum, aliquet sem ut, pretium orci. Cras at facilisis magna. Maecenas sapien feugiat fermentum ut.</p>
                    <p>orci rutrum ullamcorper. Fusce sagittis maximus convallis. Donec at elit condimentum, aliquet sem ut, pretium orci. Cras at facilisis magna. Maecenas sapien feugiat fermentum ut.</p>
                    <p>orci rutrum ullamcorper. Fusce sagittis maximus convallis. Donec at elit condimentum, aliquet sem ut, pretium orci. Cras at facilisis magna. Maecenas sapien feugiat fermentum ut.</p>
                </div>
            </div>
            <div className="about-right">
                <div className="image-container">
                    <img src={image} alt="description"/>
                </div>
            </div>
        </div>
    )
};

export default Home;
