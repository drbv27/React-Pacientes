/* const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase rounded-md font-bold mb-3">
      <p>{mensaje}</p>
    </div>
  );
}; */
const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase rounded-md font-bold mb-3">
      {children}
    </div>
  );
};

export default Error;
