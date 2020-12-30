import React from 'react'
import styled, {keyframes} from 'styled-components'
import { FiDisc } from 'react-icons/fi'

const fadeOut = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const InnerContainer = styled.div`
width: 100%;
height: 100%;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

animation: ${fadeOut} 1s ease;
`

const TextBox = styled.div`
margin: 0;
padding: 20px;
color: white;
background: #3399ff;
background-size: cover;
border-radius: 10px;

animation: ${fadeOut} 1s ease;
`

const RoundImage = styled.img`
border-radius: 50%;
height: 100px;
width: 100px;
padding: 5px;
background: #f1f1f1;

animation: ${fadeOut} 1s ease;
`

const Heading = styled.h3`
font-weight: bold;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
padding: 0;
margin: 5px;

animation: ${fadeOut} 1s ease;
`

const SubHeading = styled.p`
color: grey;
font-size: 14px;
padding: 0;
margin: 0;

animation: ${fadeOut} 1s ease;
`


const TriangleImage = styled.img`
width: 20px;
height: 25px;
margin-top: 0;
padding: 0;
margin-bottom: 10px;

animation: ${fadeOut} 1s ease;
`

class TestimonyContainer extends React.Component{

    constructor(props) {
        super(props);
        
    }
    

    render(){
        return(
            <InnerContainer>
                <TextBox>{this.props.text}</TextBox>
                <TriangleImage src={process.env.PUBLIC_URL+"assets/tri.svg"}/>
                <RoundImage src={this.props.img} />
                <Heading>{this.props.name}</Heading>
                <SubHeading>{this.props.company}</SubHeading>
            </InnerContainer>
        )
    }

}

export default TestimonyContainer;