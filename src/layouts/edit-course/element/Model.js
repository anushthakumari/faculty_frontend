import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import MDBox from "components/MDBox";

function Model(props) {
  const { scene } = useGLTF(props.file_url);

  // eslint-disable-next-line
  return <primitive object={scene} {...props} />;
}

export default function App({ file_url }) {
  return (
    <MDBox bgColor="#5E5E5E">
      <Canvas dpr={[1, 2]} shadows camera={{ fav: 50 }} style={{ height: "300px" }}>
        <PresentationControls speed={1.5} global zoom={0.6} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model file_url={file_url} scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </MDBox>
  );
}

// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";

// import MDBox from "components/MDBox";

// function Model(props) {
//   const { scene } = useGLTF("/realistic_human_heart.glb");

//   // eslint-disable-next-line
//   return <primitive object={scene} {...props} />;
// }

// export default function App() {
//   return (
//     <MDBox bgColor="#5E5E5E">
//       <Canvas dpr={[1, 2]} shadows camera={{ fav: 50 }}>
//         <PresentationControls speed={1.5} global zoom={3} polar={[-0.1, Math.PI / 4]}>
//           <Stage environment={null}>
//             <Model scale={0.01} />
//           </Stage>
//         </PresentationControls>
//       </Canvas>
//     </MDBox>
//   );
// }
