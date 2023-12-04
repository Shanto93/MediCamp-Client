import { Link } from "react-router-dom";

const AvailableCampsLayout = ({camp}) => {
    const { camp_name, photo, camp_fees, scheduled_date, scheduled_time, venue, specialized_service, target_audience, healthcare_professionals } = camp;
    return (
        <div className="card md:w-72 bg-transparent border-[#11e4a5] border-2 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={photo} alt="Shoes" className="rounded-xl h-44 w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{camp_name}</h2>
                <p>{venue}</p>
                <p><span className="font-semibold">Time:</span>{scheduled_date}, {scheduled_time}</p>
                <div>
                    <p>For {target_audience}</p>
                    <p><span className="font-semibold">Fees:</span> {camp_fees}</p>
                </div>
                <p>{specialized_service}</p>
                <p>{healthcare_professionals}</p>
                {/* <p>{
                    long_des.length>20? 
                    <p>{long_des.slice(0,20)} <span>more...</span></p>:''
                }</p> */}
                
                <div className="card-actions">
                    <Link><button className="btn bg-[#11e4a5] text-white">Join Camp</button></Link>


                    {/* <Link to={`/blog/${_id}`} > <button  className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Details</button></Link> */}

                </div>
            </div>
        </div>
    );
};

export default AvailableCampsLayout;