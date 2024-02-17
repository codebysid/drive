import Link from "next/link"
import { FC } from "react"

type THref = {
  href: string,
  title: string,
  callToAction: string
}
const Href: FC<THref> = ({ href, title, callToAction }) => {
  return (
    <p>
      <span>{title}
        <Link className="font-bold hover:underline" href={href} >
          {callToAction}
        </Link>
      </span>
    </p>
  )
}

export default Href
