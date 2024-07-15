import React from 'react'
import List from "../list.json"
import Card from './Card'
import { Link } from "react-router-dom"


function Book() {
    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-16 px-4 '>
                <div className=' mt-16 items-center justify-center text-center space-y-5'>
                    <h1 className='  text-xl font-semibold '>heelo its been long</h1>
                    <p className=' mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore voluptatibus laboriosam expedita id ut voluptates reiciendis nisi magnam accusamus aliquid sapiente? Doloremque neque blanditiis explicabo est quasi pariatur quibusdam?</p>
                    <Link to="/">
                        <button className=' bg-purple-600 px-4 py-2 text-white rounded-md mt-5'>Back</button>
                    </Link>
                </div>
                {/* render the cards here */}
                <div className=' mt-10 grid grid-cols-1 md:grid-cols-3'>
                    {
                        List.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Book