import React, { useState, useEffect } from 'react'

const FetchDataExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/5')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })

            .catch((error) => console.error('Error fetching data:', error));
    }, [data]); // empty dependency array means this effect will only run once when the component mounts



  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
        ) : (
            <div>
                <h2>Post Title: {data.title}</h2>
                <p>{data.body}</p>
            </div>
      )}
    </div>
  );
}

// useEffect is a hook that allows you to perform side effects in your component. It takes two arguments: a function that contains the side effect code, and an array of dependencies that determine when the side effect should be re-executed.

export default FetchDataExample
