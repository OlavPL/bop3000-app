

const Footer = () => {
    return(
   
        <footer className="mt-auto w-full bg-secondary-500 text-textColor py-4  ">
          <div className="grid grid-cols-3 divide-x">
            <div className="left-footer w-full text-center md:text-left ">
              <ul className="flex flex-col items-center">
                  <li className="inline-block mr-4">
                    <a href="#" className=" hover:text-white">Link 1</a>
                  </li>
                  <li className="inline-block mr-4">
                    <a href="#" className=" hover:text-white">Link 2</a>
                  </li>
                  <li className="inline-block mr-4">
                    <a href="#" className=" hover:text-white">Link 3</a>
                  </li>
                </ul>
            </div>

            <div className="middle-footer w-full text-center md:text-left ">
              <ul className="flex flex-col items-center">
                <li className="inline-block mr-4 ">
                  <a href="#" className=" hover:text-white ">Link 4</a>
                </li>
                <li className="inline-block mr-4">
                  <a href="#" className=" hover:text-white">Link 5</a>
                </li>
                <li className="inline-block mr-4">
                  <a href="#" className=" hover:text-white">Link 6</a>
                </li>
              </ul>
            </div>

            <div className="right-footer w-full text-center md:text-left">
              <ul className="flex flex-col items-center">
                <li className="inline-block mr-4 ">
                  <a href="#" className=" hover:text-white">Link 7</a>
                </li>
                <li className="inline-block mr-4">
                  <a href="#" className=" hover:text-white">Link 8</a>
                </li>
                <li className="inline-block mr-4">
                  <a href="#" className=" hover:text-white">Link 9</a>
                </li>
              </ul>
            </div>
          </div>
    </footer>
    );
}

export default Footer;