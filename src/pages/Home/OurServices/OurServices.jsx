import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { TbRibbonHealth, TbDental } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";

const OurServices = () => {
    return (
        <div>
            <SectionTitle
                heading={"Our Services"}
                subHeading={"Here is the services we provide..."}
            ></SectionTitle>

            {/* Services Card */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {/* First Cart */}
                <div className="card md:w-72 bg-[#11e4a5] bg-opacity-25 shadow-xl">
                    <div className="flex justify-center items-center text-5xl h-20 w-20 bg-[#11e4a5] mt-10 mx-auto rounded-full text-white">
                        <TbRibbonHealth />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">General Health Checkup</h2>
                        <p className="mt-3">Discover our holistic General Health Checkup service, offering comprehensive screenings and assessments for proactive healthcare and early illness detection.</p>
                    </div>
                </div>

                {/* Second Cart */}
                <div className="card md:w-72 bg-[#11e4a5] bg-opacity-25 shadow-xl">
                    <div className="flex justify-center items-center text-5xl h-20 w-20 bg-[#11e4a5] mt-10 mx-auto rounded-full text-white">
                        <TbDental />

                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dental Checkup and Consultation</h2>
                        <p className="mt-3">Explore our Dental Checkup and Consultation service for expert oral examinations, personalized advice, and proactive dental care, ensuring your confident smile.</p>
                    </div>
                </div>

                {/* Third Cart */}
                <div className="card md:w-72 bg-[#11e4a5] bg-opacity-25 shadow-xl">
                    <div className="flex justify-center items-center text-5xl h-20 w-20 bg-[#11e4a5] mt-10 mx-auto rounded-full text-white">
                        <MdHealthAndSafety />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Geriatric Health Consultation</h2>
                        <p className="mt-3">Engage in our Geriatric Health Consultation for tailored assessments, compassionate care, and specialized guidance, ensuring optimal health and well-being in later stages of life.</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default OurServices;