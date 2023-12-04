import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
// import useAxiosPublic from './../../../hooks/useAxiosPublic';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCamps = () => {
    const { register, handleSubmit } = useForm();
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data);
        axiosSecure.post('/popularcamp',data)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data Inserted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <SectionTitle
                heading={"Add An Camps"}
                subHeading={"What's new"}
            ></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center w-full">
                    <div className="w-3/4">
                        {/* camp Name and Image Column */}
                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Camp Name</span>
                                </label>
                                <input type="text" {...register("camp_name", { required: true })} placeholder="Camp Name" className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photo")} placeholder="Your Photo" className="input input-bordered" />
                                {/* <input type="file" {...register("photo", { required: true })} className="file-input w-full max-w-xs" /> */}
                            </div>
                        </div>

                        {/* Camp Fees and Scheduled date */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" {...register("scheduled_date", { required: true })} placeholder="Date" className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Fees</span>
                                </label>
                                <input type="number" {...register("camp_fees", { required: true })} placeholder="Fees" className="input input-bordered" />
                            </div>
                        </div>
                        {/* Venue and Scheduled time */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="time" {...register("scheduled_time", { required: true })} placeholder="Time" className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Venue</span>
                                </label>
                                <input type="text" {...register("venue", { required: true })} placeholder="Venue" className="input input-bordered" />
                            </div>
                        </div>
                        {/* Service and Professionals */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Specialized Service</span>
                                </label>
                                <input type="text" {...register("specialized_service", { required: true })} placeholder="Service" className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Healthcare Professionals</span>
                                </label>
                                <input type="text" {...register("healthcare_professionals", { required: true })} placeholder="Healthcare Professionals" className="input input-bordered" />
                            </div>
                        </div>
                        {/* Target Audience and details */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Target Audience</span>
                                </label>
                                <input type="text" {...register("target_audience", { required: true })} placeholder="Target Audience" className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" {...register("details", { required: true })} placeholder="Details" className="input input-bordered" />
                            </div>
                        </div>

                        <button type="submit" className="btn w-full mt-7 bg-[#11e4a5] text-white font-bold hover:bg-[#90d4df]">Add Camp</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCamps;