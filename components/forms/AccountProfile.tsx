'use client'

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod";
import {UserValidation} from "@/lib/validations/user";
import * as z from 'zod'
import Image from 'next/image'
import React, {ChangeEvent} from "react";
import {Textarea} from "@/components/ui/textarea";
import {useForm} from "react-hook-form";


interface Props {
    user: {
        id: string | undefined;
        objectId: string | undefined;
        username: string | null | undefined;
        name: string;
        bio: string;
        image: string | undefined;
    },
    btnTitle: string
}


const AccountProfile = ({user, btnTitle}: Props) => {

    const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
        e.preventDefault();
    };

    const onSubmit = (values: z.infer<typeof UserValidation>) => {
        console.log(values)
    };

    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: '',
            name: '',
            username: '',
            bio: ''
        }
    })

    const renderProfilePhotoField = ({field}: any) => (
        <FormItem className='flex items-center gap-4'>
            <FormLabel className='account-form_image-label'>
                {field.value ? (
                    <Image
                        src={field.value}
                        alt='profile_icon'
                        width={96}
                        height={96}
                        priority
                        className='rounded-full object-contain'
                    />
                ) : (
                    <Image
                        src='/assets/profile.svg'
                        alt='profile_icon'
                        width={24}
                        height={24}
                        className='object-contain'
                    />
                )}
            </FormLabel>
            <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                    type='file'
                    accept='image/*'
                    placeholder='Add profile photo'
                    className='account-form_image-input'
                    onChange={(e) => handleImage(e, field.onChange)}
                />
            </FormControl>
        </FormItem>
    );

    const renderTextField = (label: string, {field}: any) => (
        <FormItem className='flex items-center gap-3 w-full '>
            <FormLabel className='text-base-semibold text-light-2'>
                {label}
            </FormLabel>
            <FormControl className='account-form_input no-focus'>
                <Input className='account-form_image-input'
                       {...field}
                       type='text'
                />
            </FormControl>
        </FormItem>
    );

    const renderTextAreaField = (label: string, {field}: any) => (
        <FormItem className='flex items-center gap-3 w-full '>
            <FormLabel className='text-base-semibold text-light-2'>
                {label}
            </FormLabel>
            <FormControl className='account-form_input no-focus'>
                <Textarea className='account-form_image-input'
                          rows={10}
                          {...field}
                />
            </FormControl>
        </FormItem>
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col justify-start gap-10">
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={renderProfilePhotoField}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => renderTextField('Name', field)}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => renderTextField('Username', field)}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({field}) => renderTextAreaField('Bio', field)}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default AccountProfile;