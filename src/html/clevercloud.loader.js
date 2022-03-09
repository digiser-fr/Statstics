export default function () {
    // TODO : Remove isDev when this module is ready
    const isDev = true

    let _string = ''

    _string += '<script type="module"'
        + 'src="https://components.clever-cloud.com/load.js?version=5.3.1'
        + '&lang=fr';

    if (isDev) {
        _string += "&magic-mode=dont-use-this-in-prod"
    } else {
        _string += "&components=<component-list>"
    }

    return _string
}