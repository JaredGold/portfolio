import React from 'react'

const About = () => {
  return(
    <div className="min-h-screen bg-gray-50 w-100% flex justify-center items-center flex-col" id="about">
      <div className="flex flex-row space-x-12 m-10 max-w-4xl">
        <img alt="pic of me goes here" src="https://picsum.photos/300/400" className="border-2 shadow-md" />
        <div>
          <p>
            This here is a paragraph which is all about why and how I became a programmer.
            It was obviously a lot of work but at least I am here and grateful now.
            I love what I have done to get here.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-center">Frameworks I Know</h3>
        <ul className="flex flex-row space-x-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Tailwind CSS</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>React.js</li>
        </ul>
      </div>
    </div>
  )
}

export default About