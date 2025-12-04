import React,{useContext} from 'react';
import { ThemeContext } from './ThemeContext.jsx';




function Home() {

    // const name = props.information.name;
    const {theme, setTheme, info} = useContext(ThemeContext);

    return (
    <>
    {/* <div className="flex flex-col bg-amber-500">
        <div className="bg-sky-900">
            <ul>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div className=''>{name}</div>
        </div>
        <div className='bg-green-500'>Hero Section</div>
        <div className='bg-red-400'>Footer</div>
    </div> */}

    <h1>Current theme: {theme}</h1>
    <h2>{info}</h2>
    <button className='m-2 p-2 border-2' onClick={() => setTheme('dark')}>Click to make it dark</button>
    <button className='m-2 p-2 border-2' onClick={() => setTheme('light')}>Click to make it light</button>
    </>
    );
}

export default Home;