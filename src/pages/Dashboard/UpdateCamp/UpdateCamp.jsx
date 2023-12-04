import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateCamp = () => {
    const {_id,camp_name, photo,camp_fees,scheduled_date, scheduled_time, venue,specialized_service,healthcare_professionals, target_audience, details } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    // console.log(camp);
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        axiosSecure.patch(`/popularcamp/${_id}`,data)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  reset();
            }
        })
        

    }


    return (
        <div>
            <SectionTitle
            heading={"Update Camp Information"}
            subHeading={"Refresh Information"}
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
                                <input type="text" {...register("camp_name", { required: true })} defaultValue={camp_name} className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photo")} defaultValue={photo} className="input input-bordered" />
                                {/* <input type="file" {...register("photo", { required: true })} className="file-input w-full max-w-xs" /> */}
                            </div>
                        </div>

                        {/* Camp Fees and Scheduled date */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" {...register("scheduled_date", { required: true })} defaultValue={scheduled_date} className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Fees</span>
                                </label>
                                <input type="number" {...register("camp_fees", { required: true })} defaultValue={camp_fees} className="input input-bordered" />
                            </div>
                        </div>
                        {/* Venue and Scheduled time */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="time" {...register("scheduled_time", { required: true })} defaultValue={scheduled_time} className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Venue</span>
                                </label>
                                <input type="text" {...register("venue", { required: true })} defaultValue={venue} className="input input-bordered" />
                            </div>
                        </div>
                        {/* Service and Professionals */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Specialized Service</span>
                                </label>
                                <input type="text" {...register("specialized_service", { required: true })} defaultValue={specialized_service} className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Healthcare Professionals</span>
                                </label>
                                <input type="text" {...register("healthcare_professionals", { required: true })} defaultValue={healthcare_professionals} className="input input-bordered" />
                            </div>
                        </div>
                        {/* Target Audience and details */}
                        <div className="md:flex gap-5">

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Target Audience</span>
                                </label>
                                <input type="text" {...register("target_audience", { required: true })} defaultValue={target_audience} className="input input-bordered" />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" {...register("details", { required: true })} defaultValue={details} className="input input-bordered" />
                            </div>
                        </div>

                        <button type="submit" className="btn w-full mt-7 bg-[#11e4a5] text-white font-bold hover:bg-[#90d4df]">Update Information</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;