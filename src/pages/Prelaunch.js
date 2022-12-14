import React, { useState } from "react"
import styles from "../styles/prelaunch.module.css"
import axios from "axios"
import Header from "../components/header"

export default function Prelaunch() {
  const url = "http://localhost:4000/bamzi/reservation"
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [industry, setIndustry] = useState("")
  const [designation, setDesignation] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, {
        name: name,
        email: email,
        industry: industry,
        designation: designation,
      })
      .then(res => {
        console.log(res)
      })
    setName("")
    setEmail("")
    setIndustry("")
    setDesignation("")
  }

  return (
    <div className="font font-poppins ">
      <div className={"w-full my-0 mx-auto bg-bluelight min-h-screen"}>
        <Header secNav="prelaunch" bg />

        <div
          className={
            "lg:grid grid-cols-2 flex flex-col py-8 md:px-16 px-6 w-full items-center"
          }
        >
          <div className={"text-center"}>
            <h1
              className={
                "sm:text-4xl text-2xl text-primary font-bold text-left"
              }
            >
              Get Ready, Online Stores Coming Through
            </h1>
            <p className={"text-left text-gray-500 mt-2 sm:text-base text-sm"}>
              Get awesome rewards and discounts, be the first to book your space
              in this awesome digital world. Join us on the train to greatness.
            </p>

            <form
              className={"py-0 mt-4 lg:w-11/12 w-full"}
              onSubmit={e => handleSubmit(e)}
            >
              <input
                className={
                  "py-3 px-4 min-h-7 my-2 mx-0 rounded-3xl outline-none border-none w-full"
                }
                type="text"
                id="name"
                value={name}
                placeholder="Full Name"
                onChange={e => setName(e.target.value)}
              />

              <div className={"flex flex-row justify-between w-full"}>
                <input
                  type="text"
                  id="email"
                  value={email}
                  className={"sm:w-2/3 w-1/2"}
                  placeholder="Email here"
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  id="industry"
                  value={industry}
                  className={"ml-2 sm:w-1/3 w-1/2"}
                  placeholder="Industry"
                  onChange={e => setIndustry(e.target.value)}
                />
              </div>

              <div className={"grid grid-cols-2 gap-1.5 my-2 mx-0"}>
                <div
                  className={
                    "flex cursor-pointer border-2 border-lightorange rounded-3xl bg-transparent items-center justify-center py-2 px-0"
                  }
                  onClick={() => {
                    setDesignation("Buyer")
                    console.log(designation)
                  }}
                >
                  <img
                    src={require("../assets/Icon ionic-ios-cart.png")}
                    width={"16px"}
                  />
                  <p className={"ml-1.5 text-sm text-gray-500"}>Buyer</p>
                </div>
                <div
                  className={
                    "bg-lightorange flex cursor-pointer rounded-3xl items-center justify-center py-2 px-0"
                  }
                  onClick={() => {
                    setDesignation("Seller")
                    console.log(designation)
                  }}
                >
                  <img
                    src={require("../assets/Icon metro-shop.png")}
                    width={"16px"}
                  />
                  <p className={"text-white ml-1.5 text-sm"}>Seller</p>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={
                    "bg-primary text-white py-4 sm:px-16 px-0 my-2 mx-0 rounded-md text-center font-bold sm:w-auto w-full"
                  }
                  style={{ backgroundColor: "#000033" }}
                  onClick={e => handleSubmit(e)}
                >
                  Book your reservation
                </button>
              </div>
            </form>
          </div>

          <div className={styles.jumboImage}>
            <img
              src={require("../assets/Mask.png")}
              className={"object-cover max-w-full h-auto"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
