import { FC, useState } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import type { UploadedFile } from '~/models'

import 'react-image-crop/dist/ReactCrop.css'

type Props = {
  file: UploadedFile
}

const ImageCropper: FC<Props> = ({ file }) => {
  const [crop, setCrop] = useState<Crop>()

  return (
    <fieldset>
      <legend>Image Cropper</legend>
      <ReactCrop crop={crop} circularCrop onChange={setCrop} onComplete={foo => {}}>
        <img src={file.src} />
      </ReactCrop>
    </fieldset>
  )
}

export default ImageCropper
