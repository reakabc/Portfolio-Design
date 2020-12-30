import React from 'react'
import styled, {keyframes} from 'styled-components'
import { FiDisc } from 'react-icons/fi'
import TestimonyContainer from './TestimonyContainer'

const fadeOut = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const TestmonialWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`

const ControlsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 5px;
margin-top: 20px;

animation: ${fadeOut} 1s ease;
`

const Dot = styled(FiDisc)`
opacity: ${props => props.active ? 1 : 0.5};
width: 20px;
height: 20px;
margin: 10px;
`


class Testimonial extends React.Component{

    constructor(){
        super();
        this.state = {
            testimony: [
                {id:1, name:'ReaK AbC', company:'ReaK AbC & Co.', img:'assets/me.jpg', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
                {id:2, name:'Nitish Kumar',  company:'XYZ & Co.', img:'assets/me_round.png', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
                {id:3, name:'RK Gupta',  company:'RK & Music',img:'assets/me.jpg', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
                {id:4, name:'XYZ',  company:'ReaK AbC & Co.', img:'assets/me_round.png', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ],

            activeId: 0
        }
    }

    changeTestimony(id){
        this.setState({
            activeId: id,
            animate: true
        })

    }



    render(){
        return(
            <TestmonialWrapper  key={this.state.activeId}>

                <TestimonyContainer 
                    text={this.state.testimony[this.state.activeId].text}
                    img={process.env.PUBLIC_URL+this.state.testimony[this.state.activeId].img}
                    name={this.state.testimony[this.state.activeId].name}
                    company={this.state.testimony[this.state.activeId].company} />
                    

                <ControlsWrapper>
                    <Dot active={this.state.activeId==0} onClick={() => this.changeTestimony(0)}/>
                    <Dot active={this.state.activeId==1} onClick={() => this.changeTestimony(1)}/>
                    <Dot active={this.state.activeId==2} onClick={() => this.changeTestimony(2)}/>
                    <Dot active={this.state.activeId==3} onClick={() => this.changeTestimony(3)}/>
                </ControlsWrapper>
            </TestmonialWrapper>
        )
    }

}

export default Testimonial;