import React from 'react'

import { useRoutes } from 'routes'

const App = () => {
  
  const isAutenficated = false
  const routes = useRoutes(isAutenficated)
  
  return (
    <div className='app'>
      {routes}
    </div>
  )
}

export default App
