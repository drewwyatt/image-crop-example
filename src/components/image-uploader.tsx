import { ChangeEventHandler, FC, useCallback, useState } from 'react'
import type { UploadedFile } from '~/models'

type Props = {
  onUpload(file: UploadedFile): void
}

const ImageUploader: FC<Props> = ({ onUpload }) => {
  const onFile = useCallback<ChangeEventHandler<HTMLInputElement>>(
    event => {
      const file = event.target.files?.[0] ?? null
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result) {
            onUpload({ name: file.name, src: reader.result as string })
          }
        }

        reader.readAsDataURL(file)
      }
    },
    [onUpload],
  )

  return (
    <fieldset>
      <legend>Upload an Image</legend>
      <p>(there is no validation. Upload a jpg plz 🙃)</p>
      <input type="file" onChange={onFile} />
    </fieldset>
  )
}

export default ImageUploader
