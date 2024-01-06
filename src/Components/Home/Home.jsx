import classes from './Home.module.css'
import HomeImage from '../../assets/HomeImage.png';

const Home = () => {
    return(
        <div className={classes.HomeContainer}>
            <div className={classes.imgContainer}>
                <img src={HomeImage}></img>
            </div>
            <div className={classes.description}>
                <h1>Empowering Healthcare, Powered by Blockchain Integrity</h1>
            </div>
        </div>
    )
}

export default Home