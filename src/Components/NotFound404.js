import {Link} from 'react-router-dom'

const NotFound404 = () => {
    return(
        <div className="flex flex-col w-full md:w-2/3 mt-32 mx-auto justify-center items-center">
            <div className='text-8xl font-bold'>SORRY!</div>
            <div className='text-2xl font-semibold'>That page cannot be found</div>
            <Link to="/"><div className='text-lg font-semibold mt-16 border-2 border-navbar p-4 hover:bg-navbar hover:text-white transition delay-100'>Return to home page</div></Link>
        </div>
    )
}

export default NotFound404;