import React from 'react'
import App from 'next/app'
import './styles.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />
  }
}

export default MyApp
