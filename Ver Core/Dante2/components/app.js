import React from 'react'
import Dante from '../editor/components/Dante/Dante.js'
import {ImageBlockConfig} from '../editor/components/blocks/image.js'


function App() {
  return (
        <Dante
          debug={true}
          read_only={false}
          widgets={[
          ImageBlockConfig({
            options: {
              upload_url: 'http://localhost:8080/api/upload',
              upload_callback: (ctx, img) => {
                console.log('file uploaded: ' +
      ctx.data.url)
              },
              upload_error_callback: (ctx,
      img) => {
                console.log(ctx)
              },
            },
          }),
        ]}
        />
  )
}

export default App