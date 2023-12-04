const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10 md:w-1/3 mx-auto">
            <h2 className="text-3xl font-bold text-center">{heading} </h2>
            <p className="text-base text-[#3b3a3a] border-t-2 pt-2 text-center mt-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;