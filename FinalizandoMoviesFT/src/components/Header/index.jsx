import { Container, Profile, Search} from "./style";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi'
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useSearch } from "../../hooks/search";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";

export function Header(){
  const { signOut, user } = useAuth();
  const { setSearch} = useSearch();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;


     return(
        <Container>            
            <h1>RocketMovies</h1>
            <Search>
              <Input 
              placeholder="Pesquisa pelo título" 
              icon={FiSearch}
              onChange={(e) => setSearch(e.target.value)}
              />
            </Search>
            <Profile to="/profile">
              <div> 
                <span>{user.name}</span>
                <button onClick={signOut}>Sair</button>
              </div>
                <img src={avatarUrl}
                alt={user.name} />
                </Profile>
        </Container>
    )
}