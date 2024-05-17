import {MdDelete} from 'react-icons/md'
import './index.css'

const PlayListCard = props => {
  const {playListDetails, iconDeleteClicked} = props
  const {id,imageUrl, genre, name, duration} = playListDetails

  const iconDelete = () => {
    iconDeleteClicked(id)
  }

  return (
    <li className="playList-Item">
      <div className="song-info-con">
        <img src={imageUrl} alt="track" className="listItem-img" />
        <div className="">
          <p>{genre}</p>
          <p className="itemName">{name}</p>
        </div>
      </div>
      <div className="icon-con">
        <p>{duration}</p>
        <button data-testid="delete">
          <MdDelete className="icon" onClick={iconDelete} />
        </button>
      </div>
    </li>
  )
}

export default PlayListCard
