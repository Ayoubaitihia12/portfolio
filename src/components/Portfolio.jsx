import React from 'react'
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import fiber from '../assets/portfolio/fiber.jpg'
import xoco from '../assets/portfolio/xoco.png'
import fylo from '../assets/portfolio/fylo.jpg'
import loop from '../assets/portfolio/loop.jpg'
import cyborg from '../assets/portfolio/cyborg.jpg'
import tMovie from '../assets/portfolio/tmovie.png'
import foodle from '../assets/portfolio/foodle.png'

const Portfolio = () => {

    const portfolios = [
        {
          id: 1,
          src: foodle,
          demo : "https://foodle-xi.vercel.app/",
          code: "https://github.com/Ayoubaitihia12/Foodle"
        },
        {
          id: 2,
          src: tMovie,
          demo : "https://t-movies-zeta.vercel.app/",
          code: "https://github.com/Ayoubaitihia12/tMovies"
        },
        {
          id: 3,
          src: fiber,
          demo : "https://frontend-fiber-project.vercel.app/",
          code: "https://github.com/Ayoubaitihia12/frontend-fiber-project"
        },
        {
          id: 4,
          src: xoco,
          demo : "https://xoco-react-shopping-cart.vercel.app/",
          code: "https://github.com/Ayoubaitihia12/XOCO-react-shopping-cart"
        },
        {
          id: 5,
          src: fylo,
          demo : "https://fylo-dark-theme-landing-page-five-ebon.vercel.app/",
          code: "https://github.com/Ayoubaitihia12/fylo-dark-theme-landing-page"
        },
        {
          id: 6,
          src: loop,
          demo : "https://loop-studio-neon.vercel.app/",
          code: "https://github.com/Ayoubaitihia12/LoopStudio"
        },
        {
          id: 7,
          src: cyborg,
          demo : "https://github.com/Ayoubaitihia12/cyborg-project-using-react",
          code: "https://github.com/Ayoubaitihia12/cyborg-project-using-react"
        }
      ];
    
    return (
        <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
        >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src,demo ,code }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 object-cover w-full h-[170px] hover:scale-105"
                />
                <div className="flex items-center justify-center">
                    <a href={demo} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                    </a>
                    <a href={code} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Portfolio