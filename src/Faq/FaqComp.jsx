import React from "react";
import './Faq.css';
import {NavLink} from 'react-router-dom';
import HamburgerNav from "../HamburgerNav";
import MainNav from "../MainNav";

class FaqComp extends React.Component {
    constructor() {
        super();
        this.navType = '';
    }
 
    changeNav = () => {
        if (window.innerWidth <= 768) {
            return this.navType = <HamburgerNav/>
        }
        else {
            return this.navType = <MainNav/>
        }
    }

   


    render() {
        return(
            <div className="faq-comp">
                <div className="nav-links-faq">
                    {this.changeNav()}
                    <NavLink to="/home"><img src={require('../assets/Chainkeylogo1.png')} alt="ck-logo"/></NavLink>
                </div>
                <div className="faq-body">
                    <h2>FAQ</h2>
                    <div className="benefits">
                        <h3>What are the benefits of holding ChainKidNFT</h3>
                        <ul>
                            <li>Access to our token-gated discord complete with tutorials, Web3 news, and variety of NFT tools designed to help you on your Web3 journey</li>
                            <li>Access to the Chain Games, the project offering the most REWARDS in the NFT space thus far</li>
                            <li>A free ENS (Ethereum Name Service) name which will serve as your Metaverse Identity</li>
                            <li>Bluechip NFTS, multipliers, WL spots and more through weekly [MYSTERY ORBS]</li>
                            <li>Early access and priority access to our next Cryptocurrency project, the more ChainKids NFTs you hold the greater weight you will be allocated moving forward... check in the VOID for more information</li>
                            <li>Ownership of your NFT and a possibility of earning a portion of secondary sales once your have held your NFT for 14 days</li>
                            <li>DAO membership, more will be announced soon in the VOID</li>
                        </ul>
                    </div>

                    <div className="ens-names">
                        <h3>Why are ENS names important?</h3>
                        <p>ENS names will serve as your Metaverse identity. They will be a much needed component to your Metaverse experience. Moving forward we are going into a world where everything will be measured by your participation and your participation is what will get you rewarded. Your ENS name will help tie all your information together in one convenient space. 
                        ENS names also make it a lot easier to onboard people into the world of Cryptocurrency and Web3. A tonne of people make mistakes when first entering the space sending funds to wrong addresses/hashes. For example: An ENS would replace your clunky wallet address such as `0x90c2E15822502fe022812466237C59Dda9E6171b` to a simple but convenient `james.eth` eliminating confusion when sending funds while also making it easier to share your name with friends and more. 
                        Other benefits that will be included in the second half of our project (KeyChain), such as:
                        </p>
                        <ul>
                            <li>Halting the spread of duplicate profiles as your ENS profile will be vouched for using attestations verifying your Web3 identity through the general participation of your account</li>
                            <li>Ability to include verification accolades, attestations from other ENS names further building your reputation</li>
                            <li>Monetization of other ENS names through smart contracts, ability to link multiple accounts together sharing equity in projects created</li>
                            <li>ENS names make it easier to remember other people in the metaverse, make contacts and etc.</li>
                            <li>ENS names act as a KYC (Know You Customer) without having to KYC — your participation and on-chain record will act as your credit essentially serving as your verifiable identity. Once you build it you will not want to lose it in exchange for a fresh profile - eliminating the need for duplicate profiles</li>
                            <li>Learn about more ENS benefits here.</li>
                        </ul>
                    </div>

                    <div className="void">
                        <h3>What can you tell us about the VOID?</h3>
                        <p>The Void is the mystery of our next project which will be a platform that utilizes your ENS name, bring the ENS community together forming productive web3 innovators and creators. Thus far we have said too much you will have to wait for the next next Whitepaper release for more further information.
                        **Hint:** This NFT ****will allow you to direct access to the community and benefit you as an early holder. Securing your future while building the infrastructure around your Web3 identity allowing you to monetize the platform connecting you to a Web3 community is about unique as it gets for an NFT project.
                        Once again I would like to say more but you will have to wait for our next Whitepaper release.
                        </p>
                    </div>

                    <div className="nft-web">
                        <h3>What is an achievement NFT or Web3 attestations?</h3>
                        <p>**Attestations** are cryptographically signed and cryptographically approved immutable reviews, comments, messages and testimonials published on the blockchain. This provides proof that the individual is unique and also doubles as an aid in building a Web3 reputation. 
                        **Achievement Badge NFTs** are a type of NFT developed by ChainKids which are linked to your performance and attestations. Once you receive a certain number of testimonials/attestations you will be sent an Achievement Badge NFT verifying your profile. This will build your reputation and act as one of the main component of your Web3 Resume.
                        </p>
                        <p>Though both positive and negative attestation will be documented on your profile, only positive attestations received will issue you an Achievement Badge NFT. This is key for our project.. more details will be provided in the Keychain Whitepaper which will be released in Q3 of 2022.</p>
                        <p>Hint: Say you are a Web3 smart contract developer and you offer services to a successful NFT or Cryptocurrency project, the founders of the project will have the ability to publish attestations on your profile.  These attestations will be sent directly to your wallet as an NFT.  These NFTs will act as a Badge or Badges verifying the quality of your performance. They can also act as a certificate of approval when it comes to building your Web3 reputation. Having the ability to do so will benefit you immensely.  As more developers can verify your talents on chain this can only lead to more opportunities to build in the Web3 space.</p>
                    </div>

                    <div className="resumes">
                        <h3>What is the problem with Web2 resumes?</h3>
                        <p>The resumes of today can be easily forged. It is extremely easy for an employer to exaggerate an employees accolades. Most references on resumes end up being friends, family and peers.  Favoritism has always been an issue in the work world particularly when we don’t have a database to verify the skillsets of an employee.
                        Web3 solves this issue with **KEYCHAIN** leading the way. Stay closely connected to the ChainKids for timely updates.   
                        With **KEYCHAIN** all Web3 jobs such as community managers, artists, developers, operations managers, moderators etc. will all be able to receive attestations from fellow community members in the form of on-chain achievement badges (NFTs). This will verify ones Web3 reputation and skillset. Once again I would like to further get into detail with what else we offer but I prefer you to wait for the Whitepaper. This project will be interesting to say the least and much needed in the Web3 space.
                        </p>
                    </div>

                    <div className="multiple">
                        <h3>What is stopping someone from using multiple wallets and ENS names?</h3>
                        <p>This is simple to to answer - Would you rather have all your attestations and Achievement Badge NFTs on one wallet or would you have them diluted spread out among a number of wallets.</p>
                        <ul>
                            <li>The more badges you hold, the more weight you will hold in the community which leads to more monetarily gain from each project built in the community. This encourages members to build and develop one single Web3 identity.</li>
                        </ul>
                    </div>

                    <div className="community">
                        <h3>What is the benefit of having a web3 community?</h3>
                        <p>There are a variety of reasons:</p>
                        <ul>
                            <li>Free Airdrops: The more involved your community is the more greater the chance of other projects taking notice. These projects will then possibly choose to distribute their tokens to the community. The stronger your community is, the more you benefit.</li>
                            <li>Passive Income Forever: Anything built in a Web3 community has the ability to benefit the community through the creation and constant connection of smart contracts. Portions of each project created by any community member can potentially be linked back to your community wallet allowing for fair distribution to each community member. 100 projects are built over time in the community, 100 projects will benefit the community forever. This is the beauty of Web3. Tune into our Twitter spaces to gain a more elaborate understanding.</li>
                            <li>Web3 Communities Will Be Tokenized: This will give other projects, communities and individuals a chance to invest in your community and its creations! A portion of whatever is generated from the community will go back into your community and its token. Everything will be co-related to your performance and that performance will be represented by a token.</li>
                            <li>Control/Monetize Your Data: With Web3 communities you will be able to own your data and split profits among your community if collectively you choose to sell your data.</li>
                            <li>Sponsorships: Once your community grows together sponsors will want to pay to have access to your community. Our founders are extremely passionate about our community and the direction of Web3 so once again I suggest to tune into our Twitter spaces.</li>
                        </ul>
                    </div>

                    <div className="identity">
                        <p>You will need a digital identity moving into this new world of Web3 for the following reasons:</p>
                        <ul>
                            <li>Your digital identity will serve as a fresh start. No old tweets, texts or pictures will come back and haunt you in the world of Web3. This is not to say any of your old opinions are right or wrong it is just simply to say as culture changes so do particular views and getting caught in the cross hairs can be avoided with Web3 and this new identity.</li>
                            <li>Your digital identity has nothing to do with your real name unlike Web2. Your new identity and reputation have everything to do with your involvement/participation</li>
                            <li>Your real identity will not be tied into your Web3 identity - everything will be documented on the blockchain for any one person to access unlike Web2 where forging and fraud is a common occurrence. With Web3 stolen identities will seem almost impossible as long as the technology stays as secure as it seems to be and if not you never know perhaps our community will build that technology.</li>
                        </ul>
                    </div>

                    <div className="games">
                        <h3>What are the Chain Games?</h3>
                        <p>The Chain Games are the highlight of our project thus far. It is a series of riddle games which include words embedded in binary code spread out among each of the ChainKids NFTs. Winners will uncover words, phrases and keys to wallets with each phase resulting in prizes of many sorts. I would get into detail but I can only say so much. Trust me it is worth your time. 
                        Chain Games are extremely fun! We recognize that games offer immediate engagement and this is extremely important when it comes to building relationships and building your Web3 community. Once that Web3 community is built the sky is the limit.
                        </p>
                        <p>Remember we are extremely early in the Web3 space and the potential is endless.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqComp;