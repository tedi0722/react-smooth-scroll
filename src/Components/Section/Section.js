import React from 'react';
import './Section.css';

const Section = (props) => 
    <section id={props.id}>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
    </section>


export default Section