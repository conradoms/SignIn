import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LoginLoading from './pages/LoginLoading';

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            headerShown: false
        }
    }
});

const AppStack = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerShown: false
        }
    }
});

const Routes = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: LoginLoading,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
));

export default Routes;