export const Button = ({children}) => {
  return (
    <button type="button" className="bg-gradient-to-r from-cyan-300 via-blue-300 to-blue-500 hover:from-cyan-500 hover:via-blue-500 hover:to-blue-700 py-4 px-8 rounded-lg text-xl text-slate-900 hover:text-white font-bold">{children}</button>
  )
}
