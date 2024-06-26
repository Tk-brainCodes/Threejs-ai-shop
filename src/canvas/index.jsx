/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import CameraRig from './CameraRig'
import Backdrop from './Backdrop'
import Shirt from './Shirt'

const CanvasModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
