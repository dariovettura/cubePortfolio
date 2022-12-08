import React from "react";
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'


interface Props {

	item?: any,
	scrollTop?:boolean

}


const Card: React.FC<Props> = ({ item ,scrollTop = false}) => {

	const [neon,setNeon] = React.useState(false)

	const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

	const toBase64 = (str: string) =>
		typeof window === 'undefined'
			? Buffer.from(str).toString('base64')
			: window.btoa(str)

	return (
		<motion.li className={`card`}
		whileHover={{
			scale: 1.02,
			transition: { duration: 0.5 },
		}}
	
		onTapStart={()=>setNeon(true)}
		onTapCancel={()=>setNeon(false)}
	>
			<Link href={`/post/${item?.id}`} scroll={scrollTop} >
				<a>
					<div
						className="card-content-container">
						<div className={`card-content ${neon ? "neon":"NOneon" }`}>
							<div className="card-image-container">
								<Image 
									placeholder="blur"
									blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
								alt="Paolo Minopoli" layout="fill"
									className="card-image" src={item?.acf?.anteprima ? item?.acf?.anteprima : "/"} />
							</div>
						</div>
					
					</div>

				</a>
			</Link>

		</motion.li>
	);
}

export default Card;