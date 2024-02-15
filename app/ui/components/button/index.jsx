import Link from "next/link";

const index = (props) => {
    return (
        <Link href={props.href}>
            <button
                type={props.type}
                className={props.className}
            >
                {props.title}
            </button>
        </Link>

    )
}

export default index