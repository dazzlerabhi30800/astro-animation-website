import '../styles/GlobalStyles.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const textMotion = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: -250
        }
    }

    const imageMotion = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: 250
        }
    }

    useEffect(() => {
        setIsLoaded(true);
    }, [])


    return (
        <section className="section hero-section">
            {isLoaded &&
                <motion.div animate="visible" initial="hidden" variants={textMotion} transition={{ ease: "easeInOut", duration: 0.4 }} className="text-wrapper">
                    <h1>explore, create and sell your ntf's</h1>
                    <p>The World's First and Largest NFT/Avatar MarketPlace</p>
                    <div className="button-container">
                        <button>Explore More</button>
                        <button>Create</button>
                    </div>
                </motion.div>
            }

            {isLoaded &&
                <motion.div animate="visible" initial="hidden" variants={imageMotion} transition={{ ease: "easeInOut", duration: 0.7 }} className="hero-img">
                    <img src="./nft/cat-nft.jpg" alt="cat-nft" />
                </motion.div>
            }

        </section >
    );

}


export default HeroSection;

