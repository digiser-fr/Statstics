let _pageoptions = {
    title: 'Status',
    lang: 'en',
    bodyclass: '',
}

import loadcc from './clevercloud.loader.js' // ${loadcc()}

export default function (PageOptions = _pageoptions, content) {

    //const bodyclass = PageOptions.bodyclass != "" ? 'class= "' + PageOptions.bodyclass + '"' : ""

    return `
    
    <!DOCTYPE html>
    <html lang="${PageOptions?.lang ?? "en"}">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="module" src="https://components.clever-cloud.com/load.js?version=5.3.1&lang=fr&magic-mode=dont-use-this-in-prod"></script>
        <title>${PageOptions?.title ?? "Status Page"}</title>
        
    </head>
    <body class="${'bodyclass'}">

    <cc-zone></cc-zone>
<cc-zone mode="small"></cc-zone>
<cc-zone mode="small-infra"></cc-zone>
        ${content}
    <cc-block>
         <div slot="title">This is my block</div>
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat dui at leo porta dignissim. Etiam ut purus ultrices, pulvinar tellus quis, cursus massa. Mauris dignissim accumsan ex, at vestibulum lectus fermentum id. Quisque nec magna arcu. Quisque in metus sed erat sodales euismod eget id purus. Sed sagittis rhoncus mauris. Ut sit amet urna ac nunc semper porta. Nam ut felis eu velit luctus rutrum. Nam leo nisl, molestie a varius non, ullamcorper sit amet tortor. Donec in convallis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit venenatis erat, eu malesuada nulla viverra eu. Curabitur porta risus augue, non rutrum lectus hendrerit a.</div>
  <div>Sed volutpat dolor nec rutrum vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer rhoncus turpis orci, at tempor tortor scelerisque varius. Integer nec fermentum dui. Integer vitae dolor sit amet erat ullamcorper elementum. Donec blandit lacinia erat, vitae blandit libero ornare id. In luctus odio a lacus dignissim, id posuere tortor lacinia. Pellentesque sed massa ac tellus tincidunt rutrum. Praesent commodo enim nibh, ut consectetur tortor consequat non. Aliquam mi enim, mattis eu velit quis, sollicitudin fringilla ex. Donec at augue ultrices, porta justo in, mattis tortor. Nunc sollicitudin nisi eget urna condimentum semper. Pellentesque sagittis quam eu mollis viverra. Proin tincidunt auctor nibh quis suscipit.</div>

    </cc-block>
    </body>
    </html>
    
    `
    // Remove all line breaks - https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
    //.replace(/\r?\n|\r/g, '')

    /* Remove all spaces
    Cannot be used as it also removes spaces from phrases
    .replace(/\s/g, '')
    */
    //.trim()

}