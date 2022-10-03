import React from 'react'
import Image from 'next/image' 
import { BeakerIcon, ChevronDoubleDownIcon, HomeIcon, MagnifyingGlassIcon, Bars2Icon } from '@heroicons/react/24/solid'
import { StarIcon, BellIcon, ChartBarIcon, GlobeAltIcon, PlusIcon, SparklesIcon, SpeakerWaveIcon, VideoCameraIcon, BarsArrowUpIcon} from '@heroicons/react/24/outline'
import { GOOGLE_FONT_PROVIDER } from 'next/dist/shared/lib/constants'
import {signIn, signOut, useSession} from 'next-auth/react'
import Link from 'next/link'



function Header(){
        const{data: session} = useSession();
    return(
    <div className='sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Link href='/'>
            <Image objectFit='contain' src='https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png' layout='fill'></Image>
            </Link>
        </div>
        <div>

        </div>
        <div className='mx-7 flex items-center xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'>
            </HomeIcon>
            <p className='ml-2 flex-1 hidden lg:inline'>Home</p>
            <ChevronDoubleDownIcon className='h-5 w-5'>
            </ChevronDoubleDownIcon>
        </div>
        <form className='flex flex-1 items-center rounded-2xl space-x-2 border border-gray-200 bg-gray-100 px-3 py-1'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
            <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit'></input>
            <button type='submit' hidden/>
        </form>
        <div className='mx-5 text-gray-500 items-center space-x-2 hidden lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeAltIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 border border-gray-100'/>
            <ChartBarIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerWaveIcon className='icon'/>
        </div>
        <div className='ml-5 flex items-center lg:hidden'>
            <ChartBarIcon className='icon'></ChartBarIcon>
        </div>

        {session ?(
            <div onClick={() => signOut()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <Bars2Icon className='h-5 w-5'/>
                </div>
                <div className='flex-1 text-xs'>
                    <p className='truncate'>{session?.user?.name}</p>
                    <p className='text-gray-500'>1 karma</p>
                </div>

                <ChevronDoubleDownIcon className='h-5 flex-shrink text-gray-400'></ChevronDoubleDownIcon>
            </div>
        ):(
            <div onClick={() => signIn()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <Bars2Icon className='h-5 w-5'/>
                </div>
                <p className='text-gray-500'>Sign In</p>
            </div>
        )}

    </div>
    )
}

export default Header