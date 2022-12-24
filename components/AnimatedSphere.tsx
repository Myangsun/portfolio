import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

type Props = {};

function AnimatedSphere({}: Props) {
  return (
    <Sphere visible={true} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.3}
        speed={1.5}
      />
    </Sphere>
  );
}

export default AnimatedSphere;
