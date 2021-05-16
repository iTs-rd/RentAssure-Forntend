function House(props) {
    return (
        <div>
            <h1>House component</h1>
            <h6>property_type<strong>{props.item.property_type}</strong></h6>
            <h6>title<strong>{props.item.title}</strong></h6>
            {/* <h6>description<strong>{props.item.description}</strong></h6> */}
            <h6>bedroom<strong>{props.item.bedroom}</strong></h6>
            <h6>owner_name<strong>{props.item.owner_name}</strong></h6>
            <h6>pin<strong>{props.item.pin}</strong></h6>
        </div>
    );
}

export default House;
