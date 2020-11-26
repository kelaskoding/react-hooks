import React, { useState } from 'react';


const Accordion = ({ items }) => {

    const [activeIdex, setActiveIdex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIdex(index);
    }

    const renderedItem = items.map((item, index) => {
        const active = index === activeIdex ? 'active' : '';
        return (
            <div key={index}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        );
    });


    return (
        <div className="ui styled accordion">
            {renderedItem}
        </div>
    );
}

export default Accordion;