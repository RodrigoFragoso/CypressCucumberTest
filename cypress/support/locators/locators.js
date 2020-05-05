const locators = {
    LOGIN: {
        INPUT_USERNAME: '[data-test=username]',
        INPUT_PASSWORD: '[data-test=password]',
        BTN_LOGIN: '.btn_action',
        MESSAGE_ERROR_LOGIN: '[data-test=error]',
        TEXT_ERROR_LOGIN: 'Epic sadface: Username and password do not match any user in this service'
    },
    TOP_LEFT_MENU: {
        BTN_MENU: '.bm-burger-button > button',
        BTN_LOGOUT: '[id=logout_sidebar_link]'
    }
}
export default locators;