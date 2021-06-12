document.querySelector('#myBorder_all').value = 0;
document.querySelector('#myBorder_top_left').value = 0;
document.querySelector('#myBorder_top_right').value = 0;
document.querySelector('#myBorder_bottom_right').value = 0;
document.querySelector('#myBorder_bottom_left').value = 0;
document.querySelector('#myBorder_size').value = 10;

document.querySelector('#myShadow1').value = 50;
document.querySelector('#myShadow2').value = 50;
document.querySelector('#myShadow3').value = 0;
document.querySelector('#myShadow4').value = 0;
document.querySelector('#myBorder_color').value = '#00FF00';
document.querySelector('#myBorder_bg_color').value = '#FFFFFF';
document.querySelector('#myShadow_color').value = '#0000FF';

document.querySelector('#myHeight').value = 50;
document.querySelector('#myWidth').value = 50;

document.querySelector('#myTextSize').value = 50;
document.querySelector('#myTextColor').value = '#000000';


let my_border_radius = 0,
    my_border_radius_top_left = 0,
    my_border_radius_top_right = 0,
    my_border_radius_bottom_right = 0,
    my_border_radius_bottom_left = 0,
    my_border_size = 10,
    my_shadow1 = 0,
    my_shadow2 = 0,
    my_shadow3 = 0,
    my_shadow4 = 0,
    my_border_color = '#00FF00',
    my_border_bg_color = 'FFFFFF',
    my_shadow_color = '#0000FF',
    myheight = 300,
    mywidth = 300,
    mytextsize = 50,
    mytextcolor = '#000000';



set_my_style();

document.querySelector('#myHeight').oninput = function () {
    myheight = this.value * 5;
    set_my_style();
}

document.querySelector('#myWidth').oninput = function () {
    mywidth = this.value * 5;
    set_my_style();
}


document.querySelector('#myBorder_all').oninput = function () {
    my_border_radius = this.value;
    document.querySelector('#myBorder_top_left').value = my_border_radius;
    document.querySelector('#myBorder_top_right').value = my_border_radius;
    document.querySelector('#myBorder_bottom_right').value = my_border_radius;
    document.querySelector('#myBorder_bottom_left').value = my_border_radius;
    my_border_radius_top_left = my_border_radius;
    my_border_radius_top_right = my_border_radius;
    my_border_radius_bottom_left = my_border_radius;
    my_border_radius_bottom_right = my_border_radius;

    set_my_style();
}


document.querySelector('#myBorder_top_left').oninput = function () {
    my_border_radius_top_left = this.value;
    set_my_style();
}

document.querySelector('#myBorder_top_right').oninput = function () {
    my_border_radius_top_right = this.value;
    set_my_style();
}

document.querySelector('#myBorder_bottom_left').oninput = function () {
    my_border_radius_bottom_left = this.value;
    set_my_style();
}

document.querySelector('#myBorder_bottom_right').oninput = function () {
    my_border_radius_bottom_right = this.value;
    set_my_style();
}

document.querySelector('#myBorder_size').oninput = function () {
    my_border_size = this.value;
    set_my_style();
}


document.querySelector('#myShadow1').oninput = function () {
    my_shadow1 = this.value - 50;
    set_my_style();
}

document.querySelector('#myShadow2').oninput = function () {
    my_shadow2 = this.value - 50;
    set_my_style();
}

document.querySelector('#myShadow3').oninput = function () {
    my_shadow3 = this.value;
    set_my_style();
}

document.querySelector('#myShadow4').oninput = function () {
    my_shadow4 = this.value;
    set_my_style();
}

document.querySelector('#myShadow_color').oninput = function () {
    my_shadow_color = this.value;
    set_my_style();
}

document.querySelector('#myBorder_color').oninput = function () {
    my_border_color = this.value;
    set_my_style();
}

document.querySelector('#myBorder_bg_color').oninput = function () {
    my_border_bg_color = this.value;
    set_my_style();
}

document.querySelector('#myTextSize').oninput = function () {
    if (this.value < 8) this.value = 8;
    mytextsize = this.value;

    set_my_style();
}

document.querySelector('#myTextColor').oninput = function () {
    mytextcolor = this.value;
    set_my_style();
}

function set_my_style() {
    let my_style = 'height: ' + myheight + 'px; width: ' + mywidth + 'px;';
    my_style += 'border-top-left-radius:' + my_border_radius_top_left / 2 + '%;';
    my_style += 'border-top-right-radius:' + my_border_radius_top_right / 2 + '%;';
    my_style += 'border-bottom-right-radius:' + my_border_radius_bottom_right / 2 + '%;';
    my_style += 'border-bottom-left-radius:' + my_border_radius_bottom_left / 2 + '%;';
    my_style += 'border: ' + my_border_size + 'px solid ' + my_border_color + ';';
    my_style += 'background-color:' + my_border_bg_color + ';';
    my_style += 'box-shadow:' + my_shadow1 + 'px ' + my_shadow2 + 'px ' + my_shadow3 + 'px ' + my_shadow4 + 'px ' + my_shadow_color + ';';
    my_style += 'font-size:' + mytextsize + 'px;';
    my_style += 'color:' + mytextcolor + ';';
    // console.log(my_style);
    document.querySelector('.myBox').style = my_style;
    document.querySelector('#myStyleId').value = my_style;

}


document.querySelector('#my_copy_btn').onclick = function () {
    document.querySelector('#myStyleId').select();
    document.execCommand('copy');
}
