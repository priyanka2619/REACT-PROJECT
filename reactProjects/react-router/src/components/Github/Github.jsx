import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/priyanka2619')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    return (
        <div className='text-center m-2 bg-gray-700 text-white '>GitHub: {data.followers}</div>
    )
}

export default GitHub



