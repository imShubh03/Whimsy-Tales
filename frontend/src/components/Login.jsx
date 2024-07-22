import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };

        try {
            const res = await axios.post("http://localhost:4001/user/login", userInfo);
            console.log("Login response:", res.data);
            if (res.data) {
                toast.success('Successfully LoggedIn!');
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                }, 1000)
                document.getElementById("my_modal_3").close()
            }
        } catch (err) {
            if (err.response) {
                console.log("Error response:", err.response);
                toast.error("Error: " + err.response.data.message);
                setTimeout(() => { }, 2000)

            } else {
                alert("An unexpected error occurred");
                console.log("Unexpected error:", err);
            }
        }
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
                            {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>

                        {/* password */}
                        <div className='flex flex-col mt-5 space-y-2'>
                            <span>Your password</span>
                            <input type="password" placeholder='Your password' className=' dark:bg-slate-800 dark:text-white w-80 px-2 py-1 outline-none border'
                                {...register("password", { required: true })} />
                            {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>

                        {/* button */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className="bg-purple-700 text-white px-4 py-1 rounded-md hover:bg-purple-600 ">
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
