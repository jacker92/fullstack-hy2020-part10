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
    }
};

export const textStyles = {
    infoItem: {
        paddingBottom: 5,
        flexWrap: 'wrap',
        flexShrink: 1,
        fontFamily: theme.fonts.main
    },
    language: {
        backgroundColor: theme.colors.buttonPrimary,
        color: 'white',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 3,
        fontSize: 12,
        fontFamily: theme.fonts.main
    },
    header: {
        ...theme.text.primary,
        fontFamily: theme.fonts.main,
        paddingBottom: 5
    }
};

export const separators = {
    listItemSeparator: {
        height: 10,
        backgroundColor: theme.colors.mainBackGround
    },
};

export default theme;