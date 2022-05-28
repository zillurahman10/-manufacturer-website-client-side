import React from 'react';

const Coundown = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: 'url(https://htmldemo.net/lukas/lukas/assets/img/bg/bg-car.png)', backgroundSize: 'cover' }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div class="flex flex-col">
                                <span class="countdown font-mono text-5xl">
                                    <span></span>
                                </span>
                                days
                            </div>
                            <div class="flex flex-col">
                                <span class="countdown font-mono text-5xl">
                                    <span></span>
                                </span>
                                hours
                            </div>
                            <div class="flex flex-col">
                                <span class="countdown font-mono text-5xl">
                                    <span></span>
                                </span>
                                min
                            </div>
                            <div class="flex flex-col">
                                <span class="countdown font-mono text-5xl">
                                    <span></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Coundown;