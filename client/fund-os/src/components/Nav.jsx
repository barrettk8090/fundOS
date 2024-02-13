// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {ethers} from "ethers";

function Nav({user, setUser, ethAddress, setEthAddress, connectWallet}) {

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
      <Link to="/"> <svg width="150" height="50" viewBox="0 0 725 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M262.408 121H271.24V115.88C271.24 106.579 273.501 99.7093 278.024 95.272C282.632 90.7493 289.117 88.488 297.48 88.488C300.296 88.488 303.24 88.744 306.312 89.256V106.152H300.808C297.053 106.152 294.451 107.005 293 108.712C291.635 110.419 290.952 112.808 290.952 115.88V121H306.312V137.384H290.952V185H271.24V137.384H262.408V121ZM357.67 121H377.382V185H358.822L357.542 177.832C355.579 180.477 352.763 182.611 349.094 184.232C345.51 185.853 341.798 186.664 337.958 186.664C330.705 186.664 324.945 184.403 320.678 179.88C316.497 175.272 314.406 169.043 314.406 161.192V121H334.118V154.024C334.118 159.229 335.057 163.069 336.934 165.544C338.811 167.933 341.755 169.128 345.766 169.128C349.947 169.128 352.977 167.976 354.854 165.672C356.731 163.368 357.67 159.571 357.67 154.28V121ZM411.886 185H392.174V121H410.734L412.014 127.656C416.195 121.853 422.723 118.952 431.598 118.952C439.193 118.952 445.081 121.299 449.262 125.992C453.529 130.6 455.662 137.085 455.662 145.448V185H435.95V150.184C435.95 146.173 434.926 142.973 432.878 140.584C430.83 138.109 428.099 136.872 424.686 136.872C420.761 136.872 417.646 138.067 415.342 140.456C413.038 142.76 411.886 145.917 411.886 149.928V185ZM496.679 186.664C487.463 186.664 480.082 183.635 474.535 177.576C469.074 171.517 466.343 163.453 466.343 153.384C466.343 143.144 469.202 134.867 474.919 128.552C480.636 122.152 488.316 118.952 497.959 118.952C501.884 118.952 505.596 119.677 509.095 121.128C512.594 122.579 515.282 124.499 517.159 126.888V88.488H536.871V185H518.311L517.287 176.808C515.58 179.795 512.85 182.184 509.095 183.976C505.34 185.768 501.202 186.664 496.679 186.664ZM490.279 164.264C493.095 167.165 496.807 168.616 501.415 168.616C506.023 168.616 509.778 167.165 512.679 164.264C515.58 161.277 517.031 157.395 517.031 152.616C517.031 147.837 515.58 143.997 512.679 141.096C509.778 138.109 506.023 136.616 501.415 136.616C496.807 136.616 493.095 138.109 490.279 141.096C487.548 143.997 486.183 147.837 486.183 152.616C486.183 157.395 487.548 161.277 490.279 164.264ZM628.73 102.184C637.349 111.229 641.658 123.005 641.658 137.512C641.658 152.019 637.306 163.837 628.602 172.968C619.983 182.013 608.805 186.536 595.066 186.536C581.413 186.536 570.277 182.013 561.658 172.968C553.125 163.923 548.858 152.147 548.858 137.64C548.858 123.133 553.167 111.357 561.786 102.312C570.405 93.1813 581.541 88.616 595.194 88.616C608.933 88.616 620.111 93.1387 628.73 102.184ZM619.77 137.512C619.77 128.467 617.594 121.384 613.242 116.264C608.89 111.144 602.917 108.584 595.322 108.584C587.642 108.584 581.626 111.144 577.274 116.264C572.922 121.384 570.746 128.467 570.746 137.512C570.746 146.557 572.922 153.683 577.274 158.888C581.626 164.008 587.642 166.568 595.322 166.568C602.917 166.568 608.89 163.965 613.242 158.76C617.594 153.555 619.77 146.472 619.77 137.512ZM650.858 117.8C650.858 109.267 654.101 102.269 660.586 96.808C667.157 91.2613 675.519 88.488 685.674 88.488C695.829 88.488 703.893 91.1333 709.866 96.424C715.839 101.629 718.826 108.712 718.826 117.672H698.218C698.218 114.344 697.066 111.741 694.762 109.864C692.458 107.901 689.343 106.92 685.418 106.92C681.151 106.92 677.781 107.816 675.306 109.608C672.831 111.4 671.594 113.875 671.594 117.032C671.594 119.848 672.362 122.067 673.898 123.688C675.434 125.224 677.866 126.333 681.194 127.016L695.402 129.96C703.935 131.667 710.207 134.653 714.218 138.92C718.314 143.187 720.362 149.032 720.362 156.456C720.362 165.587 717.077 172.925 710.506 178.472C703.935 183.933 695.189 186.664 684.266 186.664C673.685 186.664 665.237 184.019 658.922 178.728C652.607 173.437 649.45 166.355 649.45 157.48H670.058C670.058 160.979 671.295 163.667 673.77 165.544C676.245 167.336 679.786 168.232 684.394 168.232C689.087 168.232 692.799 167.379 695.53 165.672C698.261 163.88 699.626 161.491 699.626 158.504C699.626 155.859 698.943 153.811 697.578 152.36C696.298 150.909 694.079 149.885 690.922 149.288L676.458 146.344C659.391 142.845 650.858 133.331 650.858 117.8Z" fill="#FAFAFA"/>
                    <circle cx="130" cy="125" r="91.5" stroke="white" strokeWidth="13"/>
                    <g clipPath="url(#clip0_36_3)">
                    <path d="M73 117.601L129.5 132.4L186 117.6M73 117.601L129.5 51M73 117.601L129.5 102.801M186 117.6L129.5 51M186 117.6L129.5 102.801M129.5 51V102.801M83.5938 147.2L129.501 199L175.406 147.2L129.5 158.3L83.5938 147.2Z" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_36_3">
                    <rect width="148" height="148" fill="white" transform="translate(60 51)"/>
                    </clipPath>
                    </defs>
                    </svg>
</Link>
    </div>
    <div className="flex">
        <Link to="/create-new-project">
            <button className="mx-4 p-4 font-display animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl">Start A Project +</button>
        </Link>
        <div className="mx-4 mb-6 p-4 bg-pink-600 font-display" onClick={connectWallet}>WalletConnect</div>
        {ethAddress && <p>Your Ethereum address: {ethAddress}</p>}
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
            <Link to="/"> <svg width="725" height="250" viewBox="0 0 725 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M262.408 121H271.24V115.88C271.24 106.579 273.501 99.7093 278.024 95.272C282.632 90.7493 289.117 88.488 297.48 88.488C300.296 88.488 303.24 88.744 306.312 89.256V106.152H300.808C297.053 106.152 294.451 107.005 293 108.712C291.635 110.419 290.952 112.808 290.952 115.88V121H306.312V137.384H290.952V185H271.24V137.384H262.408V121ZM357.67 121H377.382V185H358.822L357.542 177.832C355.579 180.477 352.763 182.611 349.094 184.232C345.51 185.853 341.798 186.664 337.958 186.664C330.705 186.664 324.945 184.403 320.678 179.88C316.497 175.272 314.406 169.043 314.406 161.192V121H334.118V154.024C334.118 159.229 335.057 163.069 336.934 165.544C338.811 167.933 341.755 169.128 345.766 169.128C349.947 169.128 352.977 167.976 354.854 165.672C356.731 163.368 357.67 159.571 357.67 154.28V121ZM411.886 185H392.174V121H410.734L412.014 127.656C416.195 121.853 422.723 118.952 431.598 118.952C439.193 118.952 445.081 121.299 449.262 125.992C453.529 130.6 455.662 137.085 455.662 145.448V185H435.95V150.184C435.95 146.173 434.926 142.973 432.878 140.584C430.83 138.109 428.099 136.872 424.686 136.872C420.761 136.872 417.646 138.067 415.342 140.456C413.038 142.76 411.886 145.917 411.886 149.928V185ZM496.679 186.664C487.463 186.664 480.082 183.635 474.535 177.576C469.074 171.517 466.343 163.453 466.343 153.384C466.343 143.144 469.202 134.867 474.919 128.552C480.636 122.152 488.316 118.952 497.959 118.952C501.884 118.952 505.596 119.677 509.095 121.128C512.594 122.579 515.282 124.499 517.159 126.888V88.488H536.871V185H518.311L517.287 176.808C515.58 179.795 512.85 182.184 509.095 183.976C505.34 185.768 501.202 186.664 496.679 186.664ZM490.279 164.264C493.095 167.165 496.807 168.616 501.415 168.616C506.023 168.616 509.778 167.165 512.679 164.264C515.58 161.277 517.031 157.395 517.031 152.616C517.031 147.837 515.58 143.997 512.679 141.096C509.778 138.109 506.023 136.616 501.415 136.616C496.807 136.616 493.095 138.109 490.279 141.096C487.548 143.997 486.183 147.837 486.183 152.616C486.183 157.395 487.548 161.277 490.279 164.264ZM628.73 102.184C637.349 111.229 641.658 123.005 641.658 137.512C641.658 152.019 637.306 163.837 628.602 172.968C619.983 182.013 608.805 186.536 595.066 186.536C581.413 186.536 570.277 182.013 561.658 172.968C553.125 163.923 548.858 152.147 548.858 137.64C548.858 123.133 553.167 111.357 561.786 102.312C570.405 93.1813 581.541 88.616 595.194 88.616C608.933 88.616 620.111 93.1387 628.73 102.184ZM619.77 137.512C619.77 128.467 617.594 121.384 613.242 116.264C608.89 111.144 602.917 108.584 595.322 108.584C587.642 108.584 581.626 111.144 577.274 116.264C572.922 121.384 570.746 128.467 570.746 137.512C570.746 146.557 572.922 153.683 577.274 158.888C581.626 164.008 587.642 166.568 595.322 166.568C602.917 166.568 608.89 163.965 613.242 158.76C617.594 153.555 619.77 146.472 619.77 137.512ZM650.858 117.8C650.858 109.267 654.101 102.269 660.586 96.808C667.157 91.2613 675.519 88.488 685.674 88.488C695.829 88.488 703.893 91.1333 709.866 96.424C715.839 101.629 718.826 108.712 718.826 117.672H698.218C698.218 114.344 697.066 111.741 694.762 109.864C692.458 107.901 689.343 106.92 685.418 106.92C681.151 106.92 677.781 107.816 675.306 109.608C672.831 111.4 671.594 113.875 671.594 117.032C671.594 119.848 672.362 122.067 673.898 123.688C675.434 125.224 677.866 126.333 681.194 127.016L695.402 129.96C703.935 131.667 710.207 134.653 714.218 138.92C718.314 143.187 720.362 149.032 720.362 156.456C720.362 165.587 717.077 172.925 710.506 178.472C703.935 183.933 695.189 186.664 684.266 186.664C673.685 186.664 665.237 184.019 658.922 178.728C652.607 173.437 649.45 166.355 649.45 157.48H670.058C670.058 160.979 671.295 163.667 673.77 165.544C676.245 167.336 679.786 168.232 684.394 168.232C689.087 168.232 692.799 167.379 695.53 165.672C698.261 163.88 699.626 161.491 699.626 158.504C699.626 155.859 698.943 153.811 697.578 152.36C696.298 150.909 694.079 149.885 690.922 149.288L676.458 146.344C659.391 142.845 650.858 133.331 650.858 117.8Z" fill="#FAFAFA"/>
                          <circle cx="130" cy="125" r="91.5" stroke="white" strokeWidth="13"/>
                          <g clipPath="url(#clip0_36_3)">
                          <path d="M73 117.601L129.5 132.4L186 117.6M73 117.601L129.5 51M73 117.601L129.5 102.801M186 117.6L129.5 51M186 117.6L129.5 102.801M129.5 51V102.801M83.5938 147.2L129.501 199L175.406 147.2L129.5 158.3L83.5938 147.2Z" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_36_3">
                          <rect width="148" height="148" fill="white" transform="translate(60 51)"/>
                          </clipPath>
                          </defs>
                          </svg>
</Link>
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