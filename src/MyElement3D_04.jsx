import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import * as THREE from "three"

function MyElement3D(params) {
    const refMesh = useRef();
    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta
    })
    return(
        <>
            <directionalLight position={[1,1,1]} />
            <axesHelper scale={10} />
            <OrbitControls/>
            <mesh ref={refMesh} 
                position={[0,2,0]}
                rotation={[0,0,THREE.MathUtils.degToRad(45)]}
                scale={[2,2,2]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="#e67e22"
                    opacity={0.5} transparent={true}
                />
                <axesHelper scale={2} />

                <mesh
                    position-y={2}
                    scale={[0.1,0.1,0.1]}
                >
                    <sphereGeometry/>
                    <meshStandardMaterial color="red" />
                    <axesHelper scale={5} />
                </mesh>
            </mesh>
        </>
    )
}

export default MyElement3D