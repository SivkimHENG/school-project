import Header from "../component/Header.jsx"
import Footer from  "../component/Footer.jsx"
import { Search, Globe, Users, Book } from "lucide-react"



export default function About () {


    return(
        <>
    <Header/>
 <div className="min-h-screen flex flex-col bg-green-50">

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">About Culinary Exchange</h2>
          <p className="text-lg text-green-700">
            Culinary Exchange is your gateway to a world of flavors and culinary traditions. Our platform connects food
            enthusiasts, home cooks, and professional chefs from around the globe, allowing them to share recipes,
            techniques, and cultural insights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-800">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Recipe Finder",
                description: "Search thousands of recipes from various cuisines",
                icon: Search,
              },
              { title: "Global Community", description: "Connect with food lovers worldwide", icon: Globe },
              { title: "Cultural Exchange", description: "Learn about food traditions and customs", icon: Users },
              { title: "Personal Cookbook", description: "Save and organize your favorite recipes", icon: Book },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="h-8 w-8 mb-2 text-green-600" />
                <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                <p className="text-green-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Join Our Culinary Community</h2>
          <p className="text-lg text-green-700 mb-6">
            Whether you're looking to expand your recipe collection, share your family's secret dishes, or simply
            explore new flavors, Culinary Exchange is the perfect place for you. Join us today and embark on a delicious
            journey around the world!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Sign Up Now
          </button>
        </section>
      </main>
    </div>
    <Footer/>

        </>

    )



}
