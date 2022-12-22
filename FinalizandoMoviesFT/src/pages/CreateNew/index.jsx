import { Header } from '../../components/Header';
import { ButtonText} from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Highlighter } from '../../components/Highlighter';
import { Mark } from '../../components/Mark';
import { Button } from '../../components/Button';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form } from './styles';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function CreateNew(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleBack(){
        navigate(-1)
    }

    async function handleRemoveNotes(){
        const confirm = window.confirm("Deseja realmente deletar todos os filmes?");

        if(confirm){
            await api.delete(`/notes`);
            navigate("/");
        }
    }

    async function handleNewNote(){
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!");
        }

        if(!title){
            return alert("Coloque um título!")
        }

        if(!rating){
            return alert("Dê uma nota!")
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        });

        alert("Nota criada com sucesso!");
        navigate("/");
    }


    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                    <ButtonText 
                    title="Voltar"
                    onClick={handleBack}
                    />
                    <h1>Novo filme</h1>
                    </header>
                    <div>
                    <Input 
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}
                    />
                    <Input 
                    placeholder="Sua nota (de 0 a 5)"
                    onChange={e => setRating(e.target.value)}
                    />
                    </div>
                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />
                    <Mark title="Marcadores">
                    <div className="marcadores">
                        {
                            tags.map((tag, index) => (
                            <Highlighter 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                            />
                            ))
                        }

                        <Highlighter 
                        isNew 
                        placeholder="Novo marcador"
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                        />
                    </div>
                    </Mark>
                    <div className='buttons'>
                        <Button 
                        title="Excluir filmes"
                        onClick={handleRemoveNotes}
                        />
                        <Button 
                        title="Salvar alterações"
                        onClick={handleNewNote}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}