import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'>
      <div className='max-w-screen-lg p-6 mx-auto justify-center flex flex-col w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
          As a junior web developer, I am passionate about building beautiful and functional 
          websites that meet the needs of users. With a solid foundation in HTML, CSS, Tailwind CSS,
          JavaScript , and React JS. I am constantly learning and staying up to date with the latest web
          development trends and technologies. I am eager to take on new challenges and contribute to
          projects that make a meaningful impact. I am looking for an opportunity to join a company where
          I can grow and learn as a front-end developer and where I can put my skills to use in real-world
          projects.
        </p>

        <br/>
        {/* <p className='text-xl'>
        I'm looking forward to utilizing my Software Development Skills in a Dynamic Environment and Planning
        to become a Full-Stack developer in the nearby future.
        </p> */}

      </div>
    </div>
  )
}

export default About