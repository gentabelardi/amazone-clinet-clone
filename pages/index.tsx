import type { NextPage } from 'next'
import Link from 'next/link'
import Crousel from '../components/molecules/Carousel'
import Navbar from '../components/molecules/Navbar'

const Home: NextPage = () => {
  return (
    <div >
      <Navbar />
      <div className="relative ">
        <Crousel />
        <div className="grid p-5 grid-cols-4  gap-4 ">
          {[1, 2, 3, 4, 5].map(i => {
            return <div className="flex flex-col bg-white p-4 px-5">
              <h1 className="text-black text-xl mb-2 font-bold">Dresess</h1>
              <img src="./dummy/dummy-1.jpg" alt="" className="h-[350px] object-cover" />
              <div className="flex my-2">
                <Link href="#">
                  <a className=" text-blue-600  text-sm font-semiBold">Shop now</a>
                </Link>
              </div>
            </div>

          })}
        </div>

      </div>

    </div>
  )
}

export default Home
