import "../css/filter.css";

function Filter() {
    var bhk=['1RK/1BHK','2BHK','3BHK','4BHK','5+BHK'];
    var property_type=['Studio Apartment','Service Apartment','Residential House','Villa'];
    var furnishing=['Unfurnished','SemiFurnished','Furnishing'];
    var available_for=['Bachelor','Student','Couple','Family','Boys','Girls','GovernmentEmployee','Any'];
    var posted_by=['Owner','Agent']

    function FilterField(item){
        return(
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id={item} />
            <label className="form-check-label" for={item}>
                {item}
            </label>
        </div>
        );
    }

    function PanelCollapse(items,hding,colps){
        return(
            <div id={colps} className="panel-collapse collapse" role="tabpanel" aria-labelledby={hding}>
            <div className="panel-body">
                {items.map(item => FilterField(item))}
            </div>
        </div>
        );
    }

    function Panel(heading,items,hding,colps){
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id={hding}>
                    <h4 className="panel-title">
                        <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={"#"+colps}
                            aria-expanded="false"
                            aria-controls={colps}
                        >
                            {heading}
                        </a>
                    </h4>
                </div>
                {PanelCollapse(items,hding,colps)}
            </div>
        );

    }

    return(
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                        <a
                            class="collapsed"
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

            {Panel("BHK",bhk,"headingTwo","collapseTwo")}
            {Panel("Property Type",property_type,"headingThree","collapseThree")}
            {Panel("Furnishing",furnishing,"headingFour","collapseFour")}


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

            {Panel("Available For",available_for,"headingSix","collapseSix")}
            {Panel("Posted By",posted_by,"headingSeven","collapseSeven")}

        </div>

    );
}

export default Filter