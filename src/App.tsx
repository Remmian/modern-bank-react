// Components
import {
    Navbar,
    Billing,
    CardDeal,
    Business,
    Clients,
    CTA,
    Stats,
    Footer,
    Testimonials,
    Hero,
} from "./components";

// Styles
import styles from "./styles";

function App() {
    return (
        <div className="bg-primary w-full overflow-hidden ">
            <header className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </header>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
