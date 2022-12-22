import { Container, Stars } from "./styles";
import { Tag } from "../Tags";
import { AiOutlineStar } from "react-icons/ai";

export function Note({ data, ...rest }) {
  
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </Stars>

      <p>
        {data.description}
      </p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
    
  );
}
