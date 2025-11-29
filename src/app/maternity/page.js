import ProductCard from '@/components/ProductCard';

export default function Maternity() {
    const gowns = [
        { id: 1, title: 'Pastel Dream', description: 'Soft pastel colors for a gentle look.', price: '$130', image: '/maternity/yogita-maternity-01.jpeg' },
        { id: 2, title: 'Lace Comfort', description: 'Stretchy lace fabric for maximum comfort.', price: '$140', image: '/maternity/yogita-maternity-02.jpeg' },
        { id: 3, title: 'Boho Chic', description: 'Bohemian style with flowing sleeves.', price: '$150', image: '/maternity/yogita-maternity-03.jpeg' },
        { id: 4, title: 'Classic Wrap', description: 'Adjustable wrap dress for all stages.', price: '$120', image: '/maternity/yogita-maternity-04.jpeg' },
        { id: 5, title: 'Elegant Silk', description: 'Luxurious silk for a special occasion.', price: '$190', image: '/maternity/yogita-maternity-05.jpeg' },
        { id: 6, title: 'Garden Party', description: 'Floral print perfect for baby showers.', price: '$135', image: '/maternity/yogita-maternity-06.jpeg' },
    ];

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <h1 className="section-title">Maternity Gowns</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {gowns.map(gown => (
                    <ProductCard key={gown.id} {...gown} />
                ))}
            </div>
        </div>
    );
}
