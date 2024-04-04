import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"

import { RouterLoader } from "components"
import ContextEnhancer from "context"
import router from './routes'

function App() {
  return (
    <ContextEnhancer>
      <Suspense fallback={<RouterLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ContextEnhancer>
  )
}

export default App
