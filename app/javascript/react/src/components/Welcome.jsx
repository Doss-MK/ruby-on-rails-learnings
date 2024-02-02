import React from 'react'
import ReactDOM from 'react-dom/client'

const Welcome = () => {
    return(
        <>
            <div className='main-container'>
                <h3 className='text-center'>Ruby on Rails Learnings</h3>
            </div>
        </>
    );
};

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Welcome />)

export default Welcome;