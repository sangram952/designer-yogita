"use strict";
import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ title, image, price, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {/* Using a placeholder if image is missing or just a div for now since we don't have real images yet */}
                <div className={styles.placeholderImage} style={{ backgroundColor: '#eee', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                    {image ? <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} /> : <span>Image Placeholder</span>}
                </div>
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {price && <p className={styles.price}>{price}</p>}
                <button className="btn">View Details</button>
            </div>
        </div>
    );
};

export default ProductCard;
