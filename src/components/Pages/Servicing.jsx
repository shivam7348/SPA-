import React, { useEffect, useState } from 'react';

function Github() {
    const [gitdata, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/shivam738")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div>
            {gitdata ? (
                <>
                    <p>Servicing: {gitdata.login}</p>
                    <img
                        src={gitdata.avatar_url}
                        alt={`${gitdata.login}'s avatar`}
                        style={{ width: '150px', borderRadius: '50%' }}
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Github;
