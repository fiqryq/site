export default function WhatIdo() {
  return (
    <>
      <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        <span className="pr-2" role="img" aria-label="wave">
          🗿
        </span>
        What I Do
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full bg-gray-200 bg-opacity-30 p-4 rounded-lg space-y-2">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
            <span className="pr-2" role="img" aria-label="wave">
              ⚙
            </span>
            Building Project
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            I'm very active on Github to create open-source projects or personal projects, sometimes
            I also contribute to open-source projects.
          </p>
        </div>
        <div className="w-full bg-gray-200 bg-opacity-30 p-4 rounded-lg space-y-2">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
            <span className="pr-2" role="img" aria-label="wave">
              📗
            </span>
            Writing
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            I also often write to summarize my learning results. I usually write on medium or
            personal blogs.
          </p>
        </div>
        <div className="w-full bg-gray-200 bg-opacity-30 p-4 rounded-lg space-y-2">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
            <span className="pr-2" role="img" aria-label="wave">
              📦
            </span>
            Collaboration
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            I usually collaborate using Github and have collaborated with other programmers several
            times.
          </p>
        </div>
        <div className="w-full bg-gray-200 bg-opacity-30 p-4 rounded-lg space-y-2">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
            <span className="pr-2" role="img" aria-label="wave">
              🎨
            </span>
            Design
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            besides coding, I also like design, I usually design using Figma or similar tools.
          </p>
        </div>
      </div>
    </>
  )
}
