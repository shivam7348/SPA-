import React from 'react'
import Banner from '../../../banner/Banner'
import HealthCardsList from '../../../HealthList/HealthCardsList'



const img = "https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?t=st=1735387708~exp=1735391308~hmac=f688c2d8795cf8e2c777ba9c7d8637960487b65d3da6cd74e01a3aae7fbfa65b&w=1380"

function PharmacyMangementSystem() {
  return (
    <>
      <Banner data="Pharmacy Managemeny System" img={img}/>
      <HealthCardsList img={img}/>
    </>
  )
}

export default PharmacyMangementSystem