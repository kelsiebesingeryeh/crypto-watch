import React, { Component } from 'react'
import {getAllTags} from '../../apiCalls'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import CryptopediaTags from '../CryptopediaTags/CryptopediaTags'

const Cryptopedia = ({tags, isLoading, error}) => {

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
        return (
            <>
            <h1>Crypto 101</h1>
            {tagsOnDisplay()}
            </>
        )
}

export default Cryptopedia


// const Exchanges = ({ exchanges, isLoading, error }) => {
//   const exchangesOnDisplay = () => {
//     const sortedExchange = exchanges.sort(
//       (a, b) => b["confidence_score"] - a["confidence_score"]
//     );
//     return sortedExchange.map((exchange) => {
//       return (
//         <ExchangeDetails
//           key={exchange.id}
//           id={exchange.id}
//           name={exchange.name}
//           links={exchange.links}
//           currencies={exchange.currencies}
//           markets={exchange.markets}
//           fiats={exchange.fiats}
//           volume={exchange.quotes.USD["reported_volume_24h"]}
//           confidenceScore={exchange["confidence_score"]}
//         />
//       );
//     });
//   };
//   return (
//     <>
//       {isLoading && <Loading />}
//       {error && <Error />}
//       <div className="cryptoTableContainer">
//         <p className="cryptoTableHeading">Cryptocurrency Exchanges</p>
//         <table className="cryptoTable">
//           <thead>
//             <tr>
//               <th>Exchange Name</th>
//               <th>Exchange Score</th>
//               <th>Volume(24H)</th>
//               <th># Markets</th>
//               <th># Coins</th>
//               <th>Fiats Supported</th>
//             </tr>
//           </thead>
//           <tbody>{exchangesOnDisplay()}</tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Exchanges;