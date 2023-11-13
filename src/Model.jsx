import React, { useRef } from "react";
import { Edges, Sparkles, useGLTF } from "@react-three/drei";
import { Color, DebugLayerMaterial, Depth, Fresnel, Gradient, LayerMaterial, Noise, Normal } from "lamina";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const ref = useRef();
  const ref2 = useRef();
  const { nodes, materials } = useGLTF("/female2.glb");

  useFrame((state,delta) => {
    const sin = Math.sin(state.clock.elapsedTime  )
    const cos = Math.cos(state.clock.elapsedTime  )
    ref2.current.offset.x += delta * .01

  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} castShadow>
       
         <LayerMaterial ref={ref} toneMapped={false}>
           <Noise scale={30} colorA="black" colorB="black" colorC="black" colorD="white" type="curl" ref={ref2} />
        </LayerMaterial>   
      </mesh>
    </group>
  );
}

useGLTF.preload("/female2.glb");
