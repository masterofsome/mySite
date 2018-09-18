$(document).ready(function()
{
    // console.log("READY");
    // $(".nav-item").hover(function(event)
    // {
    //     $(this).toggleClass("nav-view");
    // });
    //
    // $(".nav-icon").click(function(event)
    // {
    //     $(this).parent().toggleClass("nav-hold");
    // });
    //
    $(".nav-arrow").click(function(event)
    {
        // toggleDropdown($(this).parent());

        let dropdown = $(this).siblings(".nav-dropdown")

        let h = dropdown.height();
        console.log(h);
        if(h == 0)
            dropdown.css("height", dropdown[0].scrollHeight);
        else
            dropdown.css("height", 0);
    });
})

// function toggleDropdown(navItem)
// {
//     let dropdown = navItem.find(".nav-dropdown");
//
//     if(dropdown.children().length > 0)
//     {
//         console.log(dropdown.css("height"));
//         if(dropdown.css("height") == "0px")
//         {
//             dropdown.css("height", "auto");
//             navItem.find(".nav-arrow i").text("arrow_drop_up");
//         }
//         else
//         {
//             dropdown.css("height", "0px");
//             navItem.find(".nav-arrow i").text("arrow_drop_down");
//         }
//     }
// }
