import React from 'react'
import styled, {keyframes} from 'styled-components'

const loadingAnim = keyframes`
    0% {width: 0%}
    100% {width: 100%}
`

const rotate = keyframes`
    0%{transform: rotate(0)}
    25%{transform: rotate(90deg)}
    50%{transform: rotate(180deg)}
    75%{transform: rotate(270deg)}
    1000%{transform: rotate(360deg)}
`

const SpalshScreen = styled.div`
width: 100%;
height: 100vh;
background: Tomato;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

`

const LoadingImage = styled.div`
height: 20px;
width: 20px;
border: 3px white solid;

animation: ${rotate} 4s ease-in-out;
animation-iteration-count: infinite;
`

const Loading = styled.div`
height: 100%;
background: white;

animation: ${loadingAnim} 2s ease-in-out;
animation-iteration-count: infinite;
`

const HeadLine = styled.h1`
padding: 10px;
color: white;
margin: 2px;
`

const SubHeadLine = styled.h3`
padding: 10px;
color: white;
margin: 2px;
`

const SplashScreen = () => {



    return(
        <SpalshScreen>
            <LoadingImage>
                <Loading/>
            </LoadingImage>
            <HeadLine>ReaK AbC</HeadLine>
            <SubHeadLine>Website Designer And Developer</SubHeadLine>
        </SpalshScreen>
    )
}

export default SplashScreen;