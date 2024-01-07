import nft1 from '../../assets/nft1.png'
import nft2 from '../../assets/nft2.png'

const NFT = () => {
    return(
        <div style={{display: "flex"}}>
            <img src={nft2} style={{width: "50%"}}>
            </img>
            <img src={nft1}  style={{width: "50%"}}>
            </img>
        </div>
    )
}

export default NFT