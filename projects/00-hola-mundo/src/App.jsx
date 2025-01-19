import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'sindre',
        name: 'Sindre Sorhus',
        initialIsFollowing: true
    },{
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initialIsFollowing: false
    },{
        userName: 'sindresorhus',
        name: 'Sindre Sorhus',
        initialIsFollowing: true
    }
]

export function App (){
    return (
        <section className="App">
            {
                            users.map(user => {
                                return (
                                    <TwitterFollowCard 
                                        key={user.userName}
                                        userName={user.userName}
                                        name={user.name}
                                        initialIsFollowing={user.initialIsFollowing}
                                    />
                                )
                            })
            }

        </section>

    )
}