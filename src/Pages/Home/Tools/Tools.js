import React, { useEffect, useState } from 'react';
import Tool from './Tool'

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://aqueous-beyond-46423.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='mt-5 flex justify-center'>
            <div>
                <h2 className='text-center mb-5 text-3xl font-bold text-center my-24'>Our Tools</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container'>
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;