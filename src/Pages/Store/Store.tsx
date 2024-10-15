import React, { useEffect, useState } from 'react'
import Container from '../../Components/container/Container'
import ProductItmes from '../../Components/productitmes/ProductItmes'
import { Link } from 'react-router-dom'
import { getProducts } from '../../Types/types'
import axios from 'axios'
import { getProduct } from '../../services/api'

export default function Store() {
  const [product,setProduct] = useState<getProducts[]>([])
  useEffect(() => {
    getProduct().then(result => {
      setProduct(result)
    })
  },[setProduct])
  return (
    
    <div>
      <Container>
        <h1 className='text-start text-xl'>React Courses</h1>
        <br/>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {product.map(result => (
            <ProductItmes  key={result.id} {...result}/>
          ))}
        </div>
        
         
          
        
      

      </Container>
    </div>
  )
}
