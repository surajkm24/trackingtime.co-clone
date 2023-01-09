export const loginSuccessToast = (toast) => {
    toast({
        title: 'Login Successful.',
        description: "Welcome back!",
        status: 'success',
        duration: 2000,
        isClosable: true,
    });
}

export const loginFailedToast = (toast) => {
    toast({
        title: 'Login failed.',
        description: "Invalid credentials!",
        status: 'error',
        duration: 2000,
        isClosable: true,
    });
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