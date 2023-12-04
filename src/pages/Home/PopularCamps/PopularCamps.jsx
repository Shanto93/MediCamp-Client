import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCampLayout from "./PopularCampLayout/PopularCampLayout";

const PopularCamps = () => {
    const [popularCamps, setPopularCamps] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popularcamp')
        .then(res => res.json())
        .then(data => setPopularCamps(data))
    },[])

    return (
        <div>
            <SectionTitle
            heading={"Popular Medical Camps"}
            subHeading={"Here are some popular medical camps"}
            ></SectionTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {popularCamps.slice(0, 6).map((camp) => (
                    <PopularCampLayout camp={camp} key={camp._id}></PopularCampLayout>
                ))}
            </div>
            
        </div>
    );
};

export default PopularCamps;