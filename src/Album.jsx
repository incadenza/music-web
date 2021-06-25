import './App.css';
import { fetcher } from './util'
import useSWR from 'swr';
import { useParams } from 'react-router-dom'

function App() {

  const { id } = useParams();
  const { data: albumData } = useSWR(`albums/${id}`, fetcher)
  const { data: trackData } = useSWR(`albums/${id}/tracks`, fetcher)

  if (!albumData?.album || !trackData?.tracks) {
      return <h1>Loading!</h1>
  }

  return (
    <div>
        <h1>{albumData.album.name}</h1>
        <p>Tracks</p>
        <ul>
            {trackData.tracks.map((t) => (
                <li key={t.id}>{t.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
