import  { useEffect, useState } from 'react'
import Container from '../../Components/container/Container'
import ProductItmes from '../../Components/productitmes/ProductItmes'
import { getProducts } from '../../Types/types'
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
          <ProductItmes Price={2000} Teacher_Course='arshia-hagh' TimeCourse='5' title='Recat-Basic' id='1'  />
          <ProductItmes Price={3000} Teacher_Course='arshia-hagh' TimeCourse='3' title='Recat-Advanced' id='2'  />
          <ProductItmes Price={4000} Teacher_Course='arshia-hagh' TimeCourse='2' title='Recat-Redux' id='3'  />
        </div>
        
         
          
        
      

      </Container>
    </div>
  )
}
