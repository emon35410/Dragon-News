import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

const SocialLogin = () => {
    return (
        <div className='ml-3'>
            <h1 className='font-bold my-3'>log in With</h1>
            <div className='space-y-3'>
                <button className='btn w-full md:w-full btn-outline btn-primary flex items-center justify-center gap-2 text-sm sm:text-base whitespace-normal'>
                    <FcGoogle size={20} className='shrink-0' />
                    <span className='hidden sm:inline'>Login with Google</span>
                    <span className='sm:hidden'>Google</span>
                </button>

                <button className='btn mt-3 w-full btn-outline flex items-center justify-center gap-2 text-sm sm:text-base whitespace-normal'>
                    <VscGithub size={20} className='shrink-0' />
                    <span className='hidden sm:inline'>Login with GitHub</span>
                    <span className='sm:hidden'>GitHub</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;