import ProductCard from '@/components/ProductCard';

export default function BabyGowns() {
    const gowns = [
        { id: 1, title: 'Princess Pink', description: 'Fluffy pink frock with bow details.', price: '$80' },
        { id: 2, title: 'Snow White', description: 'Pure white satin dress for baptisms.', price: '$90' },
        { id: 3, title: 'Floral Fairy', description: 'Tulle dress with flower appliques.', price: '$85' },
        { id: 4, title: 'Royal Velvet', description: 'Deep red velvet for holiday parties.', price: '$95' },
        { id: 5, title: 'Sparkle Star', description: 'Sequined bodice with tulle skirt.', price: '$100' },
        { id: 6, title: 'Vintage Lace', description: 'Heirloom quality lace dress.', price: '$110' },
    ];

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <h1 className="section-title">Baby Gowns</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {gowns.map(gown => (
                    <ProductCard key={gown.id} {...gown} />
                ))}
            </div>
        </div>
    );
}
