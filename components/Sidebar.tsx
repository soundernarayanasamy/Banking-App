'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '..'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

// const Sidebar = ({user}: SiderbarProps) => {
//     const pathname = usePathname();
//   return (
//     <section className="sidebar">
//         <nav className='flex flex-col gap-4'>
//             <Link href='/' className='mb-12 cursor-pointer items-center flex gap-2 '>
//                 <Image src='/icons/logo.svg' alt='Logo' width={34} height={34} className='size-[24px] max-xl:size-14'/>
//                 <h1 className='sidebar-logo'>Blue Horizon</h1>
//             </Link>
//             {sidebarLinks.map((item)=>{
//                 const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
//                 return (
//                     <Link href={item.route} key={item.label} className={cn('sidebar-link', {"bg-bank-gradient": isActive})}>
//                         <div className='relative size-6'>
//                             <Image 
//                                 src={item.imgURL} 
//                                 alt={item.label}
//                                 fill
//                                 className={cn({'brightness-[3] invert-0' : isActive}
//                                 )}
//                             />
//                         </div>
//                         <p className={cn('sidebar-label', {'!text-white': isActive})}>
//                             {item.label}
//                         </p>
//                     </Link>
//                 )
//             })}
//             USER
//         </nav>
//         FOOTER
//     </section>
//   )
// }
const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname(); // This hook provides the current path

    return (
        <section className="sidebar">
            <nav className='flex flex-col gap-4'>
                {/* Logo and Home link - Removed the conditional bg-bank-gradient class */}
                <Link href='/' className='mb-12 cursor-pointer items-center flex gap-2'>
                    <Image src='/icons/logo.svg' alt='Logo' width={34} height={34} className='size-[24px] max-xl:size-14'/>
                    <h1 className='sidebar-logo'>Blue Horizon</h1>
                </Link>
                {/* Dynamic sidebar links */}
                {sidebarLinks.map((item) => {
                    // Check if the current route matches the item's route for highlighting
                    const isActive = pathname === item.route;
                    return (
                        <Link href={item.route} key={item.label} className={cn('sidebar-link', {"bg-bank-gradient": isActive})}>
                            <div className='relative size-6'>
                                <Image 
                                    src={item.imgURL} 
                                    alt={item.label}
                                    fill
                                    className={cn({'brightness-[3] invert-0': isActive})}
                                />
                            </div>
                            <p className={cn('sidebar-label', {'!text-white': isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}


export default Sidebar
