import React from 'react'
import { FiHome, FiTrendingUp } from 'react-icons/fi'
import styled, {keyframes} from 'styled-components'
import Card from './Card'
import Testimonial from './Testimonial'

const slideRight = keyframes`
0% { right: 400px; }
100% { right: 0; }
`

const ResumeWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 400px;
height: 530px;
padding: 20px;
background: white;
background-size: cover;
border-top: 5px #3399ff solid;
margin-inline: 5px;
overflow: scroll;

animation: ${slideRight} 1s ease;
`

const Heading = styled.h2`
color: black;
margin-top: 10px;
margin-bottom: 0px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

const HeaderLine = styled.hr`
width: 100%;
height: 1px;
margin: 0px;
color: green;
`

const ButtonsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const ButtonBack = styled.div`
width: 150px;
background: #3399ff;
margin: 10px;
`

const Button = styled.button`
width: 0;
height: 100%;
color:white;
transition: width 0.5s;
background: #1a001a;
border: none;
outline: none;


${ButtonBack}:hover && {
    width: 150px;
}
`

const ButtonText = styled.p`
width: 150px;
font-size: 10px;
color: white;
padding: 10px;
`

const Span = styled.span`
margin-top: 20px;
border-left: 8px #3399ff solid;
color: #3399ff;
padding-left: 5px;
padding-top: 5px;
padding-bottom: 5px;
align-items: center;
justify-content: center;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-weight: bold;
`

class Resume extends React.Component{


    componentWillUnmount(){
        console.log('Will Unmount!');
    }

    render(){
        return(
            <ResumeWrapper>
                <Heading>RESUME</Heading>
                <HeaderLine/>
                <ButtonsWrapper>
                    <ButtonBack><Button><ButtonText>DOWNLOAD RESUME</ButtonText></Button></ButtonBack>
                    <ButtonBack><Button><ButtonText>GET IN TOUCH</ButtonText></Button></ButtonBack>
                </ButtonsWrapper>
                <Span><FiHome />  Education </Span>
                <Card 
                    title={'Metallurgy And Materials'} 
                    sub={'NIFFT Ranchi, (4 Yr.) 2017 - Present'} 
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />

                <Card 
                    title={'Metallurgy And Materials'} 
                    sub={'NIFFT Ranchi, (4 Yr.) 2017 - Present'} 
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />

                <Span><FiHome />  Education </Span>
                <Card 
                    title={'Metallurgy And Materials'} 
                    sub={'NIFFT Ranchi, (4 Yr.) 2017 - Present'} 
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />

                <Card 
                    title={'Metallurgy And Materials'} 
                    sub={'NIFFT Ranchi, (4 Yr.) 2017 - Present'} 
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />

                <Span><FiTrendingUp />  Testimonials </Span>
                <Testimonial />
                <HeaderLine/>
                <ButtonsWrapper>
                    <ButtonBack><Button><ButtonText>DOWNLOAD RESUME</ButtonText></Button></ButtonBack>
                    <ButtonBack><Button><ButtonText>GET IN TOUCH</ButtonText></Button></ButtonBack>
                </ButtonsWrapper>
                <HeaderLine/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </ResumeWrapper>
        )
    }

}

export default Resume;