import SponsorsItem from "./SponsorsItem";

function Sponsors() {
    const items = [
        {imgPath: "img/sponsors/1.png"},
        {imgPath: "img/sponsors/2.png"},
        {imgPath: "img/sponsors/3.png"},
        {imgPath: "img/sponsors/4.png"},
        {imgPath: "img/sponsors/5.png"},
        {imgPath: "img/sponsors/6.png"},
    ]

    return (
        <section>
            {items.map((item, i) => {
                return <SponsorsItem key={i} imgPath={item.imgPath}/>
            })}

        </section>
    )
}

export default Sponsors;