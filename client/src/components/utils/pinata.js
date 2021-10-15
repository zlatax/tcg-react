require('dotenv').config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

const pinataURL = 'https://api.pinata.cloud/';

const axios = require('axios');

export const pinJSONToIPFS = async(JSONBody) => {
    const url = pinataURL + 'pinning/pinJSONToIPFS';
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};

export const getFileByCID  = async(ipfsHash) => {
    const url = pinataURL + 'data/pinList?hashContains=' + ipfsHash;
    //making axios POST request to Pinata ⬇️
    return axios 
        .get(url,{
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }}
            )
        .then(function (response) {
            return {
                success:true,
                data: {
                    title : response.data.rows[0].metadata.keyvalues.title,
                    desc: response.data.rows[0].metadata.keyvalues.desc,
                    image: "https://gateway.pinata.cloud/ipfs/"+ipfsHash
                }
            }
        //    return {
        //         success: true,
        //         pinataMetadata: {
        //             title: response.data.title,
        //             desc: response.data.desc,
        //        }
               
        //        image: response.data.file
        //    };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
}

export default {pinJSONToIPFS, getFileByCID}