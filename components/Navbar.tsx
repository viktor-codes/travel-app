import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='border-2 border-red-500 flex justify-between z-30 py-5'>
			<Link href='/' className='text-2xl font-bold ml-5'>
				Travel
			</Link>
		</nav>
	)
}

export default Navbar
