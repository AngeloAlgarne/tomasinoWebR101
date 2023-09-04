import styles from "./org-culture.module.scss";

import { Layout } from "../../components/Layout";
import { QuoteBlock } from "../../components/QuoteBlock";
import { CultureCard } from "../../components/CultureCard";
import { Titles } from "../../components/Titles";
import Link from "next/link";

import { testimonials } from "../../../public/assets/data/testimonials";
import { cultureCards } from "../../../public/assets/data/culture-cards";

interface TinyBoxProps {
  noRightBorder?: boolean;
}

const TinyBox: React.FC<TinyBoxProps> = ({ noRightBorder }) => {
  const boxClass = `${styles.box} ${noRightBorder ? styles.none : null}`;

  return <div className={boxClass}></div>;
};

export default function () {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.parent}>
          <div className={styles.mid}>
            <div className={styles.header_text}>
              <Titles title="Org Culture"> Get in the car, Betty</Titles>
            </div>
            <p className={styles.p_text}>
              We're gonna take you to a quick ride of what TomasinoWeb is behind the scenes. From doing org work to
              having fun, we've got it all here in our own silly world.
            </p>
            <p className={styles.p_text_italic}>
              Don't blame us, org made us crazy, if it doesn't, you ain't doin' it right
            </p>
            {/* mid */}{" "}
          </div>
          {/* parent */}
        </div>
        <div className={styles.video_section}>
          <div className={styles.video_mid}>{/* video mid */} </div>
          {/* video_section */}
        </div>
        <div className={styles.stats_main}>
          <div className={styles.stats_details}>
            <h1 className={styles.header_text}>TomasinoWeb in numbers</h1>

            <div className={styles.stats_main2}>
              <div className={styles.stats_details2}>
                <h1 className={styles.header_text}>4 websites</h1>
                <p className={styles.p_text}>up and running for the Thomasian community</p>

                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>21+</h1>
                <p className={styles.p_text}>delulus just hoping for a Paskuhan date</p>
                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>27</h1>
                <p className={styles.p_text}>awards from prestigious contest & globally recognized institutions</p>
                {/* stats_details2 */}
              </div>
              {/* stats_main2 */}
            </div>

            <div className={styles.stats_main2}>
              <div className={styles.stats_details2}>
                <h1 className={styles.header_text}>57+</h1>
                <p className={styles.p_text}>innovative, passionate, and dedicated members</p>

                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>165,402</h1>
                <p className={styles.p_text}>combined followers across all digital platforms</p>
                {/* stats_details2 */}
              </div>

              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>9,050,600</h1>
                <p className={styles.p_text}>X (formerly Twitter) impressions in the past year</p>
                {/* stats_details2 */}
              </div>
              {/* stats_main2 */}
            </div>

            {/* stats_main */}
          </div>
          {/* stats_details */}
        </div>
        <div className={styles.testimonial_section}>
          <div className={styles.testimonial_mid}>
            <QuoteBlock testimonial={testimonials[1]} textColor="white" side="right" />
            {/*  mid */}{" "}
          </div>
          {/* section */}
        </div>
        <div className={styles.culture_section}>
          <h1 className={`${styles.header_text} ${styles.margin_top_text}`}>Magic, madness, heaven, sins</h1>
          <p className={styles.p_text}>All the fun starts here</p>
          <div className={styles.culture_mid}>
            {cultureCards.slice(0, 4).map((card, index) => (
              <CultureCard
                key={index}
                title={card.title}
                image={card.image}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
                border={card.border}
              >
                {card.content}
              </CultureCard>
            ))}
            {/* mid */}{" "}
          </div>
          {/*section */}
        </div>

        <div className={styles.testimonial_section}>
          <div className={styles.testimonial_mid}>
            <QuoteBlock testimonial={testimonials[5]} textColor="white" side="right" />
            {/*  mid */}{" "}
          </div>
          {/* section */}
        </div>

        <div className={styles.culture_section}>
          <h1 className={`${styles.header_text} ${styles.margin_top_text}`}>We small-talk, work and the weather</h1>

          <p className={styles.p_text}>And of course, the actual work</p>
          <div className={styles.culture_mid}>
            {cultureCards.slice(4).map((card, index) => (
              <CultureCard
                key={index}
                title={card.title}
                image={card.image}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
                border={card.border}
              >
                {card.content}
              </CultureCard>
            ))}
            {/* mid */}{" "}
          </div>
          {/*section */}
        </div>
        <div className={styles.end_background}>
          <div className={styles.end_mid}>
            <div className={styles.end_mid_align}>
              <h1 className={styles.end_header}>
                Nice to meet you, <br></br> where you been?
              </h1>
              <Link href="/about/people">
                <span className={styles.end_paragraph}>We could show you incredible things →</span>
              </Link>
            </div>
          </div>
          <div className={styles.end_mid_box}>
            <TinyBox noRightBorder={true} />
            <TinyBox noRightBorder={true} />
            <TinyBox noRightBorder={true} />
            <TinyBox noRightBorder={true} />
            <TinyBox />
          </div>
        </div>
        {/* <div className={styles.last}></div> */}
        {/* end */}
      </div>
    </Layout>
  );
}
