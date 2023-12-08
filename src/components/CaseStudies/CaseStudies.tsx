import { useEffect, useState } from "react"
import './CaseStudies.scss'

interface CaseProps {
  imageUrl: string
  description: string
  title: string
}

function CaseStudy (props: CaseProps) {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.imageUrl})`}}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default function CaseStudies() {

  const [studies, setStudies] = useState<CaseProps[] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(0)

  useEffect(() => {
    fetch('https://socialmediaserver.co.za/challenge')
      .then((response) => response.json())
      .then((data: CaseProps[]) => {
        setStudies(data)
        setLength(data.length)
      })
      .catch((err) => console.log(err))
  }, [])

  function next() {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  function prev() {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <div className="studies-container">
      <div className="carousel-wrapper">
        <button className="left-arrow" onClick={prev}>
          &lt;
        </button>
        <div className="content-wrapper">
          <div className="studies-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {studies?.map((el) => (
            <CaseStudy {...el} key={el.title} />
          ))}
          </div>
        </div>
        <button className="right-arrow" onClick={next}>
          &gt;
        </button>
      </div>
    </div>
  )
}