export const signupSuccessToast = (toast) => {
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
    })
}

export const signupFailedToast = (toast) => {
    toast({
        title: 'Signup failed.',
        description: "This email is already registered!",
        status: 'error',
        duration: 2000,
        isClosable: true,
    })
}

export const serverErrorToast = (toast) => {
    toast({
        title: 'Something went wrong!',
        description: "Try after some time.",
        status: 'error',
        duration: 2000,
        isClosable: true,
    });
}