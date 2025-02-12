import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

function MyElement3D(params) {
    const refMesh = useRef();
    const refWireMesh = useRef();
    const {topRadius,bottomRadius,height,radialSegments,heightSegments,bOpen,thetaStart,thetaLength} = useControls({
        topRadius:{value:1, min:0.1, max:5, step:0.01},
        bottomRadius:{value:1, min:0.1, max:5, step:0.01},
        height:{value:1, min:0.1, max:5, step:0.01},
        radialSegments:{value:16, min:3, max:128, step:1},
        heightSegments:{value:16, min:3, max:128, step:1},
        bOpen:{value:false},
        thetaStart:{value:0, min:0, max:360, step:1},
        thetaLength:{value:0, min:0, max:360, step:1},
    })
    useEffect(()=>{
        refWireMesh.current.geometry = refMesh.current.geometry
    },[topRadius,bottomRadius,height,radialSegments,heightSegments,bOpen,thetaStart,thetaLength])
    return(
        <>
            <OrbitControls />
            <ambientLight intensity={0.1} />
            <directionalLight position={[2,1,3]} intensity={1}/>
            <mesh ref={refMesh}>
                <cylinderGeometry args={[topRadius,bottomRadius,height,radialSegments,heightSegments,bOpen,thetaStart*Math.PI/180,thetaLength*Math.PI/180]} />
                <meshStandardMaterial color="#1abc9c" />
            </mesh>
            <mesh ref={refWireMesh}>
                <meshStandardMaterial emissive="yellow" wireframe={true} />
            </mesh>
            <axesHelper scale={10} />
        </>
    )
}

export default MyElement3D