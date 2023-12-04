import './Workshop.css'
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
const Workshop = () => {
    return (
        <div className='workshop-section bg-fixed pt-8 text-white my-20'>
            <SectionTitle
                heading={"Workshop"}
                subHeading={"Here is our today's workshop"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-600 bg-opacity-25 py-20 pt-12 px-28'>
                <div>
                    <img src="https://i.postimg.cc/mkN4Qn6m/workshop02.jpg" alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='text-3xl'>Health Awareness Workshop</p>
                    <p className='py-3'>01 Dec,2023</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo reiciendis amet quia quos praesentium totam autem cupiditate beatae vero labore officiis dolorem a placeat impedit alias iusto, expedita eaque, laborum ipsum quam. Nam doloribus ut repudiandae culpa explicabo deleniti? Animi aliquid quae nihil laudantium exercitationem veritatis officiis asperiores incidunt!</p>
                    <button className="btn bg-[#11e4a5] text-white hover:bg-[#77eac7] border-0 mt-2">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Workshop;