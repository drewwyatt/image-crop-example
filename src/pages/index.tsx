import type { NextPage } from 'next'
import { ImageUplaoder } from '~/components'

const Home: NextPage = () => {
  return (
    <main>
      <h1>Look at this</h1>
      <ImageUplaoder onUpload={img => console.log(`file: ${img.name}`)} />
    </main>
  )
}

export default Home
