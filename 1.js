function chuyen_anh(id_anh) {
    let image = [
        "anh1.jpg",
        "anh2.jpg",
        "anh3.jpg",
    ];
    var i = Number(document.getElementById(id_anh).alt);

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
        document.getElementById(id_anh).alt = i;
        document.getElementById(id_anh).src = image[i];
}