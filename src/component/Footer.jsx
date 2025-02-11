import {Link}  from "react-router-dom";
import { Facebook,Twitter,Instagram  } from 'lucide-react';



export default function Footer() {

    return (
      
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Culinary Exchange</h3>
              <p className="text-sm">Sharing flavors, one recipe at a time.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-800 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/recipes" className="hover:text-gray-800 transition-colors">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-800 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-800 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-800 transition-colors">
                    Breakfast
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-800 transition-colors">
                    Lunch
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-800 transition-colors">
                    Dinner
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-800 transition-colors">
                    Desserts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Culinary Exchange. All rights reserved.</p>
          </div>
        </div>
      </footer>



    )
}

