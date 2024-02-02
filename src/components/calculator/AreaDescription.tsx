import Shape from "../../types/Shape";
import "./AreaDescription.css"

type AreaDescriptionProps = {
    shape: Shape | null;
}

function AreaDescription({shape}: AreaDescriptionProps) {

    const getShapeImg = (imgSrc: string) => '/data/' + imgSrc; 

    return(
        <div className="Area-description">
            {shape ? <img src={getShapeImg(shape.image)} alt={shape.name} /> : <div>Zvolte prosím geometrický tvar</div>}
        </div>
    )
}

export default AreaDescription;