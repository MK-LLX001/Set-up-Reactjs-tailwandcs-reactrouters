import { IoChevronDown } from "react-icons/io5";
import logo from '../assets/react.svg'
import { Link } from "react-router-dom";

export default function Navbar() {

  const menu = [
    {
      label: "home",
      path: "home"
    },
    {
      label: "About",
      path: "about",
      icon: <IoChevronDown />,
      submenu: [
        {
          label: "Connect",
          path: "connect"
        },
        {
          label: "Tel",
          path: "tel"
        }
      ]
    },
    {
      label: "Contact",
      path: "contact"
    }
  ]

  return (
  
    <nav className="navbar shadow  items-center justify-between">

       <div className="flex gap-4 " >
              
            <div className="logo flex items-center gap-2 ">
              <img src={logo} alt="logo" />
              <span className="text-pink font-semibold text-2xl uppercase">Webprofiles </span>
            </div>

            {
              menu.map((menuItem, index) => {
                return (
                  
                  <div key={index} className="relative group">

                    <Link to={menuItem.path} className="text-dark-gray flex font-sans items-center hover:text-gray-600 font-semibold md:text-2xl">
                      {menuItem.label}
                      {menuItem.icon}
                    </Link>
                    {/* sunmemu  */}
                    {
                      menuItem.submenu && (
                        <div className="absolute left-0 w-[10rem] hidden group-hover:block group-focus-within:block bg-white border">
                          {
                            menuItem.submenu.map((subItem, subIndex) => (
                              <Link 
                                key={subIndex} 
                                to={subItem.path} 
                                className="block text-black font-sans hover:text-gray-600 px-4 py-2"
                                tabIndex={-1} // This ensures the submenu items are focusable
                              >
                                {subItem.label}
                              </Link>
                            ))
                          }
                        </div>
                      )
                    }
                  </div>
                )
              })
            }

       </div>
       
      <div className="login flex gap-5 ">
        <button className=" bg-dark-gray text-white py-2 px-4 rounded-xl">login</button>
        <button className=" bg-dark-grey text-white py-2 px-4 rounded-xl">logout</button>
      </div>
    </nav>
  )
}