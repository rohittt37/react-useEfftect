import React, {useState, useEffect} from 'react'

const FetchRandomUser = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then((respnse) => respnse.json())
        .then((data) => {
            setUser(data.results[0])
            setLoading(false);
        })

        .catch((error) => console.log('Error fetching user data :', error));
        }, []);

        return (
            <div>
                {loading ? (<h2>Loading...</h2>
                ) : (
                    <div>
                        <h2>Random User</h2>
                       <img src={user.picture.large} alt="User Avatar" />

                       <p><strong>Name:</strong>
                       {user.name.first} {user.name.last}</p>

                       <p><strong>Email:</strong> {user.email}</p>

                       <p><strong>Location:</strong>
                       {user.location.city}, {user.location.country}</p>
                    </div>
                )}
            </div>
        )
}

export default FetchRandomUser