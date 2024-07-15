import React from 'react'

function Card({ item }) {
    return (
        <>
            <div className=' mt-4 my-4'>
                <div className="card bg-base-100 sm:w-72 md:w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card