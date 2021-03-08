import React, { Component } from 'react'
import {getAllTags} from '../../apiCalls'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

class Cryptopedia extends Component {
    constructor() {
        super()
        this.state = {
            tags: [],
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
        getAllTags()
        .then(tags => this.setState({tags, isLoading: false})
        )
        .catch(error => this.setState({error: true}))
    }

   tagsOnDisplay() {
       
   }

    render() {
        return (
            <h1>Crypto 101</h1>
        )
    }
}

export default Cryptopedia



// exchangesOnDisplay() {
//      const sortedExchange = this.state.exchanges.sort((a, b) => b['confidence_score'] - a['confidence_score'])
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
//   }

//   render() {
//     return (
//       <>
//         {this.state.isLoading && <Loading />}
//         {this.state.error && <Error />}
//         <div className="cryptoTableContainer">
//           <p className="cryptoTableHeading">Cryptocurrency Exchanges</p>
//           <table className="cryptoTable">
//               <thead>
//                   <tr>
//                     <th>Exchange Name</th>
//                     <th>Exchange Score</th>
//                     <th>Volume(24H)</th>
//                     <th># Markets</th>
//                     <th># Coins</th>
//                     <th>Fiats Supported</th>
//                   </tr>
//               </thead>
//             <tbody>
//               {this.exchangesOnDisplay()}
//             </tbody>
//           </table>
//         </div>
//       </>
//     )
//   }
// }

// export default Exchanges