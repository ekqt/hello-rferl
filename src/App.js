import React, { useState, useEffect } from 'react'

import Contact from './components/Contact'
import HashList from './components/HashList'
import Form from './components/Form'

const App = () => {
  const [tags, setTags] = useState(Array.from(window.location.hash.substring(1).split(",")))
  const [newTag, setNewtag] = useState('')

  const handleHashChange = () => setTags(Array.from(window.location.hash.substring(1).split(",")))

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange)
  }, [])

  const handleForm = event => {
    event.preventDefault()
    setTags(tags.concat(newTag.toLowerCase()))
    setNewtag('')
    if (window.location.hash === "") {
      window.location.hash = `${newTag.toLowerCase()}`
    } else {
      window.location.hash = `${window.location.hash},${newTag.toLowerCase()}`
    }

  }

  const handleTagChange = (event) => {
    setNewtag(event.target.value)
  }

  const deleteTag = (event) => {
    const remainingTags = tags.filter(tag => tag !== event.target.innerHTML.substring(3).toLowerCase())
    setTags(remainingTags)
    window.location.hash =`${remainingTags.toString()}`
  }

  return (
    <div className="column is-half is-offset-one-quarter p-5">
      <div className="menu">
        <img className="RFERL" src="https://branding.rferl.org/img/logo_and_brand_image.png" alt="logo"></img>
        <p className="menu-label mb-2">
          Hello, Radio Free Europe/Radio Liberty! My name is Hector Sosa!
        </p>
        <p className="subtitle mb-2">
          I am a full-stack software developer from Honduras, Central America. Now based in the city of Brno, Czech Republic.
        </p>
        <ul className="menu-list">
          <HashList tags={tags} deleteTag={deleteTag} />
          <Form handleForm={handleForm} handleTagChange={handleTagChange} newTag={newTag} />
          <Contact />
        </ul>
      </div>
    </div>
  )
}

export default App