import one from '../../../assets/banner/one.jpg'
import two from '../../../assets/banner/two.jpg'
import three from '../../../assets/banner/three.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full h-[500px]">
                    <img src={two} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full h-[500px] carousel-img">
                    <img src={one} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full h-[500px]">
                    <img src={three} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;