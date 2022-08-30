import Image from 'next/image'

import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <h1>About the project</h1>
            <p>Charizard is a fire pokemon.</p>
            <Image
                src="/images/charizard.png"
                width="300"
                height="300"
                alt="Charizard"
            />
        </div>
    );
}
 
export default About;