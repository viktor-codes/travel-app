import Image from 'next/image'
import { StringifyOptions } from 'querystring'

type ButtonProps = {
	type: 'button' | 'submit'
	title: string
	icon?: string
	variant: string
	className?: string
}

const Button = ({ type, title, icon, variant, className }: ButtonProps) => {
	return (
		<button
			className={`flexCenter gap-3 rounded-full cursor-pointer ${variant} ${className}`}
			type={type}
		>
			{icon && (
				<Image src={icon} alt={`${title} icon`} width={24} height={24} />
			)}
			<label className='text-base font-bold whitespace-nowrap cursor-pointer'>
				{title}
			</label>
		</button>
	)
}

export default Button
