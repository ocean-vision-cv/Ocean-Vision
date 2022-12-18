import Icon360 from '../layout/Icon360';
import Quote from '../layout/Quote';
import './Viewer360.css'

const Viewer360 = () =>{
    return(
        <section className="viewer">
            <div className="quote-container">
                <Quote className="quote-svg"/>
            </div>
    
            <iframe className='frame' frameborder="0" title='360image' src='https://momento360.com/e/u/549c51676a5b4e1a9d09741c05f740ae?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true'/>
            <p className='icon'><Icon360/></p>
        </section>
    )
};

export default Viewer360;