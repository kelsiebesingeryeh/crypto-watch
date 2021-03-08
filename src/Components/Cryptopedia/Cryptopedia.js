import React from 'react'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import CryptopediaTags from '../CryptopediaTags/CryptopediaTags'

const Cryptopedia = ({tags, loading, error}) => {

const tagsOnDisplay = () => {
    const sortedTags = tags.sort((a, b) => {  
          if (a.name < b.name) {
              return -1
          }
    })

    return sortedTags.map(tag => {
        return (
            <CryptopediaTags 
            id={tag.id}
            key={tag.id}
            name={tag.name}
            description={tag.description}
            />
        )
    })
   }

    if (loading && !tags.length) {
        return <Loading />
    } else if (error && tags.length) {
        return <Error />
    } else if (tags.length) {
        return (
            <>
            <h1>Crypto 101</h1>
            {tagsOnDisplay()}
            </>
        )
    }
}

export default Cryptopedia