import React from "react";
import {Canvas,useLoader} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";

function Ball() {
    const texture = useLoader(TextureLoader, 'https://gateway.pinata.cloud/ipfs/QmU1r1CPL51pELoU3gf6o7E1SoaiKwrTSCSNR17CuazDTt')
    const [ref,api] = useBox(()=>({mass:1, position:[0,50,0]}))
    return (
      <mesh position={[0,50,0]}>
        <sphereBufferGeometry attach="geometry"/>
        <meshBasicMaterial map={texture} attach="material" color="redvelvet"/>
      </mesh>
    );
  }

export default function Loading() {
    return(
        <Canvas>
            <Ball/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10,15,10]} angle={0.3}/>
            <OrbitControls/>
            <Stars/>
        </Canvas>
    );
}