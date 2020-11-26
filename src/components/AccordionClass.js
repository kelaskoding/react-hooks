import React from 'react';

class AccordionClass extends React.Component {

    state ={
        activeIdex: 0,
        x: 0,
        z: 1
    }

    onTitleClick = (index) => {
        this.setState({ activeIdex: index});
        console.log(index);
    }

    render() {
        const renderedItem = this.props.items.map((item, index) =>{
            const active = index === this.state.activeIdex ? 'active' : '';
            return(
                <div key={index}>
                    <div className={`title ${active}`} onClick={() => this.onTitleClick(index)}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        {item.content}
                    </div>
                </div>
            );
        } );
        return(
            <div className="ui styled accordion">
                {renderedItem}
            </div>
        );
    }
}

export default AccordionClass;