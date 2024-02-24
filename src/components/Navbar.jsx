import React from 'react'
import { DrawerDefault } from './Drawer'
import { HomeProfile } from './HomeProfile'


export function ExampleNavbarFour() {



    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto bg-background flex max-w-10xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">

                <DrawerDefault />

                <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">DevUI</span>
                </div>
                <div class="flex grow justify-center items-center focus:border-red-500">
                    <label class="relative block">
                        <input class="placeholder:italic flex h-10 w-[571px] placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none  focus:shadow-lg  focus:shadow-secondary-purple/30   sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                    </label>
                </div>

                {/* </div> */}
                <div className="ml-2 mt-2 hidden lg:block">
                    <HomeProfile />
                </div>
            </div>
        </div>
    )
}


