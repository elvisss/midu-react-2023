import { useState } from 'react'

export const TwitterFollowCard = ({ userName = 'default', name, initialIsFollowing, children }) => {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClass = isFollowing ? 'is-following' : ''

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt={`Avatar for ${name}`}
        />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-infoUserName'>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={'tw-followCard-button ' + btnClass}
          onClick={handleClick}
        >
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
