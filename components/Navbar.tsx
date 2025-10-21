import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex justify-between z-30 py-5 container mx-auto'>
			<Link href='/'>
				<Image
					src='/hilink-logo.svg'
					alt='HiLink Logo'
					width={74}
					height={29}
				/>
				<ul className='hidden h-full gap-12 lg:flex'>
					{NAV_LINKS.map(link => (
						<Link
							href={link.href}
							key={link.key}
							className='flex items-center font-normal text-lg cursor-pointer pb-1.5 transition-all hover:font-bold'
						>
							{link.label}
						</Link>
					))}
				</ul>
			</Link>
		</nav>
	)
}

export default Navbar
