import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, img, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const customerName = form.firstName.value + " " + form.lastName.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: customerName,
            email,
            phone,
            address,
            message,
            status : "Pending"
        }
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Your Order Is Placed Successfully...");
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className="hero h-80 w-2/3 mx-auto" style={{ backgroundImage: `url(${img})`, backgroundPosition: "bottom" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content">
                    <div>
                        <h1 className="mb-5 text-5xl text-red-600 font-bold">{title}</h1>
                    </div>
                </div>
            </div>

            <div className="w-2/3 my-20 mx-auto">
                <h1 className='text-center text-2xl font-bold text-red-600 mb-4'>Checkout</h1>

                <form onSubmit={handleCheckout} className='border-2 p-2'>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={user?.email} required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+8801)</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="address" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div>
                        <textarea name='message' className="textarea textarea-bordered rounded-none col-span-2" placeholder="Messages..."></textarea>
                    </div>
                    <div className='flex justify-evenly'>
                        <button type='submit' className='btn btn-outline btn-accent rounded-none my-10'>
                            Place Order
                        </button>
                        <Link to="/orders">
                            <button className='btn btn-outline btn-accent rounded-none my-10'>
                                Check Order <FaArrowRight className='ml-1'></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </form>

                <p className="mt-5">Check out the original floating label form elements on <Link to="/" className="text-blue-600 hover:underline">Car Hub BD</Link> and browse other similar components built with Tailwind CSS.
                </p>
            </div>
        </div>
    );
};

export default Checkout;