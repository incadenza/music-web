import './App.css';
import { fetcher } from './util'
import useSWR from 'swr';
import { useParams, Link } from 'react-router-dom'

function App() {

  const { id } = useParams();
  const { data: artistData } = useSWR(`artists/${id}`, fetcher)
  const { data: artistAlbumsData } = useSWR(`artists/${id}/albums`, fetcher)

  if (!artistData?.artist || !artistAlbumsData?.albums) {
      return <h1>Loading!</h1>
  }

  return (
    <div>
        <h1>{artistData.artist.name}</h1>
        <p>Albums</p>
        <ul>
            {artistAlbumsData.albums.map((a) => (
                <li key={a.id}><Link to={`/albums/${a.id}`}>{a.name}</Link></li>
            ))}
        </ul>
    </div>
  );
}

export default App;
