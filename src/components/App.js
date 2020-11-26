import React from 'react';
// import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: 'What is react?',
        content: 'React is Frond end javascript library'
    },
    {
        title: 'Why use react?',
        content: 'React is favorite JS library among programmers'
    },
    {
        title : 'How do you use react?',
        content: 'You use react by creating components'
    }
]

const App = () => {
    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
    );
}

export default App;