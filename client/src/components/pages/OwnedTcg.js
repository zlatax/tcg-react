import React from 'react';
import { useState,useEffect } from 'react';
import TcgList from '../tcg/TcgList';

import {getFileByCID} from "../utils/pinata";

import { NFTStorage, File } from 'nft.storage';

function OwnedTcgPage(props) {
    const client = new NFTStorage({ token: process.env.REACT })
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTcg, setLoadedTcg] = useState([]);

    const ownedTcgURI = props.ownedTcgs;

    useEffect(()=> {
        setIsLoading(true);
        const cards = [];
        const card = getFileByCID('QmU1r1CPL51pELoU3gf6o7E1SoaiKwrTSCSNR17CuazDTt')
        .then((response)=> {
          cards.push(response.data);
          
        });
        setIsLoading(false);
        setLoadedTcg(cards); 
        
        // for(const uri in ownedTcgURI) {
        //   fetch(
        //     "https://gateway.pinata.cloud/ipfs/"+uri
        //   ).then(response=>{
        //     if(!response.success) {
        //       return {
        //         success:false,
        //         status:"There was an error retrieving NFT information from IPFS."
        //       }
        //     }
        //     return response.json()
        //   }).then(data=>{
        //       console.log(data);
        //       const card ={
        //         ...data
        //       }
        //       cards.push(card);
        //   });
        // }
        
    },[ownedTcgURI])

    let content;

    if(isLoading) {
        content = <p>Your cards are loading...</p>
    } else {
        if(loadedTcg===null){
          content = <p>Nothing to show here...</p>
            
        }
        else {
          content = <TcgList mytcgs = {loadedTcg}/>
        }
    }
    return <section>
        <h1>{props.owner}'s TCGs</h1>
        {content}
    </section>
}

export default OwnedTcgPage;