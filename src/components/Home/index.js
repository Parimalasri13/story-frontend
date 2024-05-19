import Memes from "../Memes/Memes";
import Stories from '../stories/Stories';
import LifeStories from '../LifeStories/LifeStories';
import FictionalStories from '../FrictionalStories/FictionalStories';
import OtherOptions from '../OtherOptions/OtherOptions';
import './App.css'

function Home(){
    return (
        <main>
                <Stories />
                <Memes />
                <LifeStories />
                <FictionalStories />
                <OtherOptions />
            </main>
    )
}

export default Home