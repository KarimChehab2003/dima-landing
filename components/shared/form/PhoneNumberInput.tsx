"use client"

import { Dispatch, SetStateAction } from "react"

import { UseFormRegister } from "react-hook-form"
import { FormInputs } from "@/components/shared/form/RequestDemoForm"
import { ButtonGroup } from "@/components/ui/button-group"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

type PhoneNumberInputProps = {
    register: UseFormRegister<FormInputs>,
    countryCode: string,
    setCountryCode: Dispatch<SetStateAction<string>>
}

const countryCodes = [
    { value: "+966", label: "Saudi Arabia" },
    { value: "+20", label: "Egypt" },
]

function PhoneNumberInput({ register, countryCode, setCountryCode }: PhoneNumberInputProps) {

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
                className={`flex-1 text-sm h-10`}
                {...register("phoneNumber")}
            />
        </ButtonGroup>
    )
}

export default PhoneNumberInput
