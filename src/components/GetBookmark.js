import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DeleteBookmark } from './DeleteBookmark';

export const GET_BOOKMARK = gql`
query{
    bookmark{
      id
      url 
      description
    }
  }


`;

function GetBookmark() {
    const { error, loading, data } = useQuery(GET_BOOKMARK)
    if (error) {
        return error
    }
    if (loading) return (<CircularProgress />)
    return (
        <div>
            {data.bookmark.map((bookmark, i) => {
                return (
                    <div key={i}>
                        <ul>
                            <li> URL:{bookmark.url}</li>
                            <li> Description:{bookmark.description}</li>
                            <div>
                                <button>
                                    <a href={bookmark.url} target="_blank"> LINK</a>
                                </button>
                                <DeleteBookmark id={bookmark}/>

                            </div>

                        </ul>

                    </div>
                )

            })}


        </div>
    )
}

export default GetBookmark
