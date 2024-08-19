import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Container.module.css';

interface Props {
  className?: string;
}
/* @figmaId 125:1325 */
export const Container: FC<Props> = memo(function Container(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ScreenHeroSection}>
        <div className={classes.text_wrapper}>
          <div className={classes.text_wrap}>
            <div className={classes.heading_wrapper}>
              <div className={classes.heading}>Welcome to my Portfolio</div>
            </div>
            <div className={classes.paragraph}>
              Experience the power of Kotlin, Jetpack Compose, Firebase, and MongoDB
            </div>
          </div>
          <div className={classes.button_wrap}>
            <button className={classes.cta_button}>
              <div className={classes.cta_text}>Explore My Work</div>
            </button>
          </div>
        </div>
        <div className={classes.map_wrapper}>
          <div className={classes.image_description}>ILLUSTRATION ACTIVE PART</div>
        </div>
      </div>
      <div className={classes.ScreenPeopleListWithHeadline}>
        <div className={classes.text_wrapper2}>
          <div className={classes.heading2}>Welcome to my Android Developer Portfolio</div>
          <div className={classes.paragraph2}>I specialize in Kotlin, Jetpack Compose, Firebase, and MongoDB</div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            <div className={classes.photoWrapper}>
              <div className={classes.photoDescription}>PHOTO</div>
              <div className={classes.profile_1}></div>
            </div>
            <div className={classes.info_wrapper}>
              <div className={classes.full_name}>John Doe</div>
              <div className={classes.description}>Experienced Android Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ScreenHeroSection2}>
        <div className={classes.text_wrapper3}>
          <div className={classes.text_wrap2}>
            <div className={classes.heading_wrapper2}>
              <div className={classes.heading3}>Welcome to my Android Developer Portfolio</div>
            </div>
            <div className={classes.paragraph3}>
              I specialize in Kotlin, Jetpack Compose, Firebase, and MongoDB. Let me show you my notable projects and
              achievements.
            </div>
          </div>
          <div className={classes.button_wrap2}>
            <button className={classes.cta_button2}>
              <div className={classes.cta_text2}>Explore My Work</div>
            </button>
          </div>
        </div>
        <div className={classes.map_wrapper2}>
          <div className={classes.image_description2}>ILLUSTRATION ACTIVE PART</div>
        </div>
      </div>
      <div className={classes.ScreenFeatureListWithHeadlines}>
        <div className={classes.heading4}>
          <div className={classes.heading_wrapper3}>
            <div className={classes.heading5}>Skills</div>
          </div>
          <div className={classes.paragraph4}>Showcasing the developer&#39;s key skills and proficiency</div>
        </div>
        <div className={classes.wrapper2}>
          <div className={classes.feature_list}>
            <div className={classes.heading6}>Kotlin</div>
            <div className={classes.paragraph5}>Proficient in Kotlin programming language</div>
          </div>
          <div className={classes.feature_list2}>
            <div className={classes.heading7}>Jetpack Compose</div>
            <div className={classes.paragraph6}>Expertise in building modern UIs with Jetpack Compose</div>
          </div>
          <div className={classes.feature_list3}>
            <div className={classes.heading8}>Firebase</div>
            <div className={classes.paragraph7}>Experience in integrating Firebase services</div>
          </div>
          <div className={classes.feature_list4}>
            <div className={classes.heading9}>MongoDB</div>
            <div className={classes.paragraph8}>Knowledge of MongoDB database management system</div>
          </div>
        </div>
      </div>
      <div className={classes.ScreenFeatureListWithHeadlines2}>
        <div className={classes.heading10}>
          <div className={classes.heading_wrapper4}>
            <div className={classes.heading11}>Project Showcase</div>
          </div>
          <div className={classes.paragraph9}>
            Features a carousel or grid layout showcasing key projects. Each project card includes a thumbnail, project
            title, description, and links to the GitHub repository or live demo. The UI/UX is engaging and draws
            attention to the project details.
          </div>
        </div>
        <div className={classes.wrapper3}>
          <div className={classes.feature_list5}>
            <div className={classes.heading12}>Project Carousel</div>
            <div className={classes.paragraph10}>
              A visually appealing carousel that showcases key projects with smooth transitions.
            </div>
          </div>
          <div className={classes.feature_list6}>
            <div className={classes.heading13}>Project Grid</div>
            <div className={classes.paragraph11}>
              A grid layout that displays project cards with thumbnails, titles, descriptions, and links.
            </div>
          </div>
          <div className={classes.feature_list7}>
            <div className={classes.heading14}>Project Details</div>
            <div className={classes.paragraph12}>
              Each project card includes detailed information such as project title, description, and links to GitHub
              repository or live demo.
            </div>
          </div>
          <div className={classes.feature_list8}>
            <div className={classes.heading15}>Engaging UI/UX</div>
            <div className={classes.paragraph13}>
              The UI/UX design of the project showcase section is engaging and draws attention to the project details.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ScreenFeedbackList}>
        <div className={classes.text_wrapper4}>
          <div className={classes.heading16}>What People Are Saying</div>
          <div className={classes.paragraph14}>Read what our satisfied clients have to say about us.</div>
        </div>
        <div className={classes.wrapper4}>
          <div className={classes.card2}>
            <div className={classes.photoWrapper2}>
              <div className={classes.blockDescription}>PHOTO</div>
            </div>
            <div className={classes.info_wrapper2}>
              <div className={classes.full_name2}>John Smith</div>
              <div className={classes.feedback}>
                I am extremely impressed with the quality of work and attention to detail. The team delivered beyond my
                expectations and I would highly recommend them to anyone looking for a professional and modern Android
                developer portfolio landing page.
              </div>
            </div>
          </div>
          <div className={classes.card3}>
            <div className={classes.photoWrapper3}>
              <div className={classes.blockDescription2}>PHOTO</div>
            </div>
            <div className={classes.info_wrapper3}>
              <div className={classes.full_name3}>Emily Johnson</div>
              <div className={classes.feedback2}>
                Working with the team was a pleasure. They understood my requirements and translated them into a
                visually stunning landing page. The testimonials section added credibility to my portfolio and helped me
                secure new clients. I couldn&#39;t be happier with the results!
              </div>
            </div>
          </div>
          <div className={classes.card4}>
            <div className={classes.photoWrapper4}>
              <div className={classes.blockDescription3}>PHOTO</div>
            </div>
            <div className={classes.info_wrapper4}>
              <div className={classes.full_name4}>Michael Davis</div>
              <div className={classes.feedback3}>
                The testimonials section on my landing page has been a game-changer. It has helped me build trust with
                potential clients and showcase my expertise. The clean and minimalist design with subtle animations
                creates a professional and engaging user experience.
              </div>
            </div>
          </div>
          <div className={classes.card5}>
            <div className={classes.photoWrapper5}>
              <div className={classes.blockDescription4}>PHOTO</div>
            </div>
            <div className={classes.info_wrapper5}>
              <div className={classes.full_name5}>Sarah Thompson</div>
              <div className={classes.feedback4}>
                I am amazed by the level of creativity and attention to detail in my landing page. The testimonials
                section adds a personal touch and highlights the positive experiences of my clients. It has definitely
                made a positive impact on my business.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ScreenContactsWithForm}>
        <div className={classes.text_wrapper5}>
          <div className={classes.heading_wrapper5}>
            <div className={classes.heading17}>Contact Me</div>
          </div>
          <div className={classes.wrapper5}>
            <div className={classes.content_wrapper}>
              <div className={classes.contact_type}>Email</div>
              <div className={classes.contact_data}>example@example.com</div>
            </div>
            <div className={classes.content_wrapper2}>
              <div className={classes.contact_type2}>Phone</div>
              <div className={classes.contact_data2}>+1 123-456-7890</div>
            </div>
            <div className={classes.content_wrapper3}>
              <div className={classes.contact_type3}>GitHub</div>
              <div className={classes.contact_data3}>github.com/example</div>
            </div>
            <div className={classes.content_wrapper4}>
              <div className={classes.contact_type4}>LinkedIn</div>
              <div className={classes.contact_data4}>linkedin.com/in/example</div>
            </div>
          </div>
          <div className={classes.button_wrap3}>
            <button className={classes.cta_button3}>
              <div className={classes.cta_text3}>Send Message</div>
            </button>
          </div>
        </div>
        <div className={classes.form_wrapper}>
          <div className={classes.heading_wrapper6}>
            <div className={classes.form_heading}>Get in Touch</div>
          </div>
          <div className={classes.col_wrapper}>
            <div className={classes.fieldWrapper}>
              <div className={classes.frame26}>
                <div className={classes.name}>Name</div>
              </div>
              <div className={classes.small_field}>
                <div className={classes.john}>John</div>
              </div>
            </div>
            <div className={classes.fieldWrapper2}>
              <div className={classes.frame27}>
                <div className={classes.name2}>Surname</div>
              </div>
              <div className={classes.small_field2}>
                <div className={classes.doe}>Doe</div>
              </div>
            </div>
          </div>
          <div className={classes.frame2}>
            <div className={classes.frame28}>
              <div className={classes.name3}>Mail</div>
            </div>
            <div className={classes.small_field3}>
              <div className={classes.johndoeMailNet}>johndoe@mail.net</div>
            </div>
          </div>
          <div className={classes.frame3}>
            <div className={classes.frame29}>
              <div className={classes.name4}>Address</div>
            </div>
            <div className={classes.small_field4}>
              <div className={classes.capitolWA}>Capitol, WA</div>
            </div>
          </div>
          <div className={classes.frame4}>
            <div className={classes.frame30}>
              <div className={classes.name5}>Description</div>
            </div>
            <div className={classes.big_field}></div>
          </div>
          <button className={classes.cta_button4}>
            <div className={classes.cta_text4}>Send Message</div>
          </button>
        </div>
      </div>
      <div className={classes.ScreenPortfolio}>
        <div className={classes.text_wrapper6}>
          <div className={classes.heading18}>Footer</div>
          <div className={classes.paragraph15}>
            A well-designed footer with links to essential sections of the portfolio. It uses complementary colors and
            blends seamlessly with the overall design.
          </div>
        </div>
      </div>
      <div className={classes.ScreenEnumeratedListWithHeadli}>
        <div className={classes.wrapper6}>
          <div className={classes.feature_list9}>
            <div className={classes.number_wrap}>
              <div className={classes.number}>1</div>
            </div>
            <div className={classes.text_wrap3}>
              <div className={classes.heading19}>Harmonious Color Palette</div>
              <div className={classes.paragraph16}>
                The landing page design uses a harmonious color palette that complements the developer&#39;s personal
                brand. The colors are carefully chosen to create a visually appealing and cohesive look.
              </div>
            </div>
          </div>
          <div className={classes.feature_list10}>
            <div className={classes.number_wrap2}>
              <div className={classes.number2}>2</div>
            </div>
            <div className={classes.text_wrap4}>
              <div className={classes.heading20}>Subtle Animations and Transitions</div>
              <div className={classes.paragraph17}>
                Subtle animations and transitions are incorporated throughout the landing page to enhance the user
                experience. These animations add a touch of interactivity and make the page more engaging.
              </div>
            </div>
          </div>
          <div className={classes.feature_list11}>
            <div className={classes.number_wrap3}>
              <div className={classes.number3}>3</div>
            </div>
            <div className={classes.text_wrap5}>
              <div className={classes.heading21}>Fully Responsive Design</div>
              <div className={classes.paragraph18}>
                The landing page is fully responsive and optimized for both desktop and mobile devices. It adapts
                seamlessly to different screen sizes, ensuring a consistent and user-friendly experience across all
                devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
