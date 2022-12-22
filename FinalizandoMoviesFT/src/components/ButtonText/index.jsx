import { Container } from "./styles";
import { BiArrowBack } from "react-icons/bi"

export function ButtonText({title, ...rest}){
    return(
        <Container type="button" {...rest}>
            <BiArrowBack/>
            {title}
        </Container>
    );
}