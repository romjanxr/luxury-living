import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const GoogleSignIn = ({ text }) => {
    const { googleSignIn } = useAuth();

    return (
        <div className="border-t border-gray-200 mt-6">
            <p className="text-center text-gray-400 py-4">OR </p>
            <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-full w-full py-2 cursor-pointer hover:bg-gray-100" onClick={googleSignIn}>
                <FcGoogle className="w-6 h-6" />
                <span className="poppins">{text}</span>
            </div>
        </div>
    );
};

export default GoogleSignIn;