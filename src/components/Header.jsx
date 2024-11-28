const Header = () => (
    <div className="title flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-800 text-white">
      <h5 className="text-2xl font-bold">Samuel Medina Gonzalez</h5>
      <div className="nav-buttons flex gap-4 mt-4 sm:mt-0">
        <a href="#hello" className="btn bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">Home</a>
        <a href="#skills" className="btn bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">Skills</a>
        <a href="#contact" className="btn bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">Contact</a>
      </div>
    </div>
  );
  
  export default Header;
  