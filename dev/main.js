$(document).ready(function()
{
    console.log("READY");

    $(".nav-side").click(function(event)
    {
        let item = $(this).parent();

        if($(this).css("width") == item.css("width"))
            setWidth(item);
        else
            resetWidth(item);
    });

    $(".open-nav > i").click(function(event)
    {
        $(".navigation").toggle();
    });

    $(".nav-arrow").click(function(event)
    {
        let dropdown = $(this).siblings(".nav-dropdown");

        if(dropdown.height() == 0)
            setHeight(dropdown);
        else
            resetHeight(dropdown);
    });
});

function setWidth(element, w)
{
    element.css("width", w | element[0].scrollWidth);
}

function resetWidth(element)
{
    element.css("width", "");
}

function setHeight(element, h)
{
    element.css("height", element[0].scrollHeight);
}

function resetHeight(element)
{
    element.css("height", "");
}
