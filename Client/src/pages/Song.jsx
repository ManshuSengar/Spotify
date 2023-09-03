import SongHead from '../components/songs/SongHead'
import './songdetails.css'
import './home.css'
import './song.css'
import { Link } from 'react-router-dom'
import { PlayCircleFilled, HeartOutlined, EllipsisOutlined } from '@ant-design/icons'
import { SongItem } from '../components/songs/SongList'
import SongCard from '../components/home/SongCard'
import { useEffect } from 'react'

const Song = () => {
    useEffect(() => {
        const handleScroll = () => {
            var songListTop = document.querySelector('.song-information');
            if (songListTop) {
                var top = songListTop.getBoundingClientRect().top
                if (top <= 75) {
                    const event = new CustomEvent("reached_top", {
                        detail: "Glance Out A Casement Window",
                    })
                    dispatchEvent(event)
                } else {
                    dispatchEvent(new CustomEvent("removed_top"))

                }
            }
        }
        const main = document.querySelector(".main")
        if (main) {
            main.addEventListener('scroll', handleScroll)
        }

        return () => main && main.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className="song-details song"
            style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                background: "url(https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581),#11111115",
                backgroundSize: 'cover',
            }} >
            <SongHead
                name='Glance Out A Casement Window'
                type='song'
                image='https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581'
                authorImage='https://i.scdn.co/image/ab67616d00001e02c1f1b784f7ef6ad1fd13e581'
                author='Janet Redger'
                timing="4:30"
                date='2023'
                songs='Glance Out A Casement Window'
            />
            <section className='song-information'>
                <div className="song-top">
                    <PlayCircleFilled
                        className='play-circle'
                        style={{
                            fontSize: 50,
                            color: "#1BD760"
                        }} />
                    <HeartOutlined
                        className='heart-outlined'
                        style={{
                            fontSize: 35,
                            color: "#c3c4c6"
                        }} />
                    <EllipsisOutlined
                        style={{
                            fontSize: 40,
                            color: "#c3c4c6"
                        }} />
                </div>
                <div className="song-login-wrapper">
                    <p className="song-login-head">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, voluptatibus!
                    </p>
                    <div className="song-login-buttons buttons-container">
                        <button className='sign-up' >
                            Login
                        </button>
                        <button className='login'>
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="popular-tracks">
                    <p className="track-head">
                        Popular tracks
                    </p>
                    <p className="track-artist">
                        Janet Redger
                    </p>
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                </div>
                <section className="first-section">
                    <div className="section-top">
                        <p className="section-head">
                            Popular releases by Janet Redger
                        </p>
                        <Link to='/song-listing' className="show-all">Show all</Link>
                    </div>
                    <div className="song-card-container">
                        {
                            [1, 23, 3, 4, 5].map(ele => <SongCard key={ele} />)
                        }
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Song