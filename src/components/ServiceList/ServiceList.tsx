import webDevIcon from '../../assets/web-dev-icon.svg'
import uxIcon from '../../assets/ux-icon.svg'
import appDevIcon from '../../assets/app-dev-icon.svg'
import blockchainIcon from '../../assets/blockchain-icon.svg'
import './ServiceList.scss'

interface ServiceProps {
  icon: string
  title: string
  description: string
}

const services: ServiceProps[] = [{
  icon: webDevIcon,
  title: 'Web development',
  description: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
}, {
  icon: uxIcon,
  title: 'User experience & design',
  description: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
}, {
  icon: appDevIcon,
  title: 'Mobile app development',
  description: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
}, {
  icon: blockchainIcon,
  title: 'Blockchain solutions',
  description: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
}]

function ServiceItem( props: ServiceProps) {
  return (
    <div className="service-item">
      <img src={props.icon}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default function ServiceList() {
  return (
    <div className="services">
      <h1>
        We offer a complete range of bespoke design and development services to help you turn your ideas
        into digital masterpieces
      </h1>
      <div className="service-list">
        {services.map((el) => (
          <ServiceItem {...el} key={el.title} />
        ))}
      </div>
    </div>
  )
}