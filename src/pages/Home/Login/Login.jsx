import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                result.user;
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your account has been loggedin Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })

            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();

                // // update profile
                // updateProfile(result.user, {
                //     displayName: name, 
                //     photoURL: photo
                // })
                // .then()
                // .catch()
                // Navigate after Login
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <Helmet>
                <title>MediCamp Care | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url("https://i.postimg.cc/W4NVHJ3x/medical-camp-banner.jpg")' }}>
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center">
                    </div>
                    <div className="card flex-shrink-0 md:w-96 max-w-sm shadow-2xl bg-opacity-30 bg-[#11e4a5]">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-2xl md:text-4xl font-bold text-center text-white">Login now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <button className="btn bg-[#11e4a5] text-white hover:bg-[#77eac7] border-0 mt-2">Login</button>
                            </div>
                            <p className='text-center'>Do not have account?Please <Link to='/register' className='underline text-red-700'>register</Link> </p>
                        </form>
                        <button onClick={handleGoogleLogIn} className="btn bg-[#11e4a5] text-white border-0 hover:bg-[#77eac7] mx-8 mb-5">
                            <FcGoogle className='text-3xl'></FcGoogle>Google Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;