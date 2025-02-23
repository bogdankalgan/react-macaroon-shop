import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {dataBase} from "../dataBase";
import Header from "../Home/Header/Header";
import BreadCrumbs from "../BreadCrumbs";
import CardPageTop from "./CardPageTop/CardPageTop";
import Description from "./Description/Description";
import Also from "./Also/Also";

function CardPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const {data, error} = await dataBase.from('popularitems').select('*').eq('id', id.toString()).single()

                if (error) throw error;

                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id])


    if (loading) return <h1>Загрузка</h1>;
    if (!product) return <h1>Товар не найден</h1>

    return (
        <div>
            <Header/>
            <BreadCrumbs title={product.title}/>
            <CardPageTop title={product.title} descr={product.description} imgPath={product.imgPath}
                         price={product.price} taste={product.taste} count={product.countTaste}/>
            <Description/>

            <Also/>
        </div>
    )
}

export default CardPage;