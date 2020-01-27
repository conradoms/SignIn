import React, { useEffect } from 'react';

function LoginLoading({ navigator }){
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        console.log(userToken);

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        navigation.navigate(userToken ? 'App' : 'Auth');
    }
    
    useEffect(()=>{
        _bootstrapAsync();
    }, []);

}

export default LoginLoading;