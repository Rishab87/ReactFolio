import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainHeader = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
//The Outlet component in React Router DOM is used to render the child routes of a parent route. It is similar to the Switch component, but it only renders the first child route that matches the location. This makes it useful for rendering nested routes that share a common layout or wrapper component.

