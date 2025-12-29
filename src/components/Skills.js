import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faJava, } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import {faPython, faBootstrap, faNodeJs} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    icon: faHtml5
  },
  {
    name: 'CSS',
    icon: faCss3
  },
  {
    name: 'Javascript',
    icon: faJs},
  {
    name: 'ReactJs',
    icon: faReact
  },
  {
    name: 'Java',
    icon: faJava
  },
  {
    name: 'Bootstrap',
    icon: faBootstrap
  },
  {
    name: 'Python',
    icon: faPython
  },
  {
    name: 'Node js',
    icon: faNodeJs
  }
]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills
       </div>
     {/*
      //  <div className="des" ref={(el) => el && divs.current.push(el)}>
        // {/* 20 */}{/*
      //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
      //  </div>

      */}
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

