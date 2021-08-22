import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-10 sm:px-40">
        <nav className="mt-10">
          <a className="flex flex-row items-center" href="/">
            <img src="./assets/logo-cp.png" width="100px"/>
            <div className="flex flex-col ml-2 mt-2">
              <h1 className="font-dmserif text-black-primary text-2xl">Creator <span className="text-blue-light">Pair</span></h1>
              <p className="-mt-2 ml-1 font-dmsans">beta</p>
            </div>
          </a>
          <div className="float-right -mt-20 flex justify-center items-center">
          <a className=" bg-black-primary flex-grow w-30  px-6 py-2 rounded-full cursor-pointer" href="/">
            <p className="text-white font-dmsans text-lg font-bold">Join Now</p>
          </a>
          </div>
       </nav>
        <div className="flex flex-col-reverse sm:flex-row h-screen -mt-16 items-center justify-between">
          <div className="flex flex-col sm:text-left text-center font-dmserif">
              <h2 className="font-dmsans text-blue-dark text-xl mb-4">An <b>Opensource</b> space for Creators</h2>
              <h1 className="sm:text-5xl xl:text-5xl text-5xl">
                <span className="text-blue-light mr-2">Pair</span> 
                with Creators and <br className="sm:flex xl:flex hidden"></br> work on new ideas
              </h1>
            <a className="justify-center flex bg-black-primary px-6 py-2 flex-shrink-0 w-32 mt-4 rounded-full cursor-pointer" href="/">
              <p className="text-white font-dmsans text-lg font-bold">Join Now</p>
            </a>
          </div>
          <div className="flex justify-center sm:justify-end">
            <img src="./assets/3d/phone-pair.png" className="w-full sm:w-3/5"/>
          </div>
        </div>
        </main>
        <div className="flex  px-10 sm:px-40 flex-col-reverse sm:flex-row h-screen bg-black-primary items-center justify-between">
          <div className="flex-none w-1/3">
            <img src="./assets/3d/writing.png"/>
          </div>
          <div className="flex-none flex-col justify-start sm:text-left text-center">
              <h2 className="font-dmsans text-blue-dark text-3xl mb-4 font-bold">Why Creative Pair?</h2>
              <h1 className="sm:text-4xl text-4xl  font-dmserif text-white">
                <span className="text-blue-light mr-2">Power of Writing</span> 
                is often ignored;<br className="flex-none"></br> True creativity and collaboration <br></br> is falling :(
              </h1>
          </div>
        </div>



      <footer className="flex bg-black-primary items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}
