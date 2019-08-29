//isat_style_media_query_for_desktop_mobile_tablets
var tablets = window.matchMedia("(max-width:  768px)");//for tablet devices
var mobiles = window.matchMedia("(max-width: 480px)");//for mobile devices
var desktops = window.matchMedia("(min-width: 992px)");//for desktop devices
isat_find_device_tablets(tablets);//apply style for tablets
isat_find_device_mobile(mobiles);//apply style for mobiles
isat_find_device_desktops(desktops);//apply style for desktops
// isat_find_device_desktops(desktops,tablets,mobiles);// Call listener function at run time
tablets.addListener(isat_find_device_tablets);//listen untill detect tablet screen size
desktops.addListener(isat_find_device_desktops);//listen untill detect desktop screen size
mobiles.addListener(isat_find_device_mobile);//listen untill detect mobile devices
// desktops.addListener(isat_find_device_desktops);

 // Attach listener function on state changes

function isat_find_device_mobile(mob)
{

//just simply write your rules

}

function isat_find_device_desktops(des)
{

//just simply write your rules 
}

function isat_find_device_tablets(tab)
{

//just simply write your rules
}


//isat_style_media_query_for_desktop_mobile_tablets
