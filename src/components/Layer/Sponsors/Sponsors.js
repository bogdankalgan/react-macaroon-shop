import {cloneElement} from "react";
import Sponsors from "../../Corporatives/Sponsors/Sponsors"

function ModifiedSponsors(props) {
    const {children} = props;

    return cloneElement(children, {className: 'sponsors'})
}

function LayerSponsors() {
    return (
        <>
            <ModifiedSponsors>
                <Sponsors/>
            </ModifiedSponsors>
        </>
    )
}

export default LayerSponsors;