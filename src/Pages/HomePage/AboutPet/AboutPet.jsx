

const AboutPet = () => {
    return (
        <div className="lg:mt-6 mt-4">
            <h2 className="text-3xl font-bold text-center text-blue-800">Planning to Adopt a Pet?</h2>
            <div className="lg:grid lg:grid-cols-3 gap-4 mx-auto mt-12">
                <div>
                    <h3 className="text-2xl font-bold text-center text-blue-600">Checklist for New Adopters</h3>
                    <h4 className="text-xl text-center mt-4">Help make the transition, as smooth as possible.</h4>
                    <div className="flex justify-center mt-8">
                        <button className="btn rounded-full border-sky-400 border-2 bg-white hover:bg-sky-400 text-blue-800 hover:text-white">Learn More</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center text-blue-600">COVID-19 Resources</h3>
                    <h4 className="text-xl text-center mt-4">Get the latest on adoption processes, learn how local shelters and rescue groups are adapting.</h4>
                    <div className="flex justify-center mt-8">
                        <button className="btn rounded-full border-sky-400 border-2 bg-white hover:bg-sky-400 text-blue-800 hover:text-white">Learn More</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center text-blue-600">Pet Adoption FAQs</h3>
                    <h4 className="text-xl text-center mt-4">Get answers to questions you haven't thought of.</h4>
                    <div className="flex justify-center mt-8">
                        <button className="btn rounded-full border-sky-400 border-2 bg-white hover:bg-sky-400 text-blue-800 hover:text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPet;