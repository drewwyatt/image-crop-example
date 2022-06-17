import type { NextPage } from 'next'
import { useState } from 'react'
import { ImageCropper, ImageUplaoder } from '~/components'
import { UploadedFile } from '~/models'

const Home: NextPage = () => {
  const [image, setImage] = useState<UploadedFile>()

  return (
    <main>
      <h1>Look at this</h1>
      <ImageUplaoder onUpload={setImage} />
      {image && <ImageCropper file={image} />}
    </main>
  )
}

export default Home
