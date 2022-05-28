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
								<Image alt="Paolo Minopoli" layout="fill"
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