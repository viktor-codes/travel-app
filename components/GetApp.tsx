import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
	return (
		<section className='flexCenter w-full flex-col pb-[100px]'>
			<div className='get-app max-container'>
				<div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
					<h2 className='font-bold text-[40px] lg:text-[64px] xl:max-w-[320px] leading-[120%]'>
						Get for free now!
					</h2>
					<p className='regular-16 text-gray-10'>
						Available on IOS and Android
					</p>
					<div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
						<Button
							type='button'
							title='App Store'
							icon='/apple.svg'
							variant='btn_white'
							className='w-full'
						/>
						<Button
							type='button'
							title='Play Store'
							icon='/android.svg'
							variant='btn_dark_green_outline'
							className='w-full'
						/>
					</div>
				</div>
				<div className='flex flex-1 items-center justify-end'>
					<Image src='/phones.png' alt='phone' width={550} height={870} />
				</div>
			</div>
		</section>
	)
}

export default GetApp
