import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

interface Props {
    src: string;
    alt: string;
}

function Img({ src, alt }: Props) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
    );
}

function Billing() {
    return (
        <section id="product" className={layout.sectionReverse}>
            <figure className={layout.sectionImgReverse}>
                <img
                    src={bill}
                    alt="billing"
                    className="w-[100%] h-[100%] relative z-[5]"
                />

                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
            </figure>

            <section className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easily control your <br className="sm:block hidden" />{" "}
                    billing & invoicing.
                </h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                    integer platea placerat.
                </p>

                <figure className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <Img src={apple} alt="app_store" />
                    <Img src={google} alt="play_store" />
                </figure>
            </section>
        </section>
    );
}

export { Billing };
