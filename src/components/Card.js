import React from 'react'
import styled from 'styled-components'

const OuterBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px #727272 solid;
margin-top: 10px;
padding: 2px;
`

const InnerBox = styled.div`
width: 98.5%;
display: flex;
flex-direction: column;
//align-items: center;
//justify-content: center;
border: 2px #727272 solid;

`

const InnerHeading = styled.h3`
font-family: Arial, Helvetica, sans-serif;
margin-left: 10px;
margin-top: 10px;
margin-bottom: 5px;
`

const InnerSubHeading = styled.p`
font-style: italic;
font-size: 14px;
margin-left: 10px;
margin-top: 0;
justify-content: right;
`

const Para = styled.p`
font-size: 14px;
margin-left: 10px;
margin-bottom: 10px;
`
const HeaderLine = styled.hr`
width: ${props => props.width ? props.width : '70%'};
height: 1px;
margin-left: 10px;
color: green;
border-top: 1px grey ${props => props.line ? props.line : 'solid'};
border-left: 0px;
border-right: 0px;
`

const Card = (props) => {

    return(
        <OuterBox>
            <InnerBox>
                <InnerHeading>{props.title}</InnerHeading>
                <InnerSubHeading>{props.sub}</InnerSubHeading>
                <HeaderLine width={'70%'}/>
                <Para>{props.desc}</Para>
            </InnerBox>
        </OuterBox>
    )

}

export default Card;