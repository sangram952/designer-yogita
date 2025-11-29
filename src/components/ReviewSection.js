"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './ReviewSection.module.css';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Sarah Jenkins',
            comment: 'The maternity gown I bought was absolutely stunning! It fit perfectly and made my photoshoot so special.',
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            rating: 5
        },
        {
            id: 2,
            name: 'Emily Chen',
            comment: 'Loved the pre-wedding dress. The fabric quality is top-notch. Highly recommended!',
            image: 'https://images.unsplash.com/photo-1529139574466-a302d2053990?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            rating: 5
        }
    ]);

    const [newReview, setNewReview] = useState({ name: '', comment: '', image: null });
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setNewReview({ ...newReview, image: url });
            setPreviewUrl(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newReview.name || !newReview.comment) return;

        const reviewToAdd = {
            id: reviews.length + 1,
            name: newReview.name,
            comment: newReview.comment,
            image: newReview.image || 'https://via.placeholder.com/150', // Fallback
            rating: 5
        };

        setReviews([reviewToAdd, ...reviews]);
        setNewReview({ name: '', comment: '', image: null });
        setPreviewUrl(null);
    };

    return (
        <section className={styles.reviewSection}>
            <div className="container">
                <h2 className="section-title">Customer Love</h2>

                <div className={styles.reviewsGrid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.avatar}>
                                    <Image src={review.image} alt={review.name} width={50} height={50} style={{ objectFit: 'cover', borderRadius: '50%' }} />
                                </div>
                                <div>
                                    <h4>{review.name}</h4>
                                    <div className={styles.stars}>{'*'.repeat(review.rating)}</div>
                                </div>
                            </div>
                            <p className={styles.comment}>{review.comment}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.addReview}>
                    <h3>Share Your Moment</h3>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={newReview.name}
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                            className={styles.input}
                            required
                        />
                        <textarea
                            placeholder="Write your review..."
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            className={styles.textarea}
                            required
                        />
                        <div className={styles.fileInputWrapper}>
                            <label htmlFor="file-upload" className="btn">Upload Photo</label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className={styles.fileInput}
                            />
                            {previewUrl && <span className={styles.fileName}>Image selected</span>}
                        </div>
                        {previewUrl && (
                            <div className={styles.preview}>
                                <Image src={previewUrl} alt="Preview" width={100} height={100} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                        )}
                        <button type="submit" className={`btn ${styles.submitBtn}`}>Submit Review</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
