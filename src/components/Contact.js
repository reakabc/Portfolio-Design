import React from 'react'
import styled, {keyframes} from 'styled-components'
import {FiHome} from 'react-icons/fi'
import { MapContainer } from './MapContainer'

const changeColor = keyframes`
0%{
    background: #3399ff;
}

100%{
    background: green;
}
`

const slideRight = keyframes`
0% { right: 400px; }
100% { right: 0; }
`

const ContactWrapper = styled.div`
position:relative;
display: flex;
flex-direction: column;
width: 400px;
height: 530px;
padding: 20px;
background: #f1f1f1;
background-size: cover;
border-top: 5px #3399ff solid;
margin-inline: 5px;

animation: ${slideRight} 1s ease;
`

const Heading = styled.h2`
color: ${props => props.color ? props.color : 'black'};
margin-top: ${props => props.margin ? props.margin : '10px'};
margin-bottom: 0px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const HeaderLine = styled.hr`
width: ${props => props.width ? props.width : '70%'};
height: 1px;
margin: 0px;
color: green;
border-top: 1px grey ${props => props.line ? props.line : 'solid'};
border-left: 0px;
border-right: 0px;
`

const Para = styled.p`
margin: 0;
padding: 0;
color: grey;
font-size: 14px;
`

const Span = styled.span`
width: 100%;
margin-top: 20px;
border-bottom: 1px #3399ff dotted;
color: #3399ff;
padding-left: 5px;
padding-top: 5px;
padding-bottom: 5px;
align-items: center;
justify-content: center;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;;
font-weight: bold;
font-size: 15px;
`

const Input = styled.input.attrs({type: 'text'})`
padding: 10px;
border: 1px grey solid;
background: transparent;
border-radius: 0px;
margin-top: 10px;
`

const TextArea = styled.textarea`
background: transparent;
border: 1px grey solid;
margin-top: 10px;
height: 100px;
`

const SendButton = styled.button`
color: white;
margin-top: 10px;
background: #3399ff;
padding: 5px;
border: none;
outline: none;

&:hover{
    animation: ${changeColor} 2s ease;
}
`

class Contact extends React.Component{


    render(){
        return(
            <ContactWrapper>

                <Heading>Contact</Heading>
                <HeaderLine width={'100%'}/>

                {/* <MapContainer /> */}

                <Span><FiHome />  Address </Span>
                <HeaderLine width={'100%'} line={'dotted'}/>
                <Para>Jamui, Bihar, PIN - 811317</Para>

                <Span><FiHome />  Phone </Span>
                <HeaderLine width={'100%'} line={'dotted'}/>
                <Para>nitishkumar020399@gmail.com</Para>

                <Span><FiHome />  Mail </Span>
                <HeaderLine width={'100%'} line={'dotted'}/>
                <Para>+91 8877952299</Para>

                <Span><FiHome /> Send A Message </Span>

                <Input name="name" placeholder="Enter Your Name"/>
                <Input name="email" placeholder="Enter Your Mail"/>
                <Input name="subject" placeholder="Subject"/>
                <TextArea placeholder="Enter your message here"/>
                <SendButton>Send</SendButton>
            </ContactWrapper>
        )
    }

}

export default Contact;