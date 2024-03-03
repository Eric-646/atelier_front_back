import { useParams } from 'react-router-dom';

export default function Ticket() {
    const { id } = useParams();
    return <div>
        <h1>Ticket {id}</h1>;
        </div>
        
    }