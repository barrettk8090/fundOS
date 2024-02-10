// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Nav({user, setUser}) {
    const navigate = useNavigate();

    function handleLogout() {
        fetch('/api/logout', {
          method: "DELETE"
        })
          .then(r => setUser(null));
        navigate('/');
      }
    return (
    <>
       {user ? (<>
       
        <div className="flex justify-between my-4 border-b-2">
    <div className="flex">
      <Link to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 708 250" fill="none">
      <path d="M271.812 171V117.75H262.688V104.312H271.812V99.25C271.812 86.125 278 80 293.875 80C297.25 80 301.062 80.375 303.188 80.8125V92.875C301.875 92.625 300.062 92.5 298.25 92.5C292.25 92.5 289.625 95.125 289.625 99.875V104.312H302.938V117.75H290.062V171H271.812ZM374.438 104V171H356.812V158.938H356.438C353.125 167.375 346.5 172.25 336.375 172.25C321.875 172.25 312.25 162.812 312.25 147.188V104H330.5V143.375C330.5 152.312 334.938 157.062 343 157.062C351.125 157.062 356.188 151.25 356.188 142.375V104H374.438ZM386.312 171V104H403.938V115.938H404.312C407.875 107.625 414.938 102.75 425.25 102.75C440.125 102.75 448.5 112.125 448.5 127.812V171H430.25V131.625C430.25 122.875 426.125 117.875 417.938 117.875C409.75 117.875 404.562 123.875 404.562 132.562V171H386.312ZM484.938 172.062C468.188 172.062 457.625 158.812 457.625 137.375C457.625 116.125 468.25 102.938 485.062 102.938C494.75 102.938 502.25 108.062 505.5 115.5H505.875V80.8125H524.125V171H506.125V159.5H505.812C502.562 166.875 494.812 172.062 484.938 172.062ZM491.125 117.562C481.938 117.562 476.312 125.25 476.312 137.5C476.312 149.812 481.938 157.375 491.125 157.375C500.188 157.375 506 149.75 506 137.5C506 125.312 500.188 117.562 491.125 117.562ZM578.562 79.25C605.25 79.25 622.062 97.1875 622.062 125.938C622.062 154.625 605.25 172.5 578.562 172.5C551.812 172.5 535.062 154.625 535.062 125.938C535.062 97.1875 551.812 79.25 578.562 79.25ZM578.562 95C563.812 95 554.312 107 554.312 125.938C554.312 144.812 563.75 156.75 578.562 156.75C593.312 156.75 602.75 144.812 602.75 125.938C602.75 107 593.312 95 578.562 95ZM630.812 145.25H648.625C649.812 152.812 657.438 157.312 667.688 157.312C677.75 157.312 684.625 152.438 684.625 145.812C684.625 139.875 680.375 136.5 669.062 134.188L659.562 132.312C641.562 128.75 632.75 120.125 632.75 106.688C632.75 90.1875 647.125 79.25 667.188 79.25C688.25 79.25 701.5 90.25 701.812 106.812H684C683.375 99.125 676.688 94.5 667.188 94.5C657.875 94.5 651.625 98.875 651.625 105.5C651.625 111.062 656 114.5 666.625 116.625L676.188 118.562C695.25 122.375 703.562 130.062 703.562 143.75C703.562 161.375 689.75 172.5 667.188 172.5C645.688 172.5 631.375 162.25 630.812 145.25Z" fill="url(#paint0_linear_31_8)"/>
      <ellipse cx="130.5" cy="125" rx="130.5" ry="125" fill="url(#paint1_radial_31_8)" fillOpacity="0.4"/>
      <circle cx="130" cy="125" r="95" stroke="#572794" strokeWidth="6"/>
      <path d="M80.6665 118.834L130 131.167L179.333 118.833M80.6665 118.834L130 63.3334M80.6665 118.834L130 106.501M179.333 118.833L130 63.3334M179.333 118.833L130 106.501M130 63.3334V106.501M89.9165 143.5L130 186.667L170.083 143.5L130 152.75L89.9165 143.5Z" stroke="#572794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_31_8" x1="484.5" y1="49" x2="484.5" y2="202" gradientUnits="userSpaceOnUse">
      <stop stopColor="#572794"/>
      <stop offset="1" stopColor="#C917C2" stopOpacity="0.6"/>
      </linearGradient>
      <radialGradient id="paint1_radial_31_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130.5 125) rotate(90) scale(125 130.5)">
      <stop stopColor="#0056D8"/>
      <stop offset="0.0001" stopColor="#0066FF"/>
      <stop offset="1" stopColor="#FF00F5" stopOpacity="0"/>
      </radialGradient>
      </defs>
                      </svg></Link>
    </div>
    <div className="flex">
        <Link to="/create-new-project">
            <button className="mx-4 p-4 font-display animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Start A Project +</button>
        </Link>
        <div className="mx-4 mb-6 p-4 bg-pink-600 font-display">WalletConnect</div>
    </div>
</div>
            <nav className="justify-end">
                
            
            <div className="flex justify-end font-display text-xl pt-2">
          
                <Link to="/dashboard" className="mx-4 pt-2">Dashboard</Link>
                <Link to="/projects" className="mx-4 pt-2">Projects</Link>
                <Link to="/account" className="mx-4 pt-2">Account</Link>
                <Link to="/project/1" className="mx-4 pt-2">ProjectListingTemp</Link>
                <button className="mx-4" onClick={handleLogout}>Logout</button>
                
            </div>
        </nav>
       </>): 
      
       <nav className="mt-2 flex justify-between w-full">

        <div className="justify-start">
            <Link to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 708 250" fill="none">
    <path d="M271.812 171V117.75H262.688V104.312H271.812V99.25C271.812 86.125 278 80 293.875 80C297.25 80 301.062 80.375 303.188 80.8125V92.875C301.875 92.625 300.062 92.5 298.25 92.5C292.25 92.5 289.625 95.125 289.625 99.875V104.312H302.938V117.75H290.062V171H271.812ZM374.438 104V171H356.812V158.938H356.438C353.125 167.375 346.5 172.25 336.375 172.25C321.875 172.25 312.25 162.812 312.25 147.188V104H330.5V143.375C330.5 152.312 334.938 157.062 343 157.062C351.125 157.062 356.188 151.25 356.188 142.375V104H374.438ZM386.312 171V104H403.938V115.938H404.312C407.875 107.625 414.938 102.75 425.25 102.75C440.125 102.75 448.5 112.125 448.5 127.812V171H430.25V131.625C430.25 122.875 426.125 117.875 417.938 117.875C409.75 117.875 404.562 123.875 404.562 132.562V171H386.312ZM484.938 172.062C468.188 172.062 457.625 158.812 457.625 137.375C457.625 116.125 468.25 102.938 485.062 102.938C494.75 102.938 502.25 108.062 505.5 115.5H505.875V80.8125H524.125V171H506.125V159.5H505.812C502.562 166.875 494.812 172.062 484.938 172.062ZM491.125 117.562C481.938 117.562 476.312 125.25 476.312 137.5C476.312 149.812 481.938 157.375 491.125 157.375C500.188 157.375 506 149.75 506 137.5C506 125.312 500.188 117.562 491.125 117.562ZM578.562 79.25C605.25 79.25 622.062 97.1875 622.062 125.938C622.062 154.625 605.25 172.5 578.562 172.5C551.812 172.5 535.062 154.625 535.062 125.938C535.062 97.1875 551.812 79.25 578.562 79.25ZM578.562 95C563.812 95 554.312 107 554.312 125.938C554.312 144.812 563.75 156.75 578.562 156.75C593.312 156.75 602.75 144.812 602.75 125.938C602.75 107 593.312 95 578.562 95ZM630.812 145.25H648.625C649.812 152.812 657.438 157.312 667.688 157.312C677.75 157.312 684.625 152.438 684.625 145.812C684.625 139.875 680.375 136.5 669.062 134.188L659.562 132.312C641.562 128.75 632.75 120.125 632.75 106.688C632.75 90.1875 647.125 79.25 667.188 79.25C688.25 79.25 701.5 90.25 701.812 106.812H684C683.375 99.125 676.688 94.5 667.188 94.5C657.875 94.5 651.625 98.875 651.625 105.5C651.625 111.062 656 114.5 666.625 116.625L676.188 118.562C695.25 122.375 703.562 130.062 703.562 143.75C703.562 161.375 689.75 172.5 667.188 172.5C645.688 172.5 631.375 162.25 630.812 145.25Z" fill="url(#paint0_linear_31_8)"/>
    <ellipse cx="130.5" cy="125" rx="130.5" ry="125" fill="url(#paint1_radial_31_8)" fillOpacity="0.4"/>
    <circle cx="130" cy="125" r="95" stroke="#572794" strokeWidth="6"/>
    <path d="M80.6665 118.834L130 131.167L179.333 118.833M80.6665 118.834L130 63.3334M80.6665 118.834L130 106.501M179.333 118.833L130 63.3334M179.333 118.833L130 106.501M130 63.3334V106.501M89.9165 143.5L130 186.667L170.083 143.5L130 152.75L89.9165 143.5Z" stroke="#572794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_31_8" x1="484.5" y1="49" x2="484.5" y2="202" gradientUnits="userSpaceOnUse">
    <stop stopColor="#572794"/>
    <stop offset="1" stopColor="#C917C2" stopOpacity="0.6"/>
    </linearGradient>
    <radialGradient id="paint1_radial_31_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130.5 125) rotate(90) scale(125 130.5)">
    <stop stopColor="#0056D8"/>
    <stop offset="0.0001" stopColor="#0066FF"/>
    <stop offset="1" stopColor="#FF00F5" stopOpacity="0"/>
    </radialGradient>
    </defs>
                    </svg></Link>
        </div>

        <div className="flex">
        <Link to="/create-account">
            <div className="p-4 mx-4 bg-white font-display">Create An Account</div>
        </Link>
        <Link to="login">
            <div className="p-4 mx-4 bg-white font-display">Login</div>
        </Link>
      </div>
        </nav>} 
       </> 
    );
}

export default Nav