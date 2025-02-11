function SponsorsItem(props) {
    const {imgPath} = props;

    return (
        <img src={imgPath} alt={imgPath}/>
    )
}

export default SponsorsItem