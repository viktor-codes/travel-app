import Image from 'next/image'

type ButtonProps = {
	type: 'button' | 'submit'
	title: string
	icon?: string
	variant: string
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
	return (
		<button className={`flexCenter gap-3 rounded-full ${variant}`} type={type}>
			{icon && (
				<Image
					src={icon}
					alt={`${title} icon`}
					width={24}
					height={24}
					className=''
				/>
			)}
			<label className='text-base font-bold whitespace-nowrap'>{title}</label>
		</button>
	)
}

export default Button
