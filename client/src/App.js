import React, { Component } from "react";
import TCG from "./contracts/tcg.json";
import getWeb3 from "./getWeb3";

import { Switch, Route } from "react-router-dom";

import OwnedTcgPage from "./components/pages/OwnedTcg";
import TcgMarketPage from "./components/pages/TcgMarket";
import NewTcgPage from "./components/pages/NewTcg";

import Layout from "./components/layout/Layout";


class App extends Component {
  state = {web3: null, address: null, contract: null , ownedTcg:[]};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const userAddress = await window.ethereum.selectedAddress;

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TCG.networks[networkId];
      const instance = new web3.eth.Contract(
        TCG.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      // passing function in setState, after the state changes ensures that the state variables are the vairables that you have set to be changed
      this.setState({ web3, userAddress, contract: instance });  //,this.getOwned);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getOwned = async () => {
    const { address, contract } = this.state;

    // retrieve id list of owned tokens
    const uris = await contract.methods.getTokenURIs().call(function (err,res) {
      if(err) {
        console.log("An error occured whilst retrieving data from contract!",err);
        return
      }
      return res;
    })

    // retrieve uris of tokens
    for(var i=0;i<uris.length;i++) {
      uris[i] = await contract.methods.tokenURI(uris[i]).call();
    }

    // Update state with the result.
    this.setState({ ownedTcg: uris });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div id="App">
        <Layout>
          <Switch>
            <Route path="/" exact>
              <TcgMarketPage/>
            </Route>
            <Route path="/mytcgs" >
              <OwnedTcgPage ownedTcg={this.state.ownedTcg}/>
            </Route>
            <Route path="/createtcg">
              <NewTcgPage />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
