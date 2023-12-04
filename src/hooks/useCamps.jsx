import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";


const useCamps = () => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic()
    const { data: popularcamp = [], isPending: loading, refetch } = useQuery({
        queryKey: ['popularcamp'],
        queryFn: async() => {
            const res = await axiosPublic.get('/popularcamp')
            return res.data;
        }
    })
    return [popularcamp, loading, refetch]
};

export default useCamps;