import PropTypes from 'prop-types'

export const GifItem = ({ url, title }) => {
  return (
    <div className="card">
      <figure>
        <img src={url?? ""} alt={title??""} />
      </figure>
      <p>{ title??"" }</p>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}