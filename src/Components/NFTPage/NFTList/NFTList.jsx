import classes from './NFTList.module.css'
import NFTPhoto from '../../../assets/myNFt.png'
import foilImg from '../../../assets/foilimg.jpg'
import { useState } from 'react';
import Chatbox from '../Chatbox/Chatbox';

const NFTList = (props) => {

    return (
        <div className={classes.overlay} onClick={props.closeNFT} >
            <div className={classes.modal} style={{ backgroundImage: `url(${foilImg})`, backgroundSize: 'cover' }}>
                <div className={classes.NFTDetailsContainer}>
                    <div className={classes.NFTInfo}>
                        <img src={NFTPhoto} style={{marginRight: "2rem", marginLeft: "1rem", height: "10%", alignSelf: "center", justifySelf: "center"}}></img>
                        <div className={classes.DonationDetails}>
                            <h2>Amount Donated: $5000</h2>
                            <h2>Donated To: Jackson Murray</h2>
                            <h2>Donor Name: Suhail</h2>
                            <h2>Donation Details: Heart Surgery </h2>
                            <button style={{width: "100%"}} onClick={props.PropsOpenChat}>Chat with Jackson</button>
                        </div>
                    </div>
                    <div className={classes.LetterDescription}>
                        <h2>Letter details:</h2>
                        <span>"I wanted to take a moment to express my heartfelt gratitude for your generous donation to my crowdfunding campaign for my upcoming surgery. 
                            Your support means the world to me,and I am deeply thankful for your kindness and compassion.
                            I want you to know that your support has not only relieved a significant financial burden but has also lifted my spirits during this challenging time. It is heartwarming to know that there are caring individuals like you who are willing to make a difference in the lives of others.
                            I will keep you updated on my progress, and I am committed to making the most of this opportunity for a better and healthier future. Your faith in me is a source of motivation, and I promise to honor it by working hard to achieve a successful outcome." - Jackson</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTList