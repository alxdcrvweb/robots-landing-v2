import Link from "next/link";
import style from "./header.module.sass";
const HeaderLink = ({title, link}:any)=>{
    return (
        <Link href={link}>
            <button className={style.createWorker}>
                {title}
            </button>
        </Link>
    )
}
export default HeaderLink