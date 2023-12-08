import './Brands.scss'

import bbc from '../../assets/brand-logos/bbc-black.svg'
import distell from '../../assets/brand-logos/distell-black.svg'
import engen from '../../assets/brand-logos/engen-black.svg'
import liquid from '../../assets/brand-logos/liquid-black.svg'
import microsoft from '../../assets/brand-logos/microsoft-black.svg'
import multichoice from '../../assets/brand-logos/multichoice-black.svg'
import nike from '../../assets/brand-logos/nike-black.svg'
import pnp from '../../assets/brand-logos/pnp-black.svg'
import sanlam from '../../assets/brand-logos/sanlam-black.svg'
import santam from '../../assets/brand-logos/santam-black.svg'
import spotify from '../../assets/brand-logos/spotify-black.svg'
import tfg from '../../assets/brand-logos/tfg-black.svg'
import tyme from '../../assets/brand-logos/tyme-bank-black.svg'
import visa from '../../assets/brand-logos/visa-black.svg'
import wesgro from '../../assets/brand-logos/wesgrow-black.svg'


const brands = [visa, tyme, distell, spotify, microsoft, engen, nike, wesgro, multichoice, pnp, liquid, tfg, sanlam, santam, bbc]

export default function Brands() {
  return (
    <div className="brands">
      <h1>Trusted by leading brands</h1>
      <div className="brand-logos">
        {brands.map((brand, index) => {
          return (
            <div className="logo-wrapper">
              <img key={index} src={brand} alt=""></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}