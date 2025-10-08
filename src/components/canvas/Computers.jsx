import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, error } = useGLTF("/desktop_pc/scene.gltf"); // Chemin relatif à public/

  if (error) {
    console.error("Erreur de chargement GLTF :", error);
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={512}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    console.log("isMobile:", mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      console.log("isMobile changed:", event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const timeout = setTimeout(() => {
      setLoadError("Le chargement du modèle prend trop de temps.");
    }, 10000);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(timeout);
    };
  }, []);

  // if (loadError) {
  //   return <div>{loadError}</div>;
  // }

  return (
    <div className="py-20 mt-20" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [20, 3, 6], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        
            <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;












// import { Suspense, useMemo } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { useMediaQuery } from "react-responsive";

// const Computers = ({ isMobile }) => {
//   const { scene } = useGLTF("/desktop_pc/scene.gltf");

//   if (!scene) {
//     console.error("Erreur : le modèle 3D n'a pas pu être chargé");
//     return null;
//   }

//   return (
//     <group>
//       <hemisphereLight intensity={0.3} groundColor="#000" />
//       <directionalLight
//         position={[-5, 10, 5]}
//         intensity={0.7}
//         castShadow={isMobile ? false : true}
//         shadow-mapSize={isMobile ? 256 : 512}
//       />
//       <primitive
//         object={scene}
//         scale={isMobile ? 0.55 : 0.7}
//         position={isMobile ? [0, -2.5, -2] : [0, -3, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </group>
//   );
// };

// const ComputersCanvas = () => {
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const dpr = useMemo(() => (isMobile ? 0.8 : 1.2), [isMobile]);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows={!isMobile}
//       dpr={dpr}
//       camera={{ position: [15, 3, 5], fov: 30, near: 0.1, far: 50 }}
//       gl={{ preserveDrawingBuffer: false, alpha: true }}
//       style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
//     >
//       <Suspense
//         fallback={
//           <group>
//             <mesh>
//               <boxGeometry args={[1, 1, 1]} />
//               <meshBasicMaterial color="#915EFF" wireframe />
//             </mesh>
//           </group>
//         }
//       >
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//           enablePan={false}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;




