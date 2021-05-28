import "../css/filter.css";

function Filter(props) {
    var bhk=['1RK/1BHK','2BHK','3BHK','4BHK','5+BHK'];
    var property_type=['House','Room','Flat'];
    var furnishing=['Unfurnished','SemiFurnished','Furnishing'];
    var available_for=['Bachelor','Student','Couple','Family','Boys','Girls','GovernmentEmployee','Any'];
    var other=['Parking','Lift','CCTV','gym','gas_pipeline','fire_alarme']

    function applyFilter(){
        var filterValue={
            'pin':"",
            "rent__gte":"",
            "rent__lte":"",
            "bhk":[],
            "property_type":[],
            "furnishing":[],
            "area__gte":"",
            "area__lte":"",
            "available_for":[],
            "parking":"",
            "lift":"",
            "CCTV":"",
            "gym":"",
            "gas_pipeline":"",
            "fire_alarme":"",
        }
        
        filterValue.pin=document.getElementById("pincode").value

        filterValue.rent__gte=document.getElementById("minimumPrice").value
        filterValue.rent__lte=document.getElementById("maximumPrice").value
        
        if(document.getElementById("1RK/1BHK").checked)
            filterValue.bhk.push("1RK/1BHK")
        if(document.getElementById("2BHK").checked)
            filterValue.bhk.push("2BHK")
        if(document.getElementById("3BHK").checked)
            filterValue.bhk.push("3BHK")
        if(document.getElementById("4BHK").checked)
            filterValue.bhk.push("4BHK")
        if(document.getElementById("5+BHK").checked)
            filterValue.bhk.push("5+BHK")

        if(document.getElementById("House").checked)
            filterValue.property_type.push("House")
        if(document.getElementById("Room").checked)
            filterValue.property_type.push("Room")
        if(document.getElementById("Flat").checked)
            filterValue.property_type.push("Flat")
        
        if(document.getElementById("Furnishing").checked)
            filterValue.furnishing.push("Furnishing")
        if(document.getElementById("SemiFurnished").checked)
            filterValue.furnishing.push("SemiFurnished")
        if(document.getElementById("Unfurnished").checked)
            filterValue.furnishing.push("Unfurnished")
        
        filterValue.area__gte=document.getElementById("minimumArea").value
        filterValue.area__lte=document.getElementById("maximumArea").value

        if(document.getElementById("Bachelor").checked)
            filterValue.available_for.push("Bachelor")
        if(document.getElementById("Student").checked)
            filterValue.available_for.push("Student")
        if(document.getElementById("Couple").checked)
            filterValue.available_for.push("Couple")
        if(document.getElementById("Family").checked)
            filterValue.available_for.push("Family")
        if(document.getElementById("Boys").checked)
            filterValue.available_for.push("Boys")
        if(document.getElementById("Girls").checked)
            filterValue.available_for.push("Girls")
        if(document.getElementById("GovernmentEmployee").checked)
            filterValue.available_for.push("GovernmentEmployee")
        if(document.getElementById("Any").checked)
            filterValue.available_for.push("Any")

        if(document.getElementById("Parking").checked)
            filterValue.Parking="True"
        if(document.getElementById("Lift").checked)
            filterValue.Lift="True"
        if(document.getElementById("CCTV").checked)
            filterValue.CCTV="True"
        if(document.getElementById("gym").checked)
            filterValue.gym="True"
        if(document.getElementById("gas_pipeline").checked)
            filterValue.gas_pipeline="True"
        if(document.getElementById("fire_alarme").checked)
            filterValue.fire_alarme="True"

        props.setfilterValues(filterValue);
    }

    function FilterField(item){
        return(
            <div className="form-check">
            <input type="checkbox" onChange={() => applyFilter()} className="form-check-input" id={item} />
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

    function callapplyFilter(event){
        if(event.charCode===13)
            applyFilter()
    }

    return(
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingEight">
                    <h4 class="panel-title">
                        <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                        >
                            Pincode
                        </a>
                    </h4>
                </div>
                <div id="collapseEight" class="panel-collapse collapse in " role="tabpanel" aria-labelledby="headingEight">
                    <div class="panel-body">
                        <form class="row">
                            <div class="col-12 form-group">
                                <input type="pincode" onKeyPress={callapplyFilter} class="form-control" id="pincode" placeholder="Pincode" />
                            </div>
                            <div class="d-none form-group">
                                {/* this is because when enter is pressed page reload and this will prevent it */}
                                <input type="maximumPin" class="form-control" id="maximumPin" placeholder="Max." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

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
                            Rent
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in " role="tabpanel" aria-labelledby="headingOne">
                    <div class=" panel-body">
                        <form class="row">
                            <div class="col-md-6 form-group">
                                <input type="minimumPrice" onKeyPress={callapplyFilter} class="form-control" id="minimumPrice" placeholder="Min." />
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="maximumPrice" onKeyPress={callapplyFilter} class="form-control" id="maximumPrice" placeholder="Max." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {Panel("Property Type",property_type,"headingThree","collapseThree")}
            {Panel("BHK",bhk,"headingTwo","collapseTwo")}
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
                                <input type="minimumArea" onKeyPress={callapplyFilter} class="form-control" id="minimumArea" placeholder="Min." />
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="maximumArea" onKeyPress={callapplyFilter} class="form-control" id="maximumArea" placeholder="Max." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {Panel("Available For",available_for,"headingSix","collapseSix")}
            {Panel("Other",other,"headingSeven","collapseSeven")}
            {/* headingEight,collapseEight is taken (at the top) */}
        </div>

    );
}

export default Filter