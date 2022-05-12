import React from "react";
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'


interface Props {

	item?: any,
	scrollTop?:boolean

}

const Card: React.FC<Props> = ({ item ,scrollTop = false}) => {


	return (
		<motion.li className={`card`}
		whileHover={{
			scale: 1.05,
			transition: { duration: 0.5 },
		}}
	>
			<Link href={`/post/${item?.id}`} scroll={scrollTop} >
				<a>
					<div
						className="card-content-container">
						<div className="card-content">
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