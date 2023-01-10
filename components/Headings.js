import React, { createElement } from "react"

export const H1 =  ({
  children, className, as, ...props
}) => {
  if(as){
    return (
      createElement(
        as,
        {...props, className: `font-medium leading-tight text-6xl ${className}`},
        children
      )
    )
  }

  return (
    <h1 {...props} className={`font-medium leading-tight text-6xl ${className}`}>
      {children}
    </h1>
  )
}

export const H2 = ({
  children, className, as, ...props
}) => {
  if(as){
    return (
      createElement(
        as,
        {...props, className: `font-medium leading-tight text-5xl ${className}`},
        children
      )
    )
  }

  return (
    <h2 {...props} className={`font-medium leading-tight text-5xl ${className}`}>
      {children}
    </h2>
  )
}

export const H3 = ({
  children, className, as, ...props
}) => {
  if(as){
    return (
      createElement(
        as,
        {...props, className: `font-medium leading-tight text-2xl ${className}`},
        children
      )
    )
  }

  return (
    <h3 {...props} className={`font-medium leading-tight text-2xl ${className}`}>
      {children}
    </h3>
  )
}