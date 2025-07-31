import React from 'react';
import { X } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { handleLogin } from "../../services/userAuth";

type Toggle = {
  onClose: () => void;
};

const LoginModal = ({ onClose }: Toggle) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-md shadow-lg p-6 relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* OLX Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
            alt="OLX Logo"
            className="h-10"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-center mb-4">Login</h2>

        {/* Google Login Button */}
        <button
          onClick={() => handleLogin(onClose)}
          className="w-full mt-4 bg-white text-gray-700 py-2 rounded hover:bg-slate-100 transition border border-gray-300 flex items-center justify-center gap-x-2"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Info */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By continuing, you agree to OLX's{' '}
          <span className="text-blue-600 underline">Terms of use</span> and{' '}
          <span className="text-blue-600 underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
