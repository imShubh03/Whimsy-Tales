import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';

function Signup() {
    
    //after success sign up  go to home 

    const location= useLocation()
    const navigate = useNavigate()

    const from=location.state?.from?.pathname || "/"

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        //post method from postman
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signup succesfull');
                    navigate(from,{replace:true})
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            })
    };

    return (
        <>
            <div className=' flex h-screen items-center justify-center dark:bg-slate-800 dark:text-white'>
                <div className=" w-[500px]">
                    <div className="modal-box dark:bg-slate-800 dark:text-white">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg text-center">Signup</h3>
                            <hr />

                            {/* username */}
                            <div className=' flex flex-col mt-5 space-y-2'>
                                <span>your name</span>
                                <input type="text" placeholder='your username' className=' dark:bg-slate-800 dark:text-white w-fit px-2 py-1 outline-none border'
                                    {...register("fullname", { required: true })} />
                                {errors.fullname && <span className='text-sm text-red-600'>this field is required</span>}
                            </div>

                            {/* email */}
                            <div className=' flex flex-col mt-5 space-y-2'>
                                <span>your email</span>
                                <input type="email" placeholder='your email' className=' dark:bg-slate-800 dark:text-white w-fit px-2 py-1 outline-none border'
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-sm text-red-600'>this field is required</span>}
                            </div>

                            {/* password */}
                            <div className=' flex flex-col mt-5 space-y-2'>
                                <span>your password</span>
                                <input type="password" placeholder='your email' className=' dark:bg-slate-800 dark:text-white w-fit px-2 py-1 outline-none border'
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-sm text-red-600'>this field is required</span>}
                            </div>

                            {/* button */}
                            <div className=' flex justify-around mt-4 space-x-4'>
                                <button className=' bg-purple-700 text-white px-3 py-1 rounded-md hover:bg-purple-600'>
                                    Signup
                                </button>
                                <p>have account?
                                    <button className=' underline text-blue-600 cursor-pointer '
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup