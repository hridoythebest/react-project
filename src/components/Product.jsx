import React from 'react';
import mobile from "../assets/mobile-login.png"

const Product = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-12 '>
                <div className='md:w-6/12 mx-auto '>
                    <img className='w-full h-full' src={mobile} alt="" />
                </div>

                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralGray font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                    <p className='md:w-3/4 text-sm text-neutralGray mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralGray transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                </div>
            </div>

            {/* company stat */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 '>
                <div className='flex flex-col md:flex-row  justify-between items-center gap-8'>
                    <div className='md:w-1/3 '>
                        <h2 className='text-4xl text-neutralGray font-semibold mb-4 md:w-42/3'>Helping a local <br /> <span className='text-brandPrimary'> business reinvent itself</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>We reached here with our hard work and dedication</p>
                    </div>
                    {/* stats  */}
                    <div className='md:w-2/3 mx-auto '>
                        <div>
                            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Product;