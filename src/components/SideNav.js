import React from 'react'
import styled from 'styled-components'


const NavWrapper = styled.div`
position: absolute;
right: ${props => props.right};
top: 50px;
display: flex;
justify-content: left;
align-items: center;
flex-direction: column;
width: 200px;
margin: 40px;
`

const NavList = styled.ul`
width: 100%;
`

const NavItem = styled.li`
list-style: none;
width: 100%;
background-color: ${props => props.active ? '#1a001a' : '#3399ff'};
margin: 10px;
`

const Item = styled.div`
width: 0;
height: 100%;
color:white;
align-items: center;
justify-content: center;
transition: width 0.5s;
background: #1a001a;

${NavItem}:hover && {
    width: 100%;
}
`
const Para = styled.p`
color:white;
padding: 10px;
`


class SideNav extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            arr: [
                {id: 0, name:'HOME'},
                {id: 1, name:'RESUME'},
                {id: 2, name:'SKILLS'},
                {id: 3, name:'PORTFOLIO'},
                {id: 4, name:'BLOG'},
                {id: 5, name:'CONTACT'},

            ],
            selected: 0
        }
    }

    changeColor = (id) => {
        this.setState({ selected: id });
        //console.log(this.state.id);

        this.props.perform(id);
    };

    render(){
        return(
            <NavWrapper right={this.state.selected === 0 ? '65%' : '80%'}>
                <NavList>
                    {this.state.arr.map(({name, id}) => (
                        <NavItem active={this.state.selected === id ? true : false} key={id} onClick={() => this.changeColor(id)}>
                            <Item key={id}><Para>{name}</Para></Item>
                        </NavItem>
                    ))}
                </NavList>
            </NavWrapper>
        )
    }

}

export default SideNav;