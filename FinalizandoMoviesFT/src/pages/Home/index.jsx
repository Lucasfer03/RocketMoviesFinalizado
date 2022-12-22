import { Container, Brand, NewMovie, Content } from './styles.js'
import { Header } from '../../components/Header';
import { IoAddOutline } from 'react-icons/io5';
import { Note } from '../../components/Note';
import { useSearch } from "../../hooks/search";
import { useNavigate } from 'react-router-dom';

export function Home() {
    const { notes } = useSearch();

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    return(
    <Container>
        <Header/>
        <Brand>
        <h1>Meus Filmes</h1>
        <NewMovie to="/new">
            <IoAddOutline/> Adicionar Filme
        </NewMovie>
        </Brand>
        <Content>
            {
                notes.map(note => (
                <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
            />
            ))
            }
        </Content>
    </Container>
    )
}