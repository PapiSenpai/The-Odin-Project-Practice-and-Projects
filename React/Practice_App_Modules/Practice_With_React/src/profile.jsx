import {} from 'react';
import './profile.css'

const User = {
    name: 'Juan',
    imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSoze: 90,
};

function Profile(){
    return(
        <>
            <h1>
                {User.name}
            </h1>
        </>
    )
}