import one from '../assets/1.png'
import two from '../assets/5.png'
import three from '../assets/3.png'

const Categories = () => {
  return (
    <>
      <div className='m-5 bg-black bg-opacity-5 p-5'>
        <h1 className=' text-center mb-4 p-2 text-pink-600 font-semibold text-2xl'>Our Categories</h1>
        <div className="flex gap-0">
          <div className="relative w-1/3 h-fit border">
            <img
              src={one}
              alt="Special Cake 1"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-50 text-pink-700 text-center">
              <span className="text-lg font-bold">Customised cakes</span>
            </div>
          </div>
          <div className="relative w-1/3">
            <img
              src={two}
              alt="Special Cake 2"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-50 text-pink-700 text-center">
              <span className="text-lg font-bold">Birthday Cakes</span>
            </div>
          </div>
          <div className="relative w-1/3">
            <img
              src={three}
              alt="Special Cake 3"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-50 text-pink-700 text-center">
              <span className="text-lg font-bold">Wedding cakes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;