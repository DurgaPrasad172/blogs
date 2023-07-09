// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props

  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`}>
      <li>
        <div className="imageCont">
          <img src={imageUrl} alt={`item${id}`} />
        </div>
        <div>
          <p>{topic}</p>
          <p>{title}</p>
          <div>
            <img src={avatarUrl} alt={`item${id}`} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
