import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import GoogleSignIn from './GoogleSignIn';


const Register = () => {
    const { registerUser } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        registerUser(data.email, data.password, data.name)
    }

    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-5/6 md:w-1/4 border-2 rounded px-10 pt-5 pb-5 mt-5">
                    <h3 className="text-3xl mb-5">Create an account</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl mb-5 block"
                            placeholder="Your name"
                            {...register("name", { required: true, maxLength: 80 })}
                        />

                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl mb-5 block"
                            placeholder="Email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />

                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl mb-5 block"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />

                        <input className="bg-primary w-full px-4 py-3 rounded text-white cursor-pointer	" type="submit" value="Register" />
                    </form>
                    <Link to="/login">
                        <p className="text-lg font-mediums text-primary text-center my-6 hover:underline">Already have an account ?</p>
                    </Link>
                    <GoogleSignIn text="Register with Google" />
                </div>
            </div>
        </>
    );
};

export default Register;