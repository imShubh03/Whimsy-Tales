import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        try {
            await axios.post('https://api.web3forms.com/submit', data);
            toast.success('Message sent successfully!');
            form.reset();
        } catch (error) {
            toast.error('Error sending message. Please try again.');
        }
    };

    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-16 px-4'>
                <div className='mt-4 md:mt-16 items-center justify-center'>
                    <div className="flex min-h-screen items-center justify-start bg-white dark:bg-slate-800 dark:text-white">
                        <div className="mx-auto w-full max-w-lg">
                            <h1 className="text-4xl font-medium">Contact us</h1>
                            <p className="mt-3">Email us at help@whymsytales.com or message us here:</p>

                            <form onSubmit={handleSubmit} className="mt-10">
                                <input type="hidden" name="access_key" value="adda50b6-d06e-4f9a-9dff-2db7f64f6766" />
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="relative z-0">
                                        <input type="text" name="name" required className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                                    </div>
                                    <div className="relative z-0">
                                        <input type="email" name="email" required className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                                    </div>
                                    <div className="relative z-0 col-span-2">
                                        <textarea name="message" rows="5" required className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white" placeholder=" "></textarea>
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                                    </div>
                                </div>
                                <button type="submit" className="mt-5 rounded-md bg-indigo-700 px-10 py-2 text-white hover:bg-blue-600 transition duration-200">
                                    Send Message
                                </button>
                            </form>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
