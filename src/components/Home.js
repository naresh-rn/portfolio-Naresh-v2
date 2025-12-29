import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                Hello, I'm <span>Naresh,</span>
            </div>
            <div className="des">{/* 30 */}A Aspiring Developer</div>
            
            <a href="/Naresh_R_Resume_..pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatarr.jpg" alt="" />
                {/* <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default Home
