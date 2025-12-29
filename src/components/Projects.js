import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Personal Portolio -React',
    des: 'Devloper',
    github:'',
    images: '/portfolio.PNG'
  },
  {
    name: 'Text to Logo',
    des: 'creating text into logo png',
    github:'',
    images: '/logooo.PNG'
  },
  {
    name: 'Blog Application - Console Based',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    github:'https://github.com/naresh-rn/Blog-Application-java-console-Application_',
    images: '/blogApp.PNG'
  },
  {
    name: 'Fetch API',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    github:'https://github.com/naresh-rn/work_shop_FETCH-api.git',
    images: '/FetchAPI.PNG'
  },
  {
    name: 'Supermarket Database Management System - SQL',
    des: "This project applies star schema and normalization to structure sales data efficiently It eliminates redundancy and improves data accuracy and consistency The design enables faster and more reliable sales analysis for decision-making.",
    github:'https://github.com/naresh-rn/Star-Schema-in-MySQL.git',
    images: '/StarSchema.jpg'
  },
]);

const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
          MY Projects Works
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <a href={value.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                  View Source Code
                </a>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
