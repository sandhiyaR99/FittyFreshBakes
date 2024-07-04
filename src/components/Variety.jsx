import { Link } from "react-router-dom"

const Variety = () => {
    return (
        <>
            <div className="mt-8 text-center">
                <h1 className=' mb-4 p-2 text-pink-600 font-semibold text-2xl'>Order For Same Day & Midnight</h1>
                <p>From sweet surprises to cherished moments, order a cake online and make memories sweeter.</p>
                <button className=" bg-pink-600 text-white rounded-full px-6 py-3 mt-6 hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600"><Link to={'/menulist'}>Menu</Link></button>
            </div>
        </>
    )
}
export default Variety