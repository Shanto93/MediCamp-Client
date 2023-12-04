import { useLoaderData } from "react-router-dom";
import AvailableCampsLayout from "./AvailableCampsLayout/AvailableCampsLayout";
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import { Helmet } from "react-helmet-async";

const AvailableCamps = () => {
    const camps = useLoaderData();
    console.log(camps);
    return (
        <div>
            {/* helmet */}
            <Helmet>
                <title>MediCamp Care | Available Camps </title>
            </Helmet>
            <div>
            <SectionTitle
            heading={"Available Camps"}
            subHeading={"Here are all available camps.."}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    camps.map(camp => <AvailableCampsLayout key={camp._id} camp={camp}></AvailableCampsLayout>)
                }
            </div>
        </div>
        </div>
    );
};

export default AvailableCamps;