import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        console.log({ name, email, photo, password })
        createUser(email, password).then(result => {
            const user = result.user;
            updateUser({ displayName: name, photoURL: photo })
                .then(() => {
                    setUser({...user,displayName: name, photoURL: photo})
                    console.log(user)
                    navigate("/")
                })
                .catch((error) => {
                    console.log(error)
                    setUser(user)
                });
            setUser(user);

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    return (
        <div className='flex justify-center items-center md:min-h-screen'>
            <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form onSubmit={handleSubmit} className="card-body ">
                    <h1 className='text-2xl font-semibold my-2 text-center'>Login Your Account</h1>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className=" font-semibold">Your Name</label>
                        <input name='name' required type="text" className="input" placeholder="Enter Your Name" />
                        {/* Photo URL */}
                        <label className=" font-semibold">Photo URL</label>
                        <input name='photo' required type="text" className="input" placeholder="Enter Your Photo URL" />
                        {/* Email */}
                        <label className=" font-semibold">Email address</label>
                        <input name='email' required type="email" className="input" placeholder="Enter Your Email Address" />
                        {/* Password */}
                        <label className="font-semibold">Password</label>
                        <input name='password' required type="password" className="input" placeholder="Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-[#706F6F] text-center mt-2 font-semibold'>Already Have an Account ?<Link to="/auth/login" className='text-[#F75B5F]'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;