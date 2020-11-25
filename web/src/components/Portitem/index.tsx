import React from 'react';
import './styles.css';

interface Portprops {
    title: string;
    date?: string;
    text: string;
};

const Portitem: React.FunctionComponent<Portprops> = (port) => {
    return (
        <div className='project'>
            <h2>{port.title}</h2>
            <p className='date'>{port.date}</p>
            <p>{port.text}</p>
        </div>
    )
}

export default Portitem;