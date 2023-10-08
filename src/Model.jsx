import React, { useRef } from "react";
import { Edges, Sparkles, useGLTF } from "@react-three/drei";
import { Color, DebugLayerMaterial, Depth, Fresnel, Gradient, LayerMaterial, Noise, Normal } from "lamina";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/female2.glb");

  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime  )
    const cos = Math.cos(state.clock.elapsedTime  )
    // ref.current.layers[0].origin.set(cos / 2, 0, 0)
    // ref.current.layers[1].origin.set(cos, sin, cos)
    // ref.current.layers[2].origin.set(sin, cos, sin)
    // ref.current.layers[3].origin.set(cos, sin, cos)
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} castShadow>
       
         <LayerMaterial ref={ref} toneMapped={false}>
           <Noise scale={30} colorA="black" colorB="black" colorC="black" colorD="white" type="curl" />
        </LayerMaterial>   
      </mesh>
    </group>
  );
}

useGLTF.preload("/female2.glb");
