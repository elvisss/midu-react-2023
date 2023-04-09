import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App() {
  const users = [
    {
      userName: 'elvisss24',
      name: 'Elvis',
      isFollowing: true,
    },
    {
      userName: 'midudev',
      name: 'Miguel',
      isFollowing: false,
    },
  ]

  return (
    <section className='App'>
      {/* <TwitterFollowCard
        initialIsFollowing
      >
        <strong>test1</strong>
      </TwitterFollowCard>

      <TwitterFollowCard
        initialIsFollowing={false}
        userName='elvisss24'
      >
        <strong>Elvis</strong>
      </TwitterFollowCard>

      <TwitterFollowCard
        initialIsFollowing
        userName='midudev'
      >
        <strong>Miguel</strong>
      </TwitterFollowCard> */}

      {/* {users.map(({ user, isFollowing, userName }) => (
        <TwitterFollowCard key={user} initialIsFollowing={isFollowing} userName={userName}>
          <strong>{user}</strong>
        </TwitterFollowCard>
      ))} */}

      {users.map((user) => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard key={userName} initialIsFollowing={isFollowing} userName={userName}>
            <strong>{name}</strong>
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
