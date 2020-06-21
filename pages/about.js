import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>30Rails</title>
      </Head>

      <main>This is a boardgame.io implementation of 30Rails</main>

      <footer>
        <a href="https://philihp.com">Made with &hearts; in San Francisco</a>
      </footer>

      <style jsx>
        {`
          main {
            background-color: pink;
          }
        `}
      </style>
    </div>
  )
}
