import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from "react-player";


interface Props {

	content?: any,

}

const ContentLayout: React.FC<Props> = ({ content }) => {

	const contentToArray = () => {
		if (content && content?.acf?.contents)
			return Object.keys(content?.acf?.contents)
				.map(function (key) {
					return content.acf.contents[key];
				})
		else { return [] }
	}

	const lay = contentToArray()

	console.log({ lay }); // ["hello", "this is", "javascript!"]

	const contentRender = (obj: any, i: number) => {
		if (obj && obj.type && obj.type == "image")
			return <div key={i} style={{height:"auto",width:"100%",position:"relative"}}><Image  width={500}
			height={500} src={obj.url} layout="responsive"  />
			{obj.description &&	<p className='post-content-description'>{obj.description}</p>}</div>
		if (obj && obj.type && obj.type == "video")
			return <div key={i}><ReactPlayer
				muted
				className="video_player"
				src={obj.url}
				playsinline
				loop
			/>
					{obj.description &&	<p className='post-content-description'>{obj.description}</p>}</div>
	else
			return <div key={i} className='post-content-container' dangerouslySetInnerHTML={{ __html: obj }} />
	}




	return (
		<>
			{lay.map((obj, i) =>
				contentRender(obj, i)
			)}
		</>
	);
}

export default ContentLayout;