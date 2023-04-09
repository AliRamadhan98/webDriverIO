class OpenPage {
    open (path) {
        return browser.url(`https://cms-portal-staging.cariparkir.co.id/${path}`)
    }
}

module.exports = {OpenPage}