import React from 'react';
import { useState,useEffect } from 'react';
import TcgList from '../tcg/TcgList';

import { NFTStorage, File } from 'nft.storage';


function OwnedTcgPage(props) {
    const client = new NFTStorage({ token: process.env.REACT })
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTcg, setLoadedTcg] = useState([]);

    const ownedTcgURI = props.ownedTcgs;

    useEffect(()=> {
        setIsLoading(true);
        const cards =[];
        for(const uri in ownedTcgURI) {
          fetch(
            uri
          ).then(response=>{
            return response.json()
          }).then(data=>{
              console.log(data);
              const card ={
                ...data
              }
              cards.push(card);
          });
        }
        setIsLoading(false);
        setLoadedTcg(cards);
    },[ownedTcgURI])

    let content;

    if(isLoading) {
        content = <section>
            <p>Your cards are loading...</p>
        </section>
    } else {
        content = <section>
            <h1>{props.owner}'s TCGs</h1>
            <TcgList mytcgs = {loadedTcg}/>
        </section>
    }

    return <section>
        <h1>{props.owner}'s TCGs</h1>
        <TcgList/>
    </section>
}

export default OwnedTcgPage;