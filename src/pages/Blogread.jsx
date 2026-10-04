import React from 'react'
import img from '../assets/people-working-in-front-of-computer-3182763.png'
import img2 from '../assets/photo.jpg'

function Blogread() {
  return (
    <div className="bg-white min-h-screen font-sans text-[#282938]">
      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <section className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#282938] leading-tight tracking-tight max-w-3xl mx-auto">
            A UX Case Study on Creating a Studious Environment for Students
          </h1>
          <p className="text-sm md:text-base font-medium text-[#282938]/70 mt-4 md:mt-6">
            Andrew Jonson &nbsp; Posted on 27th January 2021
          </p>
        </section>

        {/* Featured Hero Image */}
        <section className="max-w-6xl mx-auto mb-12 md:mb-20">
          <img 
            src={img} 
            alt="Students working in a study environment" 
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </section>

        {/* Article Body Content */}
        <section className="max-w-3xl mx-auto space-y-10 md:space-y-14">
          {/* Article Section 1 */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#282938] leading-snug mb-4 md:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="text-base md:text-lg text-[#282938]/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
              <a href="#" className="text-[#2405F0] hover:underline font-medium">
                Excepteur sint occaecat
              </a>{' '}
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Article Section 2 */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#282938] leading-snug mb-4 md:mb-6">
              Ut enim ad minim veniam, quis nostrud.
            </h2>
            <p className="text-base md:text-lg text-[#282938]/70 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat{' '}
              <a href="#" className="text-[#2405F0] hover:underline font-medium">
                cupidatat non
              </a>{' '}
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-[#282938]/70 my-6 pl-2 leading-relaxed">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
            </ul>

            <p className="text-base md:text-lg text-[#282938]/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{' '}
              <a href="#" className="text-[#2405F0] hover:underline font-medium">
                exercitation ullamco
              </a>
              . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Article Section 3 */}
          <div>
            <div className="my-8 md:my-10">
              <img 
                src={img2} 
                alt="Students working in a study environment" 
                className="w-full h-auto max-h-[450px] object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#282938] leading-snug mb-4 md:mb-6">
              Ut enim ad minim veniam, quis nostrud.
            </h2>
            <p className="text-base md:text-lg text-[#282938]/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{' '}
              <a href="#" className="text-[#2405F0] hover:underline font-medium">
                exercitation ullamco
              </a>
              . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Blogread