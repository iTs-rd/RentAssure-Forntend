import React, { useState } from "react";
import Slider from "./slider";
import HomePageCard from "./HomePageCard";
import Filter from "./Filter";
function Home() {
    return (
        <div style={{ marginInline: "3rem" }}>
            {/* <Slider /> */}
            <div className="row">
                <div className="col-3 d-none d-md-block">
                    <Filter />
                </div>
                <div className="col-12 col-md-9 ">
                    {/* Card of each product */}
                    <HomePageCard />
                    <HomePageCard />
                    <HomePageCard />
                </div>
            </div>
        </div>
    );
}

export default Home;
