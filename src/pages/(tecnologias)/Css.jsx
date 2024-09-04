import css from '../../assets/CSS.png'

const Css = () => {
  return (
    <div>
      <h3 className="text-center display-1 py-4 text-white">CSS</h3>
      <div className="container text-white">
        <div className="row">
            <div className="col-md-6">
                <h5 className="display-5 py-4 text-center">Que es CSS?</h5>
                <p>CSS (siglas en inglés de Cascading Style Sheets), en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado Es muy usado para establecer el diseño visual de los documentos web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcétera. Junto con HTML y JavaScript, CSS es una tecnología usada por muchos sitios web para crear páginas visualmente atractivas, interfaces de usuario para aplicaciones web y GUIs para muchas aplicaciones móviles (como Firefox OS).</p>
            </div>
            <div className="col-md-6 opacity-75">
                <img src={css} className='px-5 img-fluid' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Css
