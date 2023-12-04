import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCamps from "../../../hooks/useCamps";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageCamps = () => {
    const [popularcamp, , refetch] = useCamps();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (camp) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/popularcamp/${camp._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${camp.camp_name} has been deleted.`,
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle
                heading={"Popular Camps"}
                subHeading={"--Hurry Up--"}
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Scheduled Date and Time</th>
                            <th>Location</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            popularcamp.map((camp, index) => <tr key={camp._id}>
                                <th>{index + 1}</th>
                                <td>{camp.camp_name} </td>
                                <td>{camp.scheduled_date}, {camp.scheduled_time} </td>
                                <td>{camp.venue} </td>
                                <td>
                                    <Link to={`/dashboard/updateCamp/${camp._id}`}>
                                        <button
                                            className="btn btn-ghost text-white bg-[#11e4a5]"
                                        >Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(camp)}
                                        className="btn btn-ghost bg-[#11e4a5]"
                                    ><FaRegTrashAlt className="text-red-600 text-xl" /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCamps;