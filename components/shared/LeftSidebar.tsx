'use client'

import Link from "next/link";
import {sidebarLinks} from "@/constants";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {SignedIn, SignOutButton} from "@clerk/nextjs";

export interface SidebarLink {
    imgURL: string,
    route: string,
    label: string
}

const LeftSidebar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const handleSignOut = () => router.push('/sign-in')

    const isActive = (route: string) => (pathname.includes(route) && route.length > 1) || pathname === route

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
                {sidebarLinks.map((link: SidebarLink) =>
                    (
                        <Link className={`leftsidebar_link ${isActive(link.route) && 'bg-primary-500'}`}
                              key={link.label}
                              href={link.route}>
                            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
                        </Link>
                    ))}
            </div>

            <div className="mt-10 px-6">
                <SignedIn>
                    <SignOutButton signOutCallback={handleSignOut}>
                        <div className='flex cursor-pointer gap-4 p-4'>
                            <Image src='/assets/logout.svg' alt='Logout' width={24} height={24}/>
                            <p className='text-light-2 max-lg:hidden'>Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )

}

export default LeftSidebar;