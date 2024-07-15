import React from "react";


function Banner() {
    return (
        <>
            <div className=" max-w-screen-xl container mx-auto md:px-16 px-4 flex flex-col md:flex-row my-4">
                <div className=" w-full md:w-1/2 mt-8 md:mt-20 order-2 md:order-1">
                    <div className=" space-y-8">
                        <h1 className=" text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam eum blanditiis error dicta sequi!</h1>
                        <p className=" text-lg ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, amet. Aliquid sit nihil quas, libero magnam tenetur ad incidunt dolore aut necessitatibus, unde excepturi amet!</p>

                        {/* email */}
                        <label className="input input-bordered flex items-center gap-2 dark:bg-slate-800 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>

                        {/* button */}
                        <button className="btn btn-primary">Primary</button>
                    </div>
                </div>
                <div className=" w-full md:w-1/2 order-1 mt-16 md:mt-5 dark:bg-slate-800 dark:text-white">
                    <img src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1720964411~exp=1720968011~hmac=76451e1d11c5b607f7c3e0c39d1db3f233563d30a741f27eb5f4d1b761b7e29d&w=740" alt="book" className=" h-96 w-96 md:ml-6 md:mt-6" />
                </div>
            </div>
        </>
    );
}

export default Banner;
