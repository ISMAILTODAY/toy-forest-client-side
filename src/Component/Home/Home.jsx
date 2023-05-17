import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportCar from '../SportCar/SportCar';
import PoliceCar from '../PoliceCar/PoliceCar';
import TruckCar from '../truckCar/truckCar';

const Home = () => {
    const [toys, setToys] = useState({})
    useEffect(() => {
        fetch('policeCar.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }, [])
    const { policeCars, sportCars, truckToys } = toys;
    // console.log(policeCar)
    return (
        <div >
            <div>
                <div className="carousel w-full h-[32rem]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/m40bfwK/slide1.jpg" className=" w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/h8DVW14/slide2.jpg" className=" w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/P5SWv5h/slide3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/p1V4MRs/slide4.jpg" className=" w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* gallary section */}


            <div className='px-48'>
                <section>
                    <h1 className='text-center md:text-5xl my-5 font-semibold'>Toy Gallary</h1>
                    <div className='grid md:grid-cols-3 gap-5 my-12'>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/KqR2nkG/sport-Car1.jpg" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/Qv9Sv7f/sport-Car2.webp" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/R0n8V8P/sport-Car3.jpg" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/6BZMYZ8/track1.webp" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/pKHBfB7/track2.jpg" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/cckmnN5/tack.jpg" alt="" />



                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/23G5dnX/police1.jpg" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/Xp2LfTs/police2.jpg" alt="" />
                        </div>
                        <div className=' border shadow-lg rounded-lg'>
                            <img className='w-[70%]' src="https://i.ibb.co/3fzfVLz/police3.jpg" alt="" />
                        </div>

                    </div>
                </section>


                {/* categotry section */}

                <section>
                    <h1 className='text-center md:my-12 my-5 md:text-5xl font-semibold'>Shop By Category</h1>
                    <div className='flex justify-center'>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Sport Car</Tab>
                                    <Tab>Truck</Tab>
                                    <Tab>Mini Police Car</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5'>
                                        {
                                            sportCars && sportCars.map(sportCar => <SportCar
                                                sportCar={sportCar}
                                            ></SportCar>)
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5'>
                                        {
                                            truckToys && truckToys.map(truckToy => <TruckCar
                                                truckToy={truckToy}
                                            ></TruckCar>)
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='grid md:grid-cols-3 gap-5'>
                                        {
                                            policeCars && policeCars.map(policeCar => <PoliceCar
                                                policeCar={policeCar}
                                            ></PoliceCar>)
                                        }
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;