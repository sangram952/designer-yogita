import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
    title: 'Designer Yogita - Pre-wedding, Maternity & Baby Gowns',
    description: 'Designer Yogita creates bespoke pre-wedding, maternity, and baby gowns with timeless elegance.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
