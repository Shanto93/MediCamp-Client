import { useLoaderData, useParams } from "react-router-dom";
import PopularCampDetailsLayout from "./PopularCampDetailsLayout";

const PopularCampDetails = () => {
    const popularCamps = useLoaderData();
    console.log(popularCamps)
    const { _id } = useParams();
    console.log(_id);
    const camp = popularCamps.filter(camp => camp._id == _id);
    console.log(camp);
    return (
        <div>
            {
                camp.map(cam => <PopularCampDetailsLayout key={cam._id} cam={cam}></PopularCampDetailsLayout>)
            }

        </div>
    );
};

export default PopularCampDetails;