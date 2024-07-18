import React from 'react';

function Card({ item }) {
    const handleClick = () => {
        window.open(item.url, '_blank');
    };

    return (
        <>
            <div className='mt-4 my-4' onClick={handleClick}>
                <div className="card bg-base-100 sm:w-72 md:w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white cursor-pointer">
                    <figure>
                        <img
                            src={item.image}
                            alt="Book cover"
                            className="w-64 h-64"
                        />
                    </figure>
                    <div className="card-body h-48 overflow-hidden flex flex-col justify-between">
                        <h2 className="card-title flex items-center justify-between">
                            {item.name}
                            <div className="badge badge-secondary ml-2">NEW</div>
                        </h2>
                        <p className="truncate">{item.title}</p>
                        <div className="card-actions flex justify-between mt-2">
                            <div className="badge badge-outline">{item.category}</div>
                            <div className="badge badge-outline">${item.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
