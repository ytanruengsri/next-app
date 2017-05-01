import Layout from '../components/PrimaryLayout.js'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <Layout>
        <h1>Batman Movies</h1>
        <ul>
            {props.movies.map((movie) => (
                <li key={movie.imdbID}>
                    <Link as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
                        <a>{movie.Title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Arial";
            }
            
            ul {
                padding: 0;
            }
            
            li {
                list-style: none;
                margin: 5px 0;
            }
            
            a {
                text-decoration: none;
                color: blue;
            }
            
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://www.omdbapi.com/?s=batman');
    const data = await res.json();

    console.log(`Movie data fetched. Count: ${data.Search.length}`);

    return {
        movies: data.Search,
    }
};

export default Index;
