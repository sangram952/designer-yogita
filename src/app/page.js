"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import ReviewSection from '@/components/ReviewSection';

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Elegance for Every Moment</h1>
                    <p>Exquisite Pre-wedding, Maternity, and Baby Gowns designed just for you.</p>
                    <Link href="/pre-wedding" className="btn">Explore Collection</Link>
                </div>
            </section>

            <section className={`container ${styles.categories}`}>
                <h2 className="section-title">Our Collections</h2>
                <div className={styles.grid}>
                    <div className={styles.categoryCard}>
                        <div className={styles.catImageWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Pre-Wedding Gown"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h3>Pre-Wedding</h3>
                        <p>Capture your love story with our flowing, cinematic gowns designed for the perfect shot.</p>
                        <Link href="/pre-wedding" className={styles.link}>View Gowns &rarr;</Link>
                    </div>
                    <div className={styles.categoryCard}>
                        <div className={styles.catImageWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1562522736-25807910002b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Maternity Gown"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h3>Maternity</h3>
                        <p>Embrace motherhood with grace. Comfortable, stylish, and elegant designs for your bump.</p>
                        <Link href="/maternity" className={styles.link}>View Gowns &rarr;</Link>
                    </div>
                    <div className={styles.categoryCard}>
                        <div className={styles.catImageWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Baby Gown"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h3>Baby Gowns</h3>
                        <p>Little princess dresses for birthdays, baptisms, and big moments.</p>
                        <Link href="/baby-gowns" className={styles.link}>View Gowns &rarr;</Link>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className="container">
                    <h2 className="section-title">About Yogita</h2>
                    <p>
                        At Designer Yogita, we believe every stitch tells a story. We specialize in creating bespoke gowns that make you feel extraordinary.
                        From the magical moments before your wedding to the glow of maternity and the joy of your little one's first celebrations,
                        we craft attire that is as unique as you are. Our designs blend modern trends with timeless elegance, ensuring you look
                        perfect for every occasion.
                    </p>
                </div>
            </section>

            <ReviewSection />
        </div>
    );
}
