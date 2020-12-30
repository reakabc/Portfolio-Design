import React from 'react'
import styled, { keyframes } from 'styled-components'
import {FiHome} from 'react-icons/fi'

const slideRight = keyframes`
0% { right: 400px; }
100% { right: 0; }
`

const SkillWrapper = styled.div`
position:relative;
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
`

const SkillBack = styled.div`
margin-top: 10px;
width: 100%;
border: 1px #f1f1f1 solid;
padding: 0px;
border-radius: 3px;
`

const SkillMiddle = styled.div`
height: 100%;
margin: 0px;
padding: 0px;
width: ${props => props.width};
background: ${props => props.color};
border-radius: 3px;
` 

const SkillName = styled.p`
color: white;
margin: 0px;
padding: 3px;
background: rgba(0,0,0,0.2);
border-radius: 3px;
float: left;
`

const PercentageView = styled.p`
float: right;
margin: 0px;
padding: 3px;
height: 100%;
color: #f2f2f2;
`

class Skill extends React.Component{


    render(){
        return(
            <SkillWrapper>
                <Span><FiHome />  Professional Skills </Span>
                <SkillBack><SkillMiddle width={'75%'} color={'#cc0000'}>
                    <SkillName>Communication</SkillName>
                    <PercentageView>75%</PercentageView>
                </SkillMiddle></SkillBack>
                <SkillBack><SkillMiddle width={'90%'} color={'#3399ff'}>
                    <SkillName>Leadership</SkillName>
                    <PercentageView>90%</PercentageView>
                </SkillMiddle></SkillBack>
                <SkillBack><SkillMiddle width={'80%'} color={'#33cc33'}>
                    <SkillName>Confidence</SkillName>
                    <PercentageView>80%</PercentageView>
                </SkillMiddle></SkillBack>

                <Span><FiHome />  Professional Skills </Span>
                <SkillBack><SkillMiddle width={'75%'} color={'#cc0000'}>
                    <SkillName>Communication</SkillName>
                    <PercentageView>75%</PercentageView>
                </SkillMiddle></SkillBack>
                <SkillBack><SkillMiddle width={'90%'} color={'#3399ff'}>
                    <SkillName>Leadership</SkillName>
                    <PercentageView>90%</PercentageView>
                </SkillMiddle></SkillBack>
                <SkillBack><SkillMiddle width={'80%'} color={'#33cc33'}>
                    <SkillName>Confidence</SkillName>
                    <PercentageView>80%</PercentageView>
                </SkillMiddle></SkillBack>

                <Span><FiHome />  Professional Skills </Span>
                <SkillBack><SkillMiddle width={'75%'} color={'#cc0000'}>
                    <SkillName>Communication</SkillName>
                    <PercentageView>75%</PercentageView>
                </SkillMiddle></SkillBack>
                <SkillBack><SkillMiddle width={'90%'} color={'#3399ff'}>
                    <SkillName>Leadership</SkillName>
                    <PercentageView>90%</PercentageView>
                </SkillMiddle></SkillBack>
                <SkillBack><SkillMiddle width={'80%'} color={'#33cc33'}>
                    <SkillName>Confidence</SkillName>
                    <PercentageView>80%</PercentageView>
                </SkillMiddle></SkillBack>
            </SkillWrapper>
        );
    }

}

export default Skill;