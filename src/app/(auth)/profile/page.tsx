"use client";

import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField, toast, } from "@heroui/react";
import ChangePassword from "../change-password/page";

export default function Profile() {
    const { data: session } = authClient.useSession();
    const currentEmail = session?.user?.email ?? "";

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData: Record<string, string> = {};

    formData.forEach((value, key) => {
        userData[key] = value.toString();
    });

    const email = formData.get("email") as string;
    const imageUrl = formData.get("image") as string;

    const { error: profileError } = await authClient.updateUser({
        image: imageUrl,
        name: userData.name,
    });

    if (profileError) {
        toast.danger(profileError.message);
        return;
    }

    if (email && email !== currentEmail) {
        const { error: emailError } = await authClient.changeEmail({
            newEmail: email,
            callbackURL: "/profile",
        });

        if (emailError) {
            toast.danger(emailError.message);
            return;
        }

        toast.success("Profile updated. Please check your new email to confirm the email change.");
        return;
    }

    toast.success("Profile updated successfully!");
    };

    return (
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly gap-8 md:gap-0 my-10">            
            <Form className="w-full max-w-96" onSubmit={handleUpdateProfile}>
                <Fieldset>
                    <Fieldset.Legend className="text-xl">Profile Settings</Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <FieldGroup>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                        }}>
                        <Label>Name</Label>
                        <Input className='text-white'
                            defaultValue={session?.user?.name ?? ""}
                            placeholder="Enter a name to update"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="email"
                        type="email"
                        validate={(value) => {
                        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                        }}>
                        <Label>Email</Label>
                        <Input className='text-white'
                            defaultValue={currentEmail}
                            placeholder="Enter an email to update"
                        />
                        <FieldError />
                    </TextField>                
                    <TextField name="image">
                        <Label>Profile Image URL</Label>
                        <Input className='text-white'
                            defaultValue={session?.user?.image ?? ""}
                            placeholder="Enter an image URL to update"
                        /> 
                    </TextField>
                    <FieldError />
                    </FieldGroup>
                    <Fieldset.Actions>
                    <Button type="submit">
                        <FloppyDisk />
                        Save changes
                    </Button>
                    <Button type="reset" variant="secondary">
                        Cancel
                    </Button>
                    </Fieldset.Actions>
                </Fieldset>
                </Form>
            <ChangePassword />
        </div>
    );
}