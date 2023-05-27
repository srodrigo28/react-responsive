import { Container, ContainerLogin, InputLogin } from "./style";

export function Login(){
    return(
        <Container>
            <ContainerLogin>
                <h2>App Next Gamer</h2>
                <InputLogin>
                    <label>E-mail</label>
                    <input type="text" />
                </InputLogin>
                <InputLogin>
                    <label>E-mail</label>
                    <input type="text" />
                </InputLogin>
                <InputLogin>
                    <button>Entrar</button>
                    <button>Cadastre-se</button>
                </InputLogin>
            </ContainerLogin>
        </Container>
    )
}