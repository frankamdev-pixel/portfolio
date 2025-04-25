// import React, { Suspense, useMemo } from "react";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { memo } from "react";

// import CanvasLoader from "../Loader";

// const Earth = memo(() => {
//   const { scene } = useGLTF("./planet/scene.gltf");

//   const earthScene = useMemo(() => scene, [scene]); // Évite le rechargement inutile
// if (!WEBGL.isWebGLAvailable()) {
//   document.body.appendChild(WEBGL.getWebGLErrorMessage());
// }
//   return (
//     <group>
//       <primitive object={earthScene} scale={2.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
//     </group>
//   );
// });

// const EarthCanvas = () => {
 
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />
//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

import React, { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { WEBGL } from "three/examples/jsm/WebGL.js";
import { memo } from "react";

import CanvasLoader from "../Loader";

const Earth = memo(() => {
  const [error, setError] = useState(null);
  let gltf;

  try {
    gltf = useGLTF("./planet/scene.gltf");
  } catch (err) {
    setError(err);
    return null;
  }

  if (error) {
    return <group>{/* Modèle de secours ou message */}</group>;
  }

  const earthScene = useMemo(() => gltf.scene, [gltf.scene]);

  return (
    <group>
      <primitive
        object={earthScene}
        scale={2.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
});

const EarthCanvas = () => {
  if (!WEBGL.isWebGLAvailable()) {
    return <div>{WEBGL.getWebGLErrorMessage()}</div>;
  }

  return (
    <Canvas
      shadows={false} // Désactivé pour mobile
      frameloop="demand"
      dpr={[1, Math.min(window.devicePixelRatio, 1.5)]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;