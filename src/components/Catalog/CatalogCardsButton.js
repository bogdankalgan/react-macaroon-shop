import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CatalogCardsButton(props) {
    const {icon, clas, onClick} = props;
    return (
        <button className={clas} onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    )
}

export default CatalogCardsButton