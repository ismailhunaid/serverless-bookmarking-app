import React from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag'
import { GET_BOOKMARK } from './GetBookmark'

const DELETE_BOOKMARK = gql`
mutation($input:DeleteBookmarkInput){
    deleteBookmark(input:$input){
        id 
        url
        description
    }
}


`;


export const DeleteBookmark = (props) => {
    const {id} = props.id
    console.log(props)
    const [deleteBookmark] = useMutation(DELETE_BOOKMARK)

const handleDelete =(e)=>{
    console.log(e.target.value)
    deleteBookmark({
        variables:{
            input:{id:e.target.value}
        }, refetchQueries:[{query:GET_BOOKMARK}]
    })
    .then((input)=>{
        console.log(input)
    }).catch((error)=>{
        console.log(error)
    })
    

}
    return (
        <div>
            <button onClick={handleDelete} value={id} >DELETE BOOKMARK</button>

        </div>
    )
}


