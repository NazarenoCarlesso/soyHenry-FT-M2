import { connect } from 'react-redux'
import React from 'react'
import './products.css'
// El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card'
import { getStoreName } from '../../redux/actions/actions'

export function Products({ list, storeName, getStoreName }) {
   // eslint-disable-next-line react-hooks/exhaustive-deps
   React.useEffect(() => { if (getStoreName) getStoreName() }, [])

   return (
      <div className='productsBg'>
         <h1 className='productsTl'>{storeName}</h1>
         <div className='productsList'>
            {
               /* ¡Renderiza aquí todas tus cards! */
               list.map((product, index) => { return <Card key={index} name={product.name} price={product.price} id={product.id} /> })
            }
         </div>
      </div>
   )
}

export function mapStateToProps(state) {
   return {
      list: state.list
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      getStoreName: () => { dispatch(getStoreName()) }
   }
}

export default connect(mapStateToProps, null)(Products)