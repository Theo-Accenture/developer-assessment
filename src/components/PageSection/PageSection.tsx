import rectangle from '../../assets/Rectangle.svg'
import './PageSection.scss'

export default function PageSection(props: any) {
  return (
    <div className="page-section">
      <div className="header-line">
        <img src={rectangle} alt=""></img>
        <div className="title">{props.title}</div>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}