/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Avatar from './Avatar'
import MenuIcon from './MenuIcon'

const Header = () => {
  return (
    <header className="flex justify-end items-center w-full space-x-4 pt-3 pr-4 text-[13px]">
      <a href="https://mail.google.com">Gmail</a>
      <a href="https://images.google.com">Images</a>
      <MenuIcon />
      <Avatar />
    </header>
  )
}

export default Header
