import React from 'react';
import NewTcgForm from '../tcg/NewTcgForm';

import ComingSoonMessage from "../ui/ComingSoon";

function NewTcgPage() {
    function addNewTCGHandler() {
        /**
         * Creation of New TCG NFTs will happen with this form.
         * The user will enter a title, description (text) along with an image attachment 
         * which then will upload to the IPFS network,
         * Then with the CID of the image and the metadata, it will be minted onto a new 
         * ERC721 token by calling mint new token in the smart contract.
         * 
         * For now, this will not happen, but simply a log.
         */
        console.log("Added new TCG!")
        
    }

    return <div>
        {/* <ComingSoonMessage additional="Create TCG feature coming in T-minus 100 days"/> */}
        <NewTcgForm onAddNewTCG={addNewTCGHandler}/>
    </div>
}

export default NewTcgPage;

