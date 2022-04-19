import React from 'react'
import { Header } from './index.js'

// Children is used in a layout component to display the children data of any place it is present

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
