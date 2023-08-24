export function getId(url) {
    var regExp = "/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/";
    var match = url.match(regExp);
    const xuy = ref()
    console.log(match);
    if (match && match[2].length == 11) {
        xuy.value = '<iframe src="//www.youtube.com/embed/${match[2]}" frameborder="0" allowfullscreen></iframe>'
        console.log(xuy.value)
    } else {
        console.error('error');
    }
}
