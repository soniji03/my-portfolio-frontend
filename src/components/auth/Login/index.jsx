import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import UnAuthenticatedLayouts from '../../../layouts/UnAuthenticatedLayout';
import { loginFailure, loginSuccess, } from '../../../authSlice';
import '../../../Home';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../../Forgot-password'
import ForgotPassword from '../../../Forgot-password';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { API_HOST_URL } from '../../../../config';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_HOST_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          {
            email: email,
            password: password,
          }
        ),
      });

      const data = await response.json();
      if (response.status !== 200) {
        toast.error(data.message);
        return
      }
      console.log(data)
      dispatch(loginSuccess(data));
      localStorage.setItem('userData', JSON.stringify(data));
      toast.success("Successfully login");
      navigate('/home');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <UnAuthenticatedLayouts>
  
<section className="bg-[#D0D8FF] min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
        <h1 className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 sm:space-y-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
          </div>
          <div>
            <div className='flex items-center justify-between'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <div className="text-sm">
                <Link to="/forgot-Password" onClick={() => setShowForgotPassword(true)} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className='relative mt-1'>
              <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                id="password" 
                placeholder="••••••••" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                required 
              />
              {password && (
                <button  
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
          </div>
          <button 
            disabled={isLoading} 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <p className="text-sm text-center text-gray-500">
            Not a member? <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">Sign UP</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  {showForgotPassword && (
    <ForgotPassword onClose={() => setShowForgotPassword(false)} />
  )}
</section>

    </UnAuthenticatedLayouts>
  )
}
export default LoginPage