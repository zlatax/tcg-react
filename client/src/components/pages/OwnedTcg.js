import React from 'react';
import { useState,useEffect } from 'react';
import TcgList from '../tcg/TcgList';

function OwnedTcgPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTcgs, setLoadedTcgs] = useState([]);
    
    useEffect(()=> {
        setIsLoading(true);
        fetch(
            'https://tcg-react-18773-default-rtdb.firebaseio.com/users.json'
          ).then(response=> {
            return response.json();
          }).then(data=> {
            const tcgs = [];
            for (const key in data) {
              // Need to fetch the list of tokens owned by the user.
              if(data[key].owner)
                const meetup = {
                  id:key,
                  ...data[key]
                }
              meetups.push(meetup);
            }
    
            setIsLoading(false);
            setLoadedMeetups(meetups);
    })

    let content;

    if(isLoading) {
        content = <section>
            <p>Your cards are loading...</p>
        </section>
    } else {
        content = <section>
            <h1>{props.owner}'s TCGs</h1>
            <TcgList ownedtcgs = {loadedTcgs}/>
        </section>
    }

    return <section>
        <h1>{props.owner}'s TCGs</h1>
        <TcgList/>
    </section>
}

export default OwnedTcgPage;