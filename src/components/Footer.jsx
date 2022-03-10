/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-[#70757a] flex flex-col divide-y divide-[#dadce0] divide-solid">
      <div className="px-7 py-3">Ghana</div>
      <div className="flex justify-between px-7 py-3">
        <div className="space-x-7">
          <a href="">About</a>
          <a href="">Advertising</a>
          <a href="">Business</a>
          <a href="">How Search works</a>
        </div>
        <div className="space-x-7">
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
