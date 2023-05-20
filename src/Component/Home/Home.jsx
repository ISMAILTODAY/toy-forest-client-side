import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportCar from '../SportCar/SportCar';
import PoliceCar from '../PoliceCar/PoliceCar';
import TruckCar from '../truckCar/truckCar';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Home = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    const { policeCars, sportCars, truckToys } = toys;

    return (
        <div className='mt-24' >
            <Helmet>
                <title>TF -Home</title>
            </Helmet>
            <div>
                <div className="carousel w-full h-[32rem] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1447931958677-954446df5f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className=" w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1590912710590-4365e6e23c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveSUyMHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className=" w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1603008872397-17ede12ec8fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRveSUyMHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1516842632457-2123868c0583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRveSUyMHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className=" w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* gallary section */}


            <div className='md:px-48'>
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
                {/* Services */}
                <section className=''>
                    <h1 className='text-center text-5xl font-bold my-24'>Our Services</h1>

                    <div>
                        <div className='md:flex justify-center items-center gap-12'>
                            <div
                                data-aos="fade-right"
                                data-aos-delay="10"
                                data-aos-duration="2000"
                                className='border shadow p-3'
                            >
                                <img src="https://i.ibb.co/XbfWqfc/wholseel.png" alt="" />
                                <h1 className='text-center text-3xl font-semibold'>Wholesale</h1>
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-delay="10"
                                data-aos-duration="2000"
                                className='border shadow p-5'
                            >
                                <img src="https://i.ibb.co/sJpPMK5/home.jpg" alt="" />
                                <h1 className='text-center text-3xl font-semibold'>Home Delivery</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* order section */}

                <section>
                    <h1 className='text-center text-5xl font-bold mt-10'>Order Your Toy</h1>
                    <div className='md:flex justify-between items-center'>
                        <div className='md:flex flex-col gap-y-5'>
                            <input type="text" placeholder="Your Email" className="input input-bordered input-secondary w-full max-w-xs " />
                            <input type="text" placeholder="Toy Name" className="input input-bordered input-secondary w-full max-w-xs " />
                            <input type="text" placeholder="Quantity" className="input input-bordered input-secondary w-full max-w-xs " />
                            <input type="text" placeholder="Address" className="input input-bordered input-secondary w-full max-w-xs " />
                            <button className='btn btn-primary  '>Send</button>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="5"
                            data-aos-duration="2000"
                            className='w-[50%]'
                        >
                            <img src="https://i.ibb.co/svxmTFJ/order.png" alt="" />
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Home;