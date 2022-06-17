import { ChangeEventHandler, FC, useCallback, useState } from 'react'

type Props = {
  onUpload(file: File): void
}

const ImageUploader: FC<Props> = ({ onUpload }) => {
  const onFile = useCallback<ChangeEventHandler<HTMLInputElement>>(
    event => {
      const file = event.target.files?.[0] ?? null
      if (file) {
        onUpload(file)
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
