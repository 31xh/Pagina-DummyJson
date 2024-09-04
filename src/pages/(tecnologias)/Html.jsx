import html from '../../assets/HTML.png'

const Html = () => {
  return (
    <div>
      <h3 className="text-center display-1 text-white py-4">HTML</h3>
      <div className="container bg-white bg-transparent">
        <div className="row text-white">
            <div className="col-md-6">
                <h5 className=" px-5 text-center py-4 display-5">Que es HTML?</h5>
                <p>HTML, acrónimo en inglés de HyperText Markup Language («lenguaje de marcado de hipertexto»), hace referencia al lenguaje de marcado utilizado en la creación de páginas web. Este estándar que sirve de referencia del software que interactúa con la elaboración de páginas web en sus diferentes versiones. Define una estructura básica y un código (denominado código HTML) para la presentación de contenido de una página web, que incluye texto, imágenes, videos, juegos, entre otros elementos.</p>
            </div>
            <div className="col-md-6 opacity-75 pt-5">
                <img src={html} className='img-fluid px-4' alt=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Html
