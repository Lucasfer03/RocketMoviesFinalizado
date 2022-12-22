import { Container, Avaliation, PersonAvaliator, TagArea, MovieDescription, Content } from "./styles";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const {user} = useAuth();
  const [data, setData] = useState(null);
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;


const navigate = useNavigate();
const params = useParams();

function backHome(){
  navigate(-1)
}

useEffect(() =>{
  async function fetchNote(){
    const response = await api.get(`/notes/${params.id}`);
    setData(response.data);
  }

  fetchNote();
},[]);

  return (
    <Container>
      <Header />
      {
        data &&
        <main> 
      <Content>
        <ButtonText title="Voltar" onClick={backHome}/>
        <Avaliation>
          <h1>{data.title}</h1>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Avaliation>
        <PersonAvaliator>
          <img src={avatarUrl} alt={user.name} />
          <p> Por </p>
          <span>{user.name}</span>
          <AiOutlineClockCircle />
          <p>{data.created_at}</p>
          </PersonAvaliator>
        {
          data.tags &&
        <TagArea>
          {
            data.tags.map(tag => (
            <Tag 
            key={String(tag.id)}
            title={tag.name} 
            />
            ))
          }
        </TagArea>
        }
        <MovieDescription>
          <p>
            {data.description}
          </p>
        </MovieDescription>
      </Content>
      </main>
      }
    </Container>
  );
}
