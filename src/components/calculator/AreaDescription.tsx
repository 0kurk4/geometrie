function AreaDescription(props: any) {
    const shape = props.shape;

    const getShapeImg = (imgSrc: String) => '/data/' + imgSrc; 

    return(
        <div className="Area-description">
            {shape ? <img src={getShapeImg(shape.image)} alt={shape.name} /> : <div>Please select shape first</div>}
        </div>
    )
}

export default AreaDescription;