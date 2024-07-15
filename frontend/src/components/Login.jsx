import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        // handle login logic here
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg text-center">Login</h3>
                        <hr />

                        {/* email */}
                        <div className='flex flex-col mt-5 space-y-2'>
                            <span>Your email</span>
                            <input type="email" placeholder='Your email' className=' dark:bg-slate-800 dark:text-white w-80 px-2 py-1 outline-none border'
                                {...register("email", { required: true })} />
                            {errors.email && <span className='text-sm text-red-600'>this field is required</span>}
                        </div>

                        {/* password */}
                        <div className='flex flex-col mt-5 space-y-2'>
                            <span>Your password</span>
                            <input type="password" placeholder='Your password' className=' dark:bg-slate-800 dark:text-white w-80 px-2 py-1 outline-none border'
                                {...register("password", { required: true })} />
                            {errors.password && <span className='text-sm text-red-600'>this field is required</span>}
                        </div>

                        {/* button */}
                        <div className='flex justify-around mt-4'>
                            <button type='submit' className='bg-purple-700 text-white px-4 py-1 rounded-md'>
                                Login
                            </button>
                            <p>Not registered?
                                <Link to="/signup" className='underline text-blue-600 cursor-pointer'>
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
