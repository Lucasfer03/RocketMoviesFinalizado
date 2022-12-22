import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";
import {useAuth} from "../hooks/auth";

export const SearchContext = createContext({});

function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const { token } = useAuth();

  const fetchNotes = async () => {
    try {
      const response = await api.get(`/notes?title=${search}`, {headers: {Authorization: `Bearer ${token}`}});
      setNotes(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [search])

  return (
    <SearchContext.Provider
      value={{
        setSearch,
        notes,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const search = useContext(SearchContext);

  return search;
}

export { SearchProvider, useSearch };
