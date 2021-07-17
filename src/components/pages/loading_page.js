import "../css/loading_page.css";

function Loading_page(){
    return(
        <div class="loading">
            <div class="loader" >
                <div class="circle" id="a"></div>
                <div class="circle" id="b"></div>
                <div class="circle" id="c"></div>
            </div>
            <div class="caption">We're testing your patience😉....</div>
        </div>
    );
}

export default Loading_page