import React from "react";
import Slider from "./slider";
import HomePageCard from "./HomePageCard";
import "../css/filter.css";
function Home() {
    return (
        <div>
            {/* <Slider /> */}
            <div className="row">
                <div className="col-3 col-md-3  col-sm-4 col-xs-4 d-none d-md-block">
                    {/* <div class="container"> */}
                    {/* <div class="row"> */}
                    {/* <div class="col-12 col-sm-8 col-xs-3"> */}
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        Budget
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in " role="tabpanel" aria-labelledby="headingOne">
                                <div class=" panel-body">
                                    <form class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="minimumPrice" class="form-control" id="minimumPrice" placeholder="Min." />
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <input type="maximumPrice" class="form-control" id="maximumPrice" placeholder="Max." />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        BHK
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="1BHK" />
                                        <label class="form-check-label" for="1BHK">
                                            1RK/1BHK
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="2BHK" />
                                        <label class="form-check-label" for="2BHK">
                                            2BHK
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="3BHK" />
                                        <label class="form-check-label" for="3BHK">
                                            3BHK
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="4BHK" />
                                        <label class="form-check-label" for="4BHK">
                                            4BHK
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="5PlusBHK" />
                                        <label class="form-check-label" for="5PlusBHK">
                                            5+BHK
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Property Type
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="studio" />
                                        <label class="form-check-label" for="studio">
                                            Studio Apartment
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="service" />
                                        <label class="form-check-label" for="service">
                                            Service Apartment
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="residential" />
                                        <label class="form-check-label" for="residential">
                                            Residential House
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="villa" />
                                        <label class="form-check-label" for="villa">
                                            Villa
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingFour">
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Furnishing
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div class="panel-body">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="fullyFurnished" />
                                        <label class="form-check-label" for="fullyFurnished">
                                            Fully Furnished
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="semiFurnished" />
                                        <label class="form-check-label" for="semiFurnished">
                                            Semi Furnished
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="unFurnished" />
                                        <label class="form-check-label" for="unFurnished">
                                            Unfurnished
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingFive">
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseFive"
                                        aria-expanded="true"
                                        aria-controls="collapseFive"
                                    >
                                        Area
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFive" class="panel-collapse collapse in " role="tabpanel" aria-labelledby="headingFive">
                                <div class=" panel-body">
                                    <form class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="minimumArea" class="form-control" id="minimumArea" placeholder="Min." />
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <input type="maximumArea" class="form-control" id="maximumArea" placeholder="Max." />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingSix">
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        Preferred Tenants
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                <div class="panel-body">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="bachelors" />
                                        <label class="form-check-label" for="bachelors">
                                            Bachelors
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="family" />
                                        <label class="form-check-label" for="family">
                                            Family
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="govService" />
                                        <label class="form-check-label" for="govService">
                                            Government Service
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingSeven">
                                <h4 class="panel-title">
                                    <a
                                        class="collapsed"
                                        role="button"
                                        data-toggle="collapse"
                                        data-parent="#accordion"
                                        href="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                        Posted By
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                <div class="panel-body">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="propertyOwner" />
                                        <label class="form-check-label" for="propertyOwner">
                                            Property Owner
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="Agent" />
                                        <label class="form-check-label" for="Agent">
                                            Agent
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div>
                    </div>
                </div> */}
                <div className="col-12 col-md-9 ">
                    {/* Card of each prodict */}
                    <HomePageCard id="2" />
                </div>
            </div>
        </div>
    );
}

export default Home;
