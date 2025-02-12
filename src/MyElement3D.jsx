import { OrbitControls, Tube } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

function MyElement3D(params) {
    const refMesh = useRef();
    const refWireMesh = useRef();
    const {Radius,Tube,radialSegments,tublarSegments,arc} = useControls({
        Radius:{value:1, min:0.1, max:5, step:0.01},
        Tube:{value:1, min:0.1, max:5, step:0.1},
        radialSegments:{value:1, min:1, max:128, step:1},
        tublarSegments:{value:1, min:1, max:128, step:1},
        arc:{value:1, min:0.1, max:360, step:0.01},
    })
    useEffect(()=>{
        refWireMesh.current.geometry = refMesh.current.geometry
    },[Radius,Tube,radialSegments,tublarSegments,arc])
    return(
        <>
            <OrbitControls />
            <ambientLight intensity={0.1} />
            <directionalLight position={[2,1,3]} intensity={1}/>
            <mesh ref={refMesh}>
                <torusGeometry args={[Radius,Tube,radialSegments,tublarSegments,arc*Math.PI/180]} />
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