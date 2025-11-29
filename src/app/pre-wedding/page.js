import ProductCard from '@/components/ProductCard';

export default function PreWedding() {
    const gowns = [
        { id: 1, title: 'Sunset Flow', description: 'Long trail gown perfect for beach shoots.', price: '$150', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Royal Blue', description: 'Velvet texture with a royal look.', price: '$180', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'White Elegance', description: 'Classic white gown for a dreamy vibe.', price: '$160', image: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Red Passion', description: 'Bold red gown for dramatic photos.', price: '$170', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 5, title: 'Floral Fantasy', description: 'Printed floral gown for nature lovers.', price: '$140', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Golden Hour', description: 'Shimmering gold fabric that catches the light.', price: '$200', image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <h1 className="section-title">Pre-Wedding Gowns</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {gowns.map(gown => (
                    <ProductCard key={gown.id} {...gown} />
                ))}
            </div>
        </div>
    );
}
