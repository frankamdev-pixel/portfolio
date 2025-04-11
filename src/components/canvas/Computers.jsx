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
        shadow-mapSize={512} // Réduit pour mobile
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

  if (loadError) {
    return <div>{loadError}</div>;
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [20, 3, 5], fov: 25 }}
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


// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { useMediaQuery } from "react-responsive";

// const Computers = ({ isMobile }) => {
//   const { scene } = useGLTF("./desktop_pc/scene.gltf");

//   if (!scene) {
//     console.error("Le modèle 3D n'a pas pu être chargé");
//     return null;
//   }

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.5} groundColor="black" />
//       <directionalLight position={[3, 5, 2]} intensity={1} castShadow />
//       <primitive
//         object={scene}
//         scale={isMobile ? 0.5 : 0.75}
//         position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const isSmallScreen = useMediaQuery({ maxWidth: 768 });

//   useEffect(() => {
//     setIsMobile(isSmallScreen);
//   }, [isSmallScreen]);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       style={{ height: "100vh", width: "100%" }}  // Ajout de styles CSS pour assurer une taille complète du Canvas
//     >
//       <Suspense fallback={<div>Chargement...</div>}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;
