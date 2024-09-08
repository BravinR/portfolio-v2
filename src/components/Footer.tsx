export const Footer = () => {
    return (
      // <footer className="bg-primary text-white pt-8">
        <footer id="footer" className="bg-primary text-gray-400 z-50 w-screen border-t border-gray-800 pt-3 backdrop-blur">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Replan Cargo */}
            <div className="md:mb-0">
              <h2 className="text-2xl font-bold mb-4 ml-4 md:ml-0">About Me</h2>
              <p className="mx-4 md:mx-0 text-base">
                I&apos;m a backend engineer who loves building (and occasionally designing) high-performance APIs. Currently, my focus is on constructing accessible, user-centric backend systems at Goldman Sachs.
              </p>
            </div>
  
            {/* Company Links */}
            <div className="mb-8">
              <h2 className="ml-4 md:ml-0 text-2xl font-bold mb-4">Links</h2>
              <ul className="ml-4 md:ml-0 text-base">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Blog</a></li>
                <li><a href="/quote">Socil Media</a></li>
                <li><a href="/tracking">GitHub</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
  
            {/* Stay in Touch */}
            <div>
              <h2 className="text-2xl font-bold mb-4 ml-4 md:ml-0">Stay in Touch</h2>
              <p className="text-base ml-4 md:ml-0">
                my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white border border-gray-300 rounded py-2 px-4 md:w-full mx-4 md:mx-0"
                />
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-bold my-4 rounded py-2 px-4 md:w-full w-64 mx-4 md:mx-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-0.5 text-sm md:text-center ml-4 md:ml-0">
          <p>&copy; {new Date().getFullYear()} Bravin. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  