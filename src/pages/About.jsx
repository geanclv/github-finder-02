import React from 'react'

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">Github finder</h1>
        <p className="mb4 text-2xl font-light">New project using React</p>
        <p className="text-lg text-gray-400">
            Version <span className="text-white">1.0</span>
        </p>
        <p className="text-lg text-gray-400">
            You can reach more on github <a href="/about" className="text-white">Github</a>
        </p>
    </div>
  )
}

export default About