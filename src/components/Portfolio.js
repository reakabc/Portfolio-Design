import React from 'react'
import { FiHome } from 'react-icons/fi'
import styled, {keyframes} from 'styled-components'

const FadeOut = keyframes`
0%{
    opacity: 0;
}

100%{
    opacity: 1;
}
`

const IncSize = keyframes`
0%{
    font-size: 14px;
}

100%{
    font-size 45px;
}
`

const slideRight = keyframes`
0% { right: 400px; }
100% { right: 0; }
`

const PortfolioWrapper = styled.div`
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

const ImageCard = styled.div`
margin-top: 20px;
margin-bottom: 20px;
width: 100%;
height: 200px;
background: url(${props => props.bg});
background-size: cover;
display: flex;
border-radius: 10px;
justify-content: center;
align-items: center;
`

const InfoCard = styled.div`
width: 80%;
height: 80%;
opacity: 0;
background: rgba(0,0,0,0.8);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;


${ImageCard}:hover && {
    animation: ${FadeOut} 2s ease;
    opacity: 1;
}
`

const ProjectTitle = styled.h2`
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
animation: ${IncSize} 2px ease-in-out;

${ImageCard}:hover && {
    animation: ${IncSize} 2px ease-in-out;
}
`

const HeaderLine = styled.hr`
width: ${props => props.width ? props.width : '70%'};
height: 1px;
margin: 0px;
color: green;
border-top: 1px;
`

const AboutProject = styled.p`
color: white;
font-size: 14px;
`

const Heading = styled.h2`
color: black;
margin-top: 10px;
margin-bottom: 0px;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

class Portfolio extends React.Component{

    constructor(){
        super();

        this.state = {
            portfolio: [
                {id: 0, project:'First Project', company:'XYZ Company', img:'assets/drizzle.jpg'},
                {id: 1, project:'Second Project', company:'XYZ Company', img:'assets/rain.jpg'},
                {id: 2, project:'Third Project', company:'XYZ Company', img:'assets/snow.jpg'},
                {id: 3, project:'Fourth Project', company:'XYZ Company', img:'assets/sunny.jpg'}
            ]
        }
    }

    render(){
        return(
            <PortfolioWrapper>

                <Heading>Portfolio</Heading>
                <HeaderLine width={'100%'}/>

                <ImageCard bg={this.state.portfolio[0].img}>
                    <InfoCard>
                        <ProjectTitle>{this.state.portfolio[0].project}</ProjectTitle>
                        <HeaderLine/>
                        <AboutProject>{this.state.portfolio[0].company}</AboutProject>
                    </InfoCard>
                </ImageCard>

                <ImageCard bg={this.state.portfolio[1].img}>
                    <InfoCard>
                        <ProjectTitle>{this.state.portfolio[1].project}</ProjectTitle>
                        <HeaderLine/>
                        <AboutProject>{this.state.portfolio[1].company}</AboutProject>
                    </InfoCard>
                </ImageCard>

                <ImageCard bg={this.state.portfolio[2].img}>
                    <InfoCard>
                        <ProjectTitle>{this.state.portfolio[2].project}</ProjectTitle>
                        <HeaderLine/>
                        <AboutProject>{this.state.portfolio[2].company}</AboutProject>
                    </InfoCard>
                </ImageCard>

                <ImageCard bg={this.state.portfolio[3].img}>
                    <InfoCard>
                        <ProjectTitle>{this.state.portfolio[3].project}</ProjectTitle>
                        <HeaderLine/>
                        <AboutProject>{this.state.portfolio[3].company}</AboutProject>
                    </InfoCard>
                </ImageCard>
            </PortfolioWrapper>
        )
    }

}

export default Portfolio;