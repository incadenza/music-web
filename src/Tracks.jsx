import './App.css';
import { fetcher } from './util'
import useSWR from 'swr';
import {Link} from 'react-router-dom'
function App() {
  const { data } = useSWR('tracks', fetcher)

  if (!data?.tracks) {
      return <h1>Loading!</h1>
  }

  return (
    <div>
        <h1>All Tracks</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {data.tracks.map((t => (
                    <tr key={t.id}>
                        <td>{t.name}</td>
                        <td><Link to={`/artists/${t.artistId}`}>{t.artist}</Link></td>
                        <td><Link to={`/albums/${t.albumId}`}>{t.album}</Link></td>
                        <td>{t.genre}</td>
                    </tr>
                )))}
            </tbody>
        </table>
    </div>
  );
}

export default App;
