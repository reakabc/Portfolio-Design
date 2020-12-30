import React from 'react'
import styled, {keyframes} from 'styled-components'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Skill from './components/Skill'
import SideNav from './components/SideNav'

const fadeOut = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const MainWrapper = styled.div`
margin: 0;
padding: 0;
background: url('/assets/rain.jpg');
height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
bottom: 0;
animation: ${fadeOut} 4s ease;

@media ${props => props.theme.mediaQueries.below768}{
    flex-direction: column;
}
`

class App extends React.Component{

    constructor(){
        super();

        this.state = {
            activeViewId: 0
        }
    }

    navigate = (id) => {
        this.setState({
            activeViewId: id
        })
    }

    render(){

        const View = () => {
            switch(this.state.activeViewId){
                case 0: return null;
                case 1: return <Resume />;
                case 2: return <Skill />;
                case 3: return <Portfolio />;
                case 4: return <Blog />;
                case 5: return <Contact />;
                
                default: return null;
            }
        }
        return(
            <MainWrapper>
                <SideNav perform={this.navigate} />
                <Home para={this.state.activeViewId == 0 ? this.state.activeViewId : '0'} img={ this.state.activeViewId == 0 ? 'assets/me.jpg' : 'assets/me_round.png'}/>
                {View()}
            </MainWrapper>
        )
    }

}

export default App;