import { AccumulativeShadows, Float, RandomizedLight, Text3D, OrbitControls, useMatcapTexture } from "@react-three/drei";
import "./App.css";
import { Model } from "./Model";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function App() {
  const [matcap] = useMatcapTexture("04E8E8_04B5B5_04CCCC_33FCFC");
  const fontProps = {
    font: "/Galore_Regular.json",
    fontSize: 1,
    letterSpacing: 0.3,
    lineHeight: 1,
  };

  const text = useRef();
  const { camera } = useThree();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      camera.rotation.y = e.clientX * 0.000003;
      camera.rotation.x = e.clientY * 0.000003;
    });
  }, []);

  return (
    <>
      <group position={[0, -2, 0]}>
        <group position={[0.65, 3, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.8}>
          <Model />
        </group>

        <group ref={text}>
          <Float position={[-5, 1, 0]} rotation={[0, 0.5, 0]} speed={2}>
            <Text3D scale={2} {...fontProps} castShadow>
              M
              <meshMatcapMaterial matcap={matcap} />
            </Text3D>
          </Float>
          <Float position={[-2.5, 0.6, 0]} speed={2}>
            <Text3D scale={2} {...fontProps} castShadow>
              i
              <meshMatcapMaterial matcap={matcap} />
            </Text3D>
          </Float>
          <Float position={[-1.5, 1, 0]} speed={2}>
            <Text3D scale={2} {...fontProps} castShadow>
              l
              <meshMatcapMaterial matcap={matcap} />
            </Text3D>
          </Float>
          <Float position={[-0.5, 1, 0]} speed={2}>
            <Text3D scale={2} {...fontProps} castShadow>
              e
              <meshMatcapMaterial matcap={matcap} />
            </Text3D>
          </Float>
          <Float position={[1.1, 0.6, 0]} speed={2} rotation={[0, -0.5, 0]}>
            <Text3D scale={2} {...fontProps} castShadow>
              n
              <meshMatcapMaterial matcap={matcap} />
            </Text3D>
          </Float>
          <Float position={[3, 1, 0]} speed={2}>
            <Text3D scale={2} {...fontProps} castShadow>
              a
              <meshMatcapMaterial matcap={matcap} />
            </Text3D>
          </Float>
        </group>

        <group position={[0, -1.5, 0]}>
          <AccumulativeShadows frames={300} color="purple" colorBlend={0.9} opacity={0.5} scale={20} alphaTest={0.85}>
            <RandomizedLight amount={8} radius={5} ambient={0.5} position={[3, 10, 1]} bias={0.001} />
          </AccumulativeShadows>
        </group>
      </group>
    </>
  );
}
