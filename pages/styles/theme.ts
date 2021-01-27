interface DefaultTheme {
    colors: {
        rainbow: string;
        grey: string;
        white: string;
        red: string;
        yellow: string;
        purple: string;
        orange: string;
        green: string;
        pink: string;
        turquoise: string;
        shamrock: string;
        mirage: string;
        malibu: string;
        mineShaft: string;
        blue: string;
        bgModal: string;
    };
}

const theme: DefaultTheme = {
    colors: {
        rainbow:
            'linear-gradient(90deg, rgba(218, 73, 242, 0.25) 3%, rgba(218, 73, 242, 0.25) 3.01%, rgba(242, 73, 154, 0.25) 17.65%, rgba(242, 87, 73, 0.25) 31.29%, rgba(242, 134, 39, 0.25) 47.46%, rgba(242, 87, 73, 0.25) 64.64%, rgba(242, 73, 154, 0.25) 81.81%, rgba(218, 73, 242, 0.25) 100%)',
        grey: '#5B6174',
        white: '#FFF',
        red: '#F25749',
        yellow: '#FFE43B',
        purple: '#DA49F2',
        orange: '#F28627',
        green: '#4DBE5D',
        pink: '#F2499A',
        turquoise: '#48DBE4',
        shamrock: '#48E499',
        mirage: '#202040',
        malibu: '#8585FF',
        mineShaft: '#252525',
        blue: '#4886E4',
        bgModal: 'rgba(0,0,0,0.3)',
    },
};

export default theme;
