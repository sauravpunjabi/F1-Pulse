'use client'

import { useState } from 'react'
import Loader from './Loader'

export default function PageClient({ children }: { children: React.ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      {!loaderDone && <Loader onDone={() => setLoaderDone(true)} />}
      <div style={{ visibility: loaderDone ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </>
  )
}
