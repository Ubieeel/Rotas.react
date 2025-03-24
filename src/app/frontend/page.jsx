import Link from "next/link";
import style from './frontend.module.css'

export default function Frontend() {
    return (
        <div>
            <h2>React JS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro reprehenderit illum laudantium! Illo velit voluptatibus voluptate saepe alias. Veritatis iste libero, voluptatem non animi exercitationem assumenda enim aliquid sequi.</p>


            <Link href={"https://react.dev/"} target={"_blank"}> React </Link>
        </div>
    )
}