import React, { useEffect, useState } from 'react';
import Tool from './Tool'

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://nameless-sands-54366.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='mt-5'>
            <h2 className='text-center mb-5'>Our Tools</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;