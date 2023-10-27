const Button = ({ name, style, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`text-white ${style} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none`}
    >
      {name}
    </button>
  )
}

export default Button
