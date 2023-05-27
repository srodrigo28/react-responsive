import { MdMenu } from 'react-icons/md'
import logoImg from './../assets/react.svg'

import { Container, BoxIcon, BoxImg, Tittle } from "./style"
export function Header(){
    return(
        <Container>
            <BoxImg>
                <img src={logoImg} className="menu"/>
            </BoxImg>
        
            <Tittle>Hello World!</Tittle>
            
            <BoxIcon>
                <MdMenu className="menu"/>
            </BoxIcon> 
        </Container>
    )
}