import React from 'react'
import { FiHome } from 'react-icons/fi'
import styled, {keyframes} from 'styled-components'


const slideRight = keyframes`
0% { right: 400px; }
100% { right: 0; }
`

const BlogWrapper = styled.div`
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
width: ${props => props.width ? props.width : '70%'};
height: 1px;
margin: 0px;
color: green;
border-top: 1px grey ${props => props.line ? props.line : 'solid'};
border-left: 0px;
border-right: 0px;
`

const BlogCard = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
flex-direction: column;
border-top: 5px #446622 solid;
padding: 10px;
background: white;
`

const BlogImage = styled.img`
width: 100%;
height: 150px;
`

const Para = styled.p`
color: grey;
padding: 2px;
margin-top: 0px;
margin-bottom: 20px;
`

const ButtonBack = styled.div`
width: 100px;
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

&:active{
    border: none;
}



${ButtonBack}:hover && {
    width: 100px;
}
`

const ButtonText = styled.p`
width: 100px;
font-size: 10px;
color: white;
padding: 10px;
`

class Blog extends React.Component{
    render(){
        return(
            <BlogWrapper>
                <Heading>Blog</Heading>
                <HeaderLine width={'100%'}/>

                <BlogCard>
                    <BlogImage src={process.env.PUBLIC_URL+"assets/cloud.jpg"} />
                    <Heading>Blog</Heading>
                    <HeaderLine width={'100%'} line={'dotted'} />
                    <Para>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....
                    </Para>
                    <HeaderLine width={'100%'}/>
                    <ButtonBack><Button><ButtonText>MORE</ButtonText></Button></ButtonBack>
                </BlogCard>

                <BlogCard>
                    <BlogImage src={process.env.PUBLIC_URL+"assets/cloud.jpg"} />
                    <Heading>Blog</Heading>
                    <HeaderLine width={'100%'} line={'dotted'} />
                    <Para>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....
                    </Para>
                    <HeaderLine width={'100%'}/>
                    <ButtonBack><Button><ButtonText>MORE</ButtonText></Button></ButtonBack>
                </BlogCard>

                <BlogCard>
                    <BlogImage src={process.env.PUBLIC_URL+"assets/cloud.jpg"} />
                    <Heading>Blog</Heading>
                    <HeaderLine width={'100%'} line={'dotted'} />
                    <Para>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....
                    </Para>
                    <HeaderLine width={'100%'}/>
                    <ButtonBack><Button><ButtonText>MORE</ButtonText></Button></ButtonBack>
                </BlogCard>

                <BlogCard>
                    <BlogImage src={process.env.PUBLIC_URL+"assets/cloud.jpg"} />
                    <Heading>Blog</Heading>
                    <HeaderLine width={'100%'} line={'dotted'} />
                    <Para>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....
                    </Para>
                    <HeaderLine width={'100%'}/>
                    <ButtonBack><Button><ButtonText>MORE</ButtonText></Button></ButtonBack>
                </BlogCard>

            </BlogWrapper>
        )
    }
}

export default Blog;