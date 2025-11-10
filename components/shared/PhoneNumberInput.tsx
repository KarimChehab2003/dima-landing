"use client"

import { useState } from "react"
import { ButtonGroup } from "../ui/button-group"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { Input } from "../ui/input"

const countryCodes = [
    { value: "+966", label: "Saudi Arabia" },
    { value: "+20", label: "Egypt" },
]

function PhoneNumberInput() {
    const [countryCode, setCountryCode] = useState("+966")
    return (
        <ButtonGroup className="w-full" dir="ltr">
            {/* Select */}
            <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className={`font-mono`}>
                    {countryCode}
                </SelectTrigger>
                <SelectContent className="min-w-[120px]">
                    {countryCodes.map((code) => (
                        <SelectItem key={code.value} value={code.value}>
                            {code.value} <span>{code.label}</span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Phone input */}
            <Input
                type="tel"
                id="formPhoneNumInput"
                name="phoneNum"
                className={`flex-1 text-sm h-10`}
            />
        </ButtonGroup>
    )
}

export default PhoneNumberInput
