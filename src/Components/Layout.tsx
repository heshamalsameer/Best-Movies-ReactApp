import React from 'react'
import { Header } from './Header'
type propstype = {
    children:React.ReactNode
}
export const Layout = (props:propstype) => {
  return (
    <>
    <Header/>
    <h1>{props.children}</h1>
    </>
  )
}
