import {useState, useEffect} from "react";
import styles from "./OneNewImg.module.css";

function OneNewImg({images}) {
    const [mainImage, setMainImage] = useState(null);
    const [smallImages, setSmallImages] = useState([]);

    useEffect(() => {
        if (!images || !Array.isArray(images)) return;


        let safeImages = images.filter(Boolean);

        while (safeImages.length < 4) {
            safeImages.push(safeImages[0] || "/placeholder.jpg");
        }

        setMainImage(safeImages[0]);
        setSmallImages(safeImages.slice(1));
    }, [images]);

    const handleImageClick = (clickedImage) => {
        setSmallImages((prevImages) =>
            prevImages.map((img) => (img === clickedImage ? mainImage : img))
        );
        setMainImage(clickedImage);
    };

    if (!mainImage) return <p>Загрузка изображений...</p>;

    return (
        <div className={styles.OneNewImg}>
            <div className={styles.MainImg}>
                <img src={mainImage} alt="Главное изображение"/>
            </div>
            <div className={styles.SmallImg}>
                {smallImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Миниатюра ${index}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
        </div>
    );
}

export default OneNewImg;
