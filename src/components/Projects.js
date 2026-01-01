import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Personal Portolio -React',
    des: 'Passionate Frontend Developer specializing in React and Redux for building scalable, high-performance web applications. Focused on clean code, reusable components, and seamless user experiences.',
    github:'https://github.com/naresh-rn/portfolio-Naresh-v2.git',
    images: '/portfolio.png'
  },
  {
    name: 'Text to Logo',
    des: 'A MERN stack mini project that transforms text into custom logo designs. Features real-time editing and responsive UI. Allows users to export logos in PNG format.',
    github:'https://github.com/naresh-rn/Text-to-Logo.git',
    images: '/logooo.PNG'
  },
  {
    name: 'Blog Application - Console Based',
    des: 'A console-based Java blog application using JDBC and MySQL. Features role-based authentication for secure access management. Allows users to manage blog posts based on assigned roles..',
    github:'https://github.com/naresh-rn/Blog-Application-java-console-Application_',
    images: '/blogApp.png'
  },
  {
    name: 'Fetch API',
    des: 'A simple React project that consumes a product API using Fetch. Renders product lists dynamically from server responses. Demonstrates basic API integration and state handling.',
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
