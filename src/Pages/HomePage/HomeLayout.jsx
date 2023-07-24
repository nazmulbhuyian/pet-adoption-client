import AboutPet from "./AboutPet/AboutPet";
import AllPets from "./AllPets/AllPets";
import Banner from "./Banner/Banner";


const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AllPets></AllPets>
            <AboutPet></AboutPet>
        </div>
    );
};

export default HomeLayout;