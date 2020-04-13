import React, { useState } from "react";

export default initialValue => {

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue("")
    }

    return [value, handleChange, reset]

}