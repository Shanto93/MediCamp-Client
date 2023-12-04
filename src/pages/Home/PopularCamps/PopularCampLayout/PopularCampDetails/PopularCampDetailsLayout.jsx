import { useForm } from "react-hook-form";
import useAdmin from "../../../../../hooks/useAdmin";
// import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const PopularCampDetailsLayout = ({ cam }) => {
    const { camp_name, photo, camp_fees, scheduled_date, scheduled_time, venue, specialized_service, target_audience, healthcare_professionals, details } = cam;
    const [isAdmin] = useAdmin();

    const { register, handleSubmit } = useForm();
    // const axiosPublic = useAxiosPublic();
    // const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Inserted Successfully',
            showConfirmButton: false,
            timer: 1500
        })
            
    }


    return (
        <div>
            <div className="md:flex justify-center items-center gap-7">
                <div className="md:flex-1">
                    <img src={photo} alt="" />
                </div>
                <div className="md:flex-1">
                    <p className="text-3xl font-bold">{camp_name}</p>
                    <p><span className="font-semibold text-xl">Venue:</span> {venue}</p>
                    <p><span className="font-semibold text-xl">Specialized Service:</span> {specialized_service}</p>
                    <p><span className="font-semibold text-xl">Time:</span>{scheduled_date}, {scheduled_time} </p>
                    <p><span className="font-semibold text-xl">Fees:</span> {camp_fees} </p>
                    <p><span className="font-semibold text-xl">Target Audience: </span>{target_audience} </p>
                    <p><span className="font-semibold text-xl">Healthcare Professionals: </span>{healthcare_professionals} </p>
                    <p>{details} </p>
                </div>
            </div>
            {
                isAdmin ?
                    <>
                        <button className="btn bg-[#11e4a5] mt-5" disabled>Join Camp</button>

                    </>
                    :
                    <>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()}
                            className="btn bg-[#11e4a5] mt-5 text-red-800">Join Camp</button>

                    </>
            }
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    {/* modal info */}



                    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center w-full">
                        <div className="w-3/4">
                            {/* Name and Age Column */}
                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                </div>

                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input type="text" {...register("age")} placeholder="Your age" className="input input-bordered" />
                                    {/* <input type="file" {...register("photo", { required: true })} className="file-input w-full max-w-xs" /> */}
                                </div>
                            </div>

                            {/* Phone and Gender */}
                            <div className="md:flex gap-5">

                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" {...register("phone", { required: true })} placeholder="Your phone no" className="input input-bordered" />
                                </div>

                               <div>
                               <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                               <select className="select md:w-full max-w-xs" {...register("phone", { required: true })}>
                                    <option selected>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                               </div>


                            </div>
                            {/* Venue and Scheduled time */}
                            <div className="md:flex gap-5">

                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Camp Fees</span>
                                    </label>
                                    <input type="number" {...register("camp_fees", { required: true })} placeholder="Camp fees" className="input input-bordered" />
                                </div>

                            </div>

                            <button type="submit" className="btn w-full mt-7 bg-[#11e4a5] text-white font-bold hover:bg-[#90d4df]">Save Information</button>
                        </div>

                    </form>






                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PopularCampDetailsLayout;



