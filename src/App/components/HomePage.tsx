import React from 'react';
import  './page.css';
import ab from './ab.png';
import circe from './circle.png';
import ChatArea from './ChatArea';


const HomePage = () => {

    return(
       <div className='hompage-container'>
           <header className='container'>
               <h1><span>Insu</span>Bot</h1>
           </header>
           <div className='container content-wrapper'>
                <div className='col'>
                    <div>
                        <div className="about-images wow fadeInLeft" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInLeft'}}>
                            <div className="rotmate-image rotateme">
                                <img src={circe} alt="circe" />
                            </div>
                            <div>
                                <img src={ab} alt="ab" />
                            </div>
                        </div>
                    </div>
                    <div className='text-wrapper'>
                    <div className="">
                        {/* layer 1 */}
                        <div className="layer-1 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                            <h2 className="title2">Nlp Insurance Chatbot</h2>
                        </div>
                        {/* layer 2 */}
                        <div className="layer-2 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                            <p>A NLP chatboat to help you with your insurance needs.</p>
                        </div>
                        {/* layer 3 */}
                    </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='chatarea-wrapper'>
                        <ChatArea />
                    </div>
                </div>
           </div>
       </div>
    );
}

export default HomePage;