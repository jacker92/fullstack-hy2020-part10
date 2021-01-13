import { Platform } from 'react-native';

const theme = {
    colors: {
        buttonPrimary: '#0041C2',
        tabBackground: "#24292e",
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        mainBackGround: "#e1e4e8",
        errorColor: "#d73a4a"
    },
    text: {
        primary: {
            fontWeight: 'bold',
            fontSize: 14,
            color: 'black'
        }
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;