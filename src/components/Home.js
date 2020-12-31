import React from 'react'
import styled, {keyframes} from 'styled-components';
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


const fadeOut = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const slideLeft = keyframes`
0% { left: 0; }
100% { left: 400px; }
`

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
height: 530px;
padding: 20px;
background: url('assets/bg.png');
background-size: cover;
border-top: 5px #3399ff solid;
margin-inline: 5px;
//animation: ${fadeOut} 1s ease;
animation: ${slideLeft} 2s ease;
z-index: 100;
`

const RoundImage = styled.img`
border-radius: 50%;
height: 150px;
width: 150px;
padding: 5px;
background: #f1f1f1;

animation: ${fadeOut} 1s ease;
`

const Heading = styled.h2`
color: black;
margin-top: 10px;
margin-bottom: 0px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const SubHeading = styled.h5`
color: gray;
margin: 5px;
`

const HeaderLine = styled.hr`
width: 75%;
height: 1px;
color: green;
`

const Desc = styled.p`
margin-top: 2px;
color: #121212;
font-family: Arial, Helvetica, sans-serif;
padding: 10px;
text-align: center;
font-size: 14px;
`

const Button = styled.button`
width: 90%;
color: white;
background: url('assets/bg.png');
padding: 10px;
border: none;
border-radius: 5px;
z-index: 2;
`

const SocialIconsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 5px;
`

const Facebook = styled(FiFacebook)`
width: 25px;
height: 25px;
margin: 5px;
color: white;
background: black;
border-radius: 2px;
padding: 2px;
`

const LinkedIn = styled(FiLinkedin)`
width: 25px;
height: 25px;
margin: 5px;
color: white;
background: black;
border-radius: 2px;
padding: 2px;
`

const Twitter = styled(FiTwitter)`
width: 25px;
height: 25px;
margin: 5px;
color: white;
background: black;
border-radius: 2px;
padding: 2px;
`

const Git = styled(FiGithub)`
width: 25px;
height: 25px;
margin: 5px;
color: white;
background: black;
border-radius: 2px;
padding: 2px;
`

class Home extends React.Component{

    constructor(props) {
        super(props);
        
    }
    

    render(){
        return(
            <HomeWrapper key={this.props.para}>
                <RoundImage key={this.props.para} src={this.props.img} />
                <Heading>Hi, I'm ReaK AbC!</Heading>
                <SubHeading>Web Designer And Developer</SubHeading>
                <HeaderLine />
                <Desc>Founder of ReaK AbC &amp; Co. Professional UI/UX designer and web developer based on India. Sometimes works as a freelancer.</Desc>
                <Button >email: john@dotrex.co / phone +123 456 789 111</Button>
                <SocialIconsWrapper>
                    <Facebook/><LinkedIn/><Git/><Twitter/>
                </SocialIconsWrapper>
            </HomeWrapper>
        );
    }

}

export default Home;