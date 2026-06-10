export const ThemeToggle = `import { useState } from "react";

export function ThemeToggle(){

    const [theme, setTheme] = useState("light")

    return (
        <button className={\`\${theme==="dark" ? "hover:bg-neutral-900 border-neutral-700" : "hover:bg-neutral-300 border-neutral-500"} transition duration-300 cursor-pointer relative flex items-center justify-center  border  rounded-md size-10\` } onClick={() => {setTheme(theme === "dark" ? "light" : "dark"); }}>
            
            {/* change the toggle there */}
            {/* dark */}
            <div className={\`absolute  transition-all duration-300 m-auto  \${theme==="light" ?  "scale-100 " : "scale-0 rotate-45" } \`}    ><DayLogo /></div>
            {/* light */}
            <div className={\`absolute  transition-all duration-300 m-auto \${theme==="dark" ? "scale-100 rotate-0" : "scale-0 rotate-45" } \`} ><NightLogo /></div>
        
        </button>
    );
}

function DayLogo({theme} : any){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={\`size-7  \${theme ==="dark" ? "text-neutral-600" : "text-neutral-700"}\`} >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>

    );
}

function NightLogo(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-neutral-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    );
}`